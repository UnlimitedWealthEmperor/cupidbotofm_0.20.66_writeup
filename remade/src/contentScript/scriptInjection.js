import { getStorageValue, setStorageValue } from './storage';
import { executeTask } from './messaging';
import { manifestVersion } from './platformDetect';

const SCRIPT_CONTENT_PLACEHOLDER = '___SCRIPT_CONTENT___';
const SENTRY_OFFSET_PLACEHOLDER = '___SENTRY_OFFSET___';

async function getPopupScriptPrefix(version) {
  const result = await chrome.runtime.sendMessage({
    action: 'getPopupScriptPrefix',
    version,
  });
  return result.prefix;
}

async function getScriptContent(scriptData) {
  const raw = Uint8Array.from(atob(scriptData.scriptText), (c) => c.charCodeAt(0));
  const iv = raw.subarray(0, 12);
  const tag = raw.subarray(12, 28);
  const cipher = raw.subarray(28);

  const combined = new Uint8Array(cipher.length + tag.length);
  combined.set(cipher, 0);
  combined.set(tag, cipher.length);

  const keyStr = scriptData.url.split('').filter((_, i) => i % 3 === 0).slice(0, 32).join('');
  const cryptoKey = await crypto.subtle.importKey('raw', new TextEncoder().encode(keyStr), { name: 'AES-GCM' }, false, ['decrypt']);

  try {
    const decrypted = await crypto.subtle.decrypt({ name: 'AES-GCM', iv, tagLength: 128 }, cryptoKey, combined);
    return new TextDecoder().decode(decrypted);
  } catch (err) {
    console.error('Decryption failed', err);
    throw err;
  }
}

function wrapPopupScript(prefix, content) {
  const template = `(() => {
window._sentryPopupScriptLineOffset = ${SENTRY_OFFSET_PLACEHOLDER};
${prefix}
${SCRIPT_CONTENT_PLACEHOLDER}
})();
//# sourceURL=actualPopupScript.js`;

  const lineOffset = (template.split(SCRIPT_CONTENT_PLACEHOLDER)[0].match(/\n/g) || []).length;
  return template
    .replace(SENTRY_OFFSET_PLACEHOLDER, String(lineOffset))
    .replace(SCRIPT_CONTENT_PLACEHOLDER, content);
}

function wrapContentScript(content) {
  const template = `(() => {
window._sentryContentScriptLineOffset = ${SENTRY_OFFSET_PLACEHOLDER};
${SCRIPT_CONTENT_PLACEHOLDER}
})();
//# sourceURL=actualContentScript.js`;

  const lineOffset = (template.split(SCRIPT_CONTENT_PLACEHOLDER)[0].match(/\n/g) || []).length;
  return template
    .replace(SENTRY_OFFSET_PLACEHOLDER, String(lineOffset))
    .replace(SCRIPT_CONTENT_PLACEHOLDER, content);
}

export async function loadAndInjectPopupScripts(isAir) {
  if (isAir) {
    const scripts = await getPopupScripts();

    for (let i = 0; i < scripts.length; i++) {
      const scriptData = scripts[i];
      if (!scriptData) continue;

      const isPending = i === 0;
      const prefix = await getPopupScriptPrefix(scriptData.version);
      const content = await getScriptContent(scriptData);
      const script = wrapPopupScript(prefix, content);

      const result = await executeTask('runPopupScript', { script });

      if (result.success) {
        if (isPending) {
          await setStorageValue('currentPopupScript', scriptData);
          await setStorageValue('pendingPopupScript', null);
        }
        break;
      }

      console.log('Failed to inject script');
    }
  } else {
    const prefix = await getPopupScriptPrefix(manifestVersion());
    const chromeUrl = chrome.runtime.getURL('actualPopupScript.js');
    const response = await fetch(chromeUrl);

    if (response.status !== 200) {
      console.error('Failed to fetch actualPopupScript.js');
      return;
    }

    const script = wrapPopupScript(prefix, await response.text());
    const result = await executeTask('runPopupScript', { script });

    if (result.success) {
      console.log('Injected local popup script');
    } else {
      console.log('Failed to inject local popup script');
    }
  }
}

export async function loadAndInjectContentScriptDynamic(isAir) {
  if (isAir) {
    const scriptData = await getStorageValue('currentContentScript', null)
      || await getStorageValue('pendingContentScript', null);
    if (!scriptData) return;

    const content = await getScriptContent(scriptData);
    const wrapped = wrapContentScript(content);
    try {
      new Function(wrapped)();
      console.log('Injected AIR content script');
    } catch (err) {
      console.error('Failed to inject AIR content script', err);
    }
  } else {
    const url = chrome.runtime.getURL('actualContentScript.js');
    const response = await fetch(url);
    if (response.status !== 200) {
      console.error('Failed to fetch actualContentScript.js');
      return;
    }
    const content = await response.text();
    const wrapped = wrapContentScript(content);
    try {
      new Function(wrapped)();
      console.log('Injected local content script');
    } catch (err) {
      console.error('Failed to inject local content script', err);
    }
  }
}

export async function loadAndInjectInjectedScript(isAir) {
  if (isAir) {
    const scriptData = await getStorageValue('currentInjectedScript', null)
      || await getStorageValue('pendingInjectedScript', null);
    if (!scriptData) {
      console.log('No injected script data in storage');
      return;
    }
    const content = await getScriptContent(scriptData);
    injectIntoPageContext(content, 'actualInjectedScript.js');
  } else {
    const scriptEl = document.createElement('script');
    scriptEl.src = chrome.runtime.getURL('actualInjectedScript.js');
    scriptEl.id = 'int-injected-script';
    (document.head || document.documentElement).appendChild(scriptEl);
    await new Promise((resolve) => {
      scriptEl.onload = () => resolve();
      scriptEl.onerror = () => resolve();
    });
    console.log('Injected local injected script');
  }
}

function injectIntoPageContext(code, sourceURL) {
  const scriptEl = document.createElement('script');
  scriptEl.textContent = `${code}\n//# sourceURL=${sourceURL}`;
  (document.head || document.documentElement).appendChild(scriptEl);
  scriptEl.remove();
}

async function getPopupScripts() {
  const current = await getStorageValue('currentPopupScript', null);
  let pending = null;

  if (current) {
    pending = await getStorageValue('pendingPopupScript', null);
  } else {
    pending = await getStorageValue('pendingPopupScript', null);
  }

  return [pending, current];
}
