/**
 * Task dispatching system - routes tasks to platform-specific handlers
 * or delegates to the injected script via CustomEvent.
 */

import { platformRegistry } from './platforms';
import { sendToInjected } from './bridge';
import { INTERNAL_EVENTS } from '../shared/constants';

/**
 * Execute a task for a given platform.
 * Routes to platform module if available, otherwise sends to injected script.
 *
 * @param {string} platform - Platform name (e.g. 'instagram', 'snapchat')
 * @param {string} taskName - Task identifier (e.g. 'getConversations', 'sendMessage')
 * @param {object} args - Task arguments
 * @returns {Promise<any>} Task result
 */
export async function executeTask(platform, taskName, args = {}) {
  const handler = platformRegistry[platform];
  if (handler && typeof handler[taskName] === 'function') {
    return handler[taskName](args);
  }

  // No platform handler - delegate to injected script
  return sendTaskToInjected(taskName, { ...args, platform });
}

/**
 * Send a task to the injected script via CustomEvent.
 * Injected script listens for beginTask and responds via ejectedDataEventID.
 *
 * @param {string} taskName - Task identifier
 * @param {object} args - Task arguments (including fnID, ejectedDataEventID, taskID)
 * @returns {Promise<any>} Result from injected script
 */
export async function sendTaskToInjected(taskName, args) {
  return new Promise((resolve, reject) => {
    const taskID = args.taskID || generateTaskId();
    const responseEventId = args.ejectedDataEventID || `int-ejectedData-${taskID}`;

    const handler = (event) => {
      window.removeEventListener(responseEventId, handler);
      const detail = event.detail;
      if (detail?.error) {
        reject(new Error(detail.error));
      } else {
        resolve(detail);
      }
    };

    window.addEventListener(responseEventId, handler);

    sendToInjected(INTERNAL_EVENTS.beginTask, {
      fnID: taskName,
      ejectedDataEventID: responseEventId,
      taskID,
      ...args,
    });
  });
}

/**
 * Wait for a task result from the injected script.
 * Used when the content script initiates a task and expects a response.
 *
 * @param {string} responseId - Event ID to listen for
 * @param {number} timeout - Timeout in ms
 * @returns {Promise<any>} Response detail
 */
export function receiveTaskResult(responseId, timeout = 300000) {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      window.removeEventListener(responseId, handler);
      reject(new Error(`Task result timeout: ${responseId}`));
    }, timeout);

    function handler(event) {
      clearTimeout(timeoutId);
      window.removeEventListener(responseId, handler);
      resolve(event.detail);
    }

    window.addEventListener(responseId, handler);
  });
}

function generateTaskId() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 10; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
