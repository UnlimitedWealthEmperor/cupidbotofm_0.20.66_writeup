/**
 * Background Air - Dynamically loaded background bot coordination logic.
 * Main entry point for Chrome extension background script.
 */

import { handleChromeAPICall, cleanupListeners, cleanupTabListeners } from './chromeProxy.js';
import { handleFetchRequest } from './fetchProxy.js';
import { generateScriptPrefix } from './scriptInjector.js';
import { markEntryProcessed } from './networkMonitor.js';
import {
  attachDebugger,
  detachDebugger,
  setupInterceptionPatterns,
  handleDebuggerEvent,
  shouldIntercept,
} from './networkInterceptor.js';
import { injectContentScript } from './scriptInjector.js';
import { runCrashDetectionLoop } from './crashDetector.js';
import { PLATFORM_CONFIGS } from './platforms.js';

const UNINSTALL_URL = 'https://example.com/uninstall-survey';

if (globalThis._ranBackgroundAir) {
  console.log('Background air already loaded, skipping');
} else {
  globalThis._ranBackgroundAir = true;
  console.log('Background air loaded');

  chrome.runtime.setUninstallURL(UNINSTALL_URL);

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (!message || typeof message !== 'object') return false;

    const { type } = message;
    const tabId = sender.tab?.id;

    switch (type) {
      case 'chromeAPICall': {
        const { command, args, contextID } = message;
        handleChromeAPICall(command, args, tabId, contextID || 'default', sendResponse);
        return true;
      }
      case 'markNetworkEntryProcessed': {
        const { requestId, method } = message;
        markEntryProcessed(requestId, method);
        sendResponse({ ok: true });
        return false;
      }
      case 'fetch': {
        handleFetchRequest(message, sendResponse);
        return true;
      }
      case 'getPopupScriptPrefix': {
        const { tabId: tid, app, version, isPopup } = message;
        generateScriptPrefix(tid ?? tabId, app, version, isPopup)
          .then((prefix) => sendResponse({ prefix }))
          .catch((e) => sendResponse({ error: e?.message }));
        return true;
      }
      default:
        return false;
    }
  });

  chrome.tabs.onRemoved.addListener((tabId) => {
    cleanupTabListeners(tabId);
    detachDebugger(tabId);
  });

  chrome.webNavigation.onDOMContentLoaded.addListener(async (details) => {
    const app = getAppForUrl(details.url);
    if (app && details.tabId !== -1) {
      await injectContentScript(details.tabId, app);
    }
  });

  chrome.webNavigation.onCommitted.addListener(async (details) => {
    const app = getAppForUrl(details.url);
    if (app && details.tabId !== -1 && shouldIntercept(app)) {
      try {
        await attachDebugger(details.tabId, app);
        await setupInterceptionPatterns(details.tabId, app);
      } catch (e) {
        console.warn('Debugger attach failed:', e);
      }
    }
  });

  chrome.debugger.onEvent.addListener((source, method, params) => {
    handleDebuggerEvent(source, method, params);
  });

  chrome.debugger.onDetach.addListener((source) => {
    if (source.tabId) {
      detachDebugger(source.tabId);
    }
  });

  runCrashDetectionLoop();
}

/**
 * Resolves a URL to its platform app identifier.
 * @param {string} url
 * @returns {string|null}
 */
function getAppForUrl(url) {
  if (!url) return null;
  try {
    const host = new URL(url).hostname.replace(/^www\./, '');
    for (const [app, config] of Object.entries(PLATFORM_CONFIGS)) {
      if (
        host === config.appDomain ||
        host.endsWith('.' + config.appDomain)
      ) {
        const path = new URL(url).pathname;
        const excluded = config.excluded || [];
        if (excluded.some((e) => path.startsWith(e))) return null;
        return app;
      }
    }
  } catch {
    // Invalid URL
  }
  return null;
}
