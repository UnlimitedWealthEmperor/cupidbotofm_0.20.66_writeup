/**
 * Chrome message handling - receives messages from background script
 * and dispatches to appropriate handlers.
 */

import { executeTask } from './taskDispatcher';
import { sendToInjected } from './bridge';
import { getCurrentUrl } from './navigation';
import { INTERNAL_EVENTS } from '../shared/constants';

/**
 * Set up all chrome.runtime.onMessage listeners.
 */
export function setupMessageHandlers() {
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    handleMessage(message, sender)
      .then(sendResponse)
      .catch((err) => {
        sendResponse({ success: false, error: err?.message ?? String(err) });
      });
    return true; // Keep channel open for async response
  });
}

/**
 * Route incoming message to the correct handler.
 */
async function handleMessage(message, sender) {
  const { action, ...payload } = message ?? {};

  switch (action) {
    case 'runTask':
      return handleRunTask(payload);

    case 'crashCheck':
    case 'crashCheck1':
      return handleCrashCheck();

    case 'callback':
      return handleCallback(payload);

    case 'getPageInfo':
      return handleGetPageInfo();

    case 'injectScript':
      return handleInjectScript(payload);

    default:
      return { success: false, error: `Unknown action: ${action}` };
  }
}

/**
 * Execute a bot task. Dispatches to platform handler or injected script.
 */
async function handleRunTask({ platform, taskName, args = {}, timeout }) {
  try {
    const result = await executeTask(platform, taskName, args);
    return { success: true, data: result };
  } catch (err) {
    return { success: false, error: err?.message ?? String(err) };
  }
}

/**
 * Respond to crash detection ping from background.
 */
function handleCrashCheck() {
  return Promise.resolve('OK');
}

/**
 * Handle callback relay from background (e.g. after external auth).
 */
async function handleCallback(payload) {
  const { eventId, data } = payload;
  if (eventId) {
    sendToInjected(`int-callback-${eventId}`, data ?? {});
  }
  return { success: true };
}

/**
 * Return current page URL and title.
 */
function handleGetPageInfo() {
  const url = getCurrentUrl();
  const title = document?.title ?? '';
  return { url, title };
}

/**
 * Inject script tag(s) into the page.
 */
async function handleInjectScript({ src, inlineCode, id }) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    if (id) script.id = id;
    if (src) {
      script.src = src;
      script.onload = () => resolve({ success: true });
      script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    } else if (inlineCode) {
      script.textContent = inlineCode;
      try {
        document.documentElement.appendChild(script);
        script.remove();
        resolve({ success: true });
      } catch (err) {
        reject(err);
      }
    } else {
      reject(new Error('injectScript requires src or inlineCode'));
    }
    (document.head || document.documentElement).appendChild(script);
  });
}
