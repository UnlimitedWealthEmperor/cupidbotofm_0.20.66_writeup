/**
 * Content script injection - generates script prefix and injects scripts into tabs.
 */

import { PLATFORM_CONFIGS } from './platforms.js';

/**
 * Builds context data object for injected scripts.
 * @param {string} app - Platform identifier
 * @returns {Promise<Object>} Context with user data, version info, etc.
 */
export async function buildContextData(app) {
  const config = PLATFORM_CONFIGS[app];
  if (!config) return {};

  let version = '0.0.0';
  let userData = {};
  try {
    const stored = await chrome.storage.local.get(['extensionVersion', 'userData']);
    version = stored.extensionVersion || chrome.runtime.getManifest()?.version || version;
    userData = stored.userData || {};
  } catch {
    version = chrome.runtime.getManifest()?.version || version;
  }

  return {
    app,
    appDomain: config.appDomain,
    chatDomain: config.chatDomain,
    restartURL: config.restartURL,
    version,
    userData,
  };
}

/**
 * Serializes context object to URL query string.
 * @param {Object} context
 * @returns {string}
 */
export function buildQueryString(context) {
  return Object.entries(context)
    .map(([k, v]) => {
      const val = typeof v === 'object' ? JSON.stringify(v) : String(v);
      return `${encodeURIComponent(k)}=${encodeURIComponent(val)}`;
    })
    .join('&');
}

/**
 * Generates script prefix for popup/content injection.
 * @param {number} tabId
 * @param {string} app
 * @param {string} version
 * @param {boolean} isPopup
 * @returns {Promise<string>}
 */
export async function generateScriptPrefix(tabId, app, version, isPopup) {
  const context = await buildContextData(app);
  context.tabId = tabId;
  context.version = version || context.version;
  context.isPopup = !!isPopup;
  const query = buildQueryString(context);
  return `(function(){var _ctx=Object.fromEntries(new URLSearchParams("${query.replace(/"/g, '\\"')}").entries());try{_ctx.userData=JSON.parse(_ctx.userData||"{}")}catch(e){}`;
}

/**
 * Injects content scripts into a tab using chrome.scripting or debugger.
 * @param {number} tabId
 * @param {string} app
 */
export async function injectContentScript(tabId, app) {
  const config = PLATFORM_CONFIGS[app];
  if (!config) return;

  const context = await buildContextData(app);
  const prefix = await generateScriptPrefix(tabId, app, context.version, false);

  try {
    if (typeof chrome.scripting?.executeScript === 'function') {
      await chrome.scripting.executeScript({
        target: { tabId },
        files: ['contentScript.js'],
      });
    } else {
      await chrome.tabs.executeScript(tabId, { file: 'contentScript.js' });
    }
  } catch (e) {
    console.warn('Script injection failed:', e);
  }
}
