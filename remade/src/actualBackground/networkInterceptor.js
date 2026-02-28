/**
 * Network interception via Chrome debugger API.
 * Intercepts requests/responses, modifies headers, spoofs user-agent, adds CORS headers.
 */

import { PLATFORM_CONFIGS } from './platforms.js';

const DEBUGGER_PROTOCOL_VERSION = '1.3';
const attachedTabs = new Set();

/** @type {Map<string, Object[]>} - app -> interception patterns */
let dynamicInterceptions = new Map();

/**
 * Checks if the app needs network interception.
 * @param {string} app - Platform identifier
 * @returns {boolean}
 */
export function shouldIntercept(app) {
  const config = PLATFORM_CONFIGS[app];
  if (!config) return false;
  // Platform-specific: some apps require interception for CORS/headers
  const interceptApps = ['instagram', 'snapchat', 'x', 'messenger', 'reddit'];
  return interceptApps.includes(app);
}

/**
 * Attaches the debugger to a tab.
 * @param {number} tabId
 * @param {string} app
 */
export async function attachDebugger(tabId, app) {
  if (!shouldIntercept(app)) return;

  const debuggee = { tabId };
  try {
    await chrome.debugger.attach(debuggee, DEBUGGER_PROTOCOL_VERSION);
    attachedTabs.add(tabId);
  } catch (e) {
    if (!e?.message?.includes('Already attached')) throw e;
  }
}

/**
 * Detaches the debugger from a tab.
 * @param {number} tabId
 */
export async function detachDebugger(tabId) {
  if (!attachedTabs.has(tabId)) return;
  try {
    await chrome.debugger.detach({ tabId });
  } catch {
    // Ignore if already detached
  }
  attachedTabs.delete(tabId);
}

/**
 * Enables Network domain and sets request interception patterns.
 * @param {number} tabId
 * @param {string} app
 */
export async function setupInterceptionPatterns(tabId, app) {
  if (!shouldIntercept(app)) return;

  const debuggee = { tabId };
  await chrome.debugger.sendCommand(debuggee, 'Network.enable');

  const patterns = await loadDynamicInterceptions(app);
  await chrome.debugger.sendCommand(debuggee, 'Fetch.enable', {
    patterns: patterns.map((p) => ({
      urlPattern: p.urlPattern || '*',
      requestStage: p.requestStage || 'Request',
    })),
  });
}

/**
 * Loads stored interception patterns from storage.
 * @param {string} app
 * @returns {Promise<Object[]>}
 */
export async function loadDynamicInterceptions(app) {
  let patterns = dynamicInterceptions.get(app);
  if (patterns) return patterns;

  try {
    const stored = await chrome.storage.local.get(`interception_${app}`);
    patterns = stored[`interception_${app}`] || getDefaultInterceptionPatterns(app);
  } catch {
    patterns = getDefaultInterceptionPatterns(app);
  }
  dynamicInterceptions.set(app, patterns);
  return patterns;
}

/**
 * Platform-specific default interception patterns.
 * @param {string} app
 * @returns {Object[]}
 */
function getDefaultInterceptionPatterns(app) {
  const basePatterns = [
    { urlPattern: '*', requestStage: 'Request' },
    { urlPattern: '*', requestStage: 'Response' },
  ];
  return basePatterns;
}

/**
 * Handles debugger events, primarily Network.requestIntercepted.
 * @param {Object} source - { tabId }
 * @param {string} method - e.g. "Fetch.requestPaused", "Network.requestIntercepted"
 * @param {Object} params - Event parameters
 */
export async function handleDebuggerEvent(source, method, params) {
  if (method === 'Fetch.requestPaused' || method === 'Network.requestIntercepted') {
    await handleRequestIntercepted(source, params);
  }
}

/**
 * Processes an intercepted request - modifies headers, spoofs user-agent.
 * For responses: adds CORS headers via fulfillRequest.
 */
async function handleRequestIntercepted(source, params) {
  const { requestId, request, responseStatusCode, responseHeaders } = params;
  const debuggee = { tabId: source.tabId };
  const isResponse = responseStatusCode !== undefined;

  try {
    if (!isResponse) {
      const headers = request?.headers || {};
      const ua =
        headers['User-Agent'] ||
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

      const headerEntries = Object.entries({ ...headers, 'User-Agent': ua }).map(
        ([name, value]) => ({ name, value: String(value) })
      );

      await chrome.debugger.sendCommand(debuggee, 'Fetch.continueRequest', {
        requestId,
        headers: headerEntries,
        postData: request?.postData,
      });
    } else {
      const corsHeaders = [
        { name: 'Access-Control-Allow-Origin', value: '*' },
        { name: 'Access-Control-Allow-Methods', value: 'GET, POST, PUT, DELETE, OPTIONS' },
        { name: 'Access-Control-Allow-Headers', value: '*' },
      ];
      const existing = (responseHeaders || []).map((h) =>
        typeof h === 'string'
          ? { name: h.split(':')[0].trim(), value: h.split(':').slice(1).join(':').trim() }
          : { name: h.name, value: h.value }
      );
      const merged = [...existing, ...corsHeaders];

      try {
        const bodyResult = await chrome.debugger.sendCommand(debuggee, 'Fetch.getResponseBody', {
          requestId,
        });
        const bodyB64 =
          bodyResult?.base64Encoded === true
            ? bodyResult.body
            : btoa(unescape(encodeURIComponent(bodyResult?.body || '')));
        await chrome.debugger.sendCommand(debuggee, 'Fetch.fulfillRequest', {
          requestId,
          responseCode: responseStatusCode || 200,
          responseHeaders: merged,
          body: bodyB64,
        });
      } catch {
        await chrome.debugger.sendCommand(debuggee, 'Fetch.continueRequest', { requestId });
      }
    }
  } catch (e) {
    try {
      await chrome.debugger.sendCommand(debuggee, 'Fetch.failRequest', {
        requestId,
        errorReason: 'Failed',
      });
    } catch {
      // Ignore
    }
  }
}
