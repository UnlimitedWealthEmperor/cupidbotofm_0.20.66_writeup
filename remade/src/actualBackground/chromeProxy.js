/**
 * Chrome API forwarding system - allows content scripts to invoke Chrome APIs via the background.
 */

const contextListeners = new Map(); // contextID -> Set of listener callbacks
const tabListeners = new Map(); // tabId -> Set of contextIDs

/**
 * Resolves a dot-notation command (e.g. "tabs.query") to the bound Chrome API method.
 * @param {string} command - e.g. "tabs.query", "runtime.sendMessage"
 * @returns {Function|null} Bound method or null if not found
 */
export function getChromeMethod(command) {
  const parts = command.split('.');
  let obj = chrome;
  for (const part of parts) {
    if (obj == null) return null;
    obj = obj[part];
  }
  return typeof obj === 'function' ? obj.bind(chrome) : null;
}

/**
 * Replaces callback placeholder objects with real callbacks that relay results back.
 * @param {Array} args - Original arguments (may contain { callbackID, callbackIsListener })
 * @param {number} tabId - Tab ID for sendMessage
 * @param {string} contextID - Context identifier for listener cleanup
 * @returns {Array} Transformed args with real callbacks
 */
function replaceCallbacks(args, tabId, contextID, sendResponse) {
  return args.map((arg) => {
    if (
      arg &&
      typeof arg === 'object' &&
      'callbackID' in arg &&
      typeof arg.callbackID === 'string'
    ) {
      const { callbackID, callbackIsListener } = arg;

      const realCallback = (...callbackArgs) => {
        chrome.tabs
          .sendMessage(tabId, {
            type: 'chromeAPICallback',
            callbackID,
            args: callbackArgs,
          })
          .catch(() => {
            chrome.runtime.sendMessage({
              type: 'chromeAPICallback',
              callbackID,
              args: callbackArgs,
            }).catch(() => {});
          });
      };

      if (callbackIsListener) {
        if (!contextListeners.has(contextID)) {
          contextListeners.set(contextID, new Set());
        }
        contextListeners.get(contextID).add(realCallback);
        if (!tabListeners.has(tabId)) {
          tabListeners.set(tabId, new Set());
        }
        tabListeners.get(tabId).add(contextID);
      }

      return realCallback;
    }
    return arg;
  });
}

/**
 * Main handler for Chrome API calls from content scripts.
 * @param {string} command - e.g. "tabs.query"
 * @param {Array} args - Arguments to pass to the API (after callback replacement)
 * @param {number} tabId - Tab ID of sender
 * @param {string} contextID - Context for cleanup
 * @param {Function} sendResponse - Response callback
 */
export async function handleChromeAPICall(command, args, tabId, contextID, sendResponse) {
  const method = getChromeMethod(command);
  if (!method) {
    sendResponse({ error: true, message: `Unknown Chrome API: ${command}` });
    return;
  }

  const transformedArgs = replaceCallbacks(args, tabId, contextID, sendResponse);

  try {
    const result = await method(...transformedArgs);
    if (result !== undefined && typeof result !== 'function') {
      sendResponse({ result });
    }
  } catch (err) {
    sendResponse({
      error: true,
      message: err?.message || String(err),
    });
  }
}

/**
 * Removes all registered listeners for a context.
 * @param {string} contextID
 */
export function cleanupListeners(contextID) {
  const set = contextListeners.get(contextID);
  if (set) {
    contextListeners.delete(contextID);
    for (const [tabId, contextIDs] of tabListeners) {
      contextIDs.delete(contextID);
      if (contextIDs.size === 0) tabListeners.delete(tabId);
    }
  }
}

/**
 * Removes listeners when a tab is removed or navigated.
 * @param {number} tabId
 */
export function cleanupTabListeners(tabId) {
  const contextIDs = tabListeners.get(tabId);
  if (contextIDs) {
    for (const cid of contextIDs) {
      contextListeners.delete(cid);
    }
    tabListeners.delete(tabId);
  }
}
