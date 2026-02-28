/**
 * API communication from popup (runs in iframe).
 * Communicates with parent window, which relays to chrome.runtime.
 */

const MESSAGE_TARGET = 'popup';

/**
 * Send message to content script / background via parent window.
 * Parent receives chrome.runtime messages and posts to iframe; we post back for requests.
 * @param {string} action
 * @param {object} [data]
 * @returns {Promise<any>}
 */
export function sendToContentScript(action, data = {}) {
  return new Promise((resolve, reject) => {
    const id = `msg-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const handler = (event) => {
      if (event.data?.type === 'popupResponse' && event.data?.id === id) {
        window.removeEventListener('message', handler);
        if (event.data.error) {
          reject(new Error(event.data.error));
        } else {
          resolve(event.data.result);
        }
      }
    };
    window.addEventListener('message', handler);
    window.parent?.postMessage(
      {
        source: 'actualPopup',
        target: MESSAGE_TARGET,
        id,
        action,
        data,
      },
      '*'
    );
    setTimeout(() => {
      window.removeEventListener('message', handler);
      reject(new Error('Request timeout'));
    }, 30000);
  });
}

/**
 * Request data from content script.
 * @param {string} type - e.g. 'user', 'settings', 'conversations', 'platformStates'
 * @returns {Promise<any>}
 */
export function requestData(type) {
  return sendToContentScript('requestData', { type });
}

/**
 * Save settings.
 * @param {object} settings
 * @returns {Promise<void>}
 */
export function saveSettings(settings) {
  return sendToContentScript('saveSettings', { settings });
}

/**
 * Run bot task on a platform.
 * @param {string} platform
 * @param {string} task
 * @param {object} [args]
 * @returns {Promise<any>}
 */
export function runTask(platform, task, args = {}) {
  return sendToContentScript('runTask', { platform, task, args });
}
