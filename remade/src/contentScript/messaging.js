import { INTERNAL_EVENTS } from '../shared/constants';
import { getCurrentApp } from './platformDetect';

function generateRandomString(length) {
  let result = '';
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(62 * Math.random()));
  }
  return result;
}

export function setupMessageBridge() {
  window.addEventListener('fromPopupScript', async (event) => {
    const detail = event.detail;
    let response = null;

    if (detail.command === 'runtime.sendMessage') {
      response = await chrome.runtime.sendMessage(detail.args?.[0] ?? {});
    } else {
      response = await chrome.runtime.sendMessage(detail);
    }

    window.dispatchEvent(new CustomEvent(detail.eventID, { detail: response }));
  });
}

export function setupCrashCheck() {
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'crashCheck1') {
      sendResponse('OK');
    }
  });
}

export function waitForEvent(eventName, timeout) {
  return new Promise((resolve) => {
    const timeoutId = setTimeout(() => {
      window.removeEventListener(eventName, handler);
      resolve({
        success: false,
        error: `Timeout, did not complete within ${timeout} ms`,
        errorData: { content: `Timeout, did not complete within ${timeout} ms`, opts: { sentry: false } },
        didTimeout: true,
      });
    }, timeout);

    function handler(event) {
      window.dispatchEvent(new CustomEvent('int-acknowledge-' + eventName));
      clearTimeout(timeoutId);
      window.removeEventListener(eventName, handler);
      resolve(event.detail);
    }

    window.addEventListener(eventName, handler);
  });
}

export async function executeTask(fnID, detail, timeout = 600000) {
  timeout = timeout || 300000;
  const appId = getCurrentApp();
  const taskID = generateRandomString(10);
  const eventID = `${appId}-int-ejectedData-${taskID}`;

  detail.fnID = fnID;
  detail.ejectedDataEventID = eventID;
  detail.taskID = taskID;
  detail.clean = true;

  window.dispatchEvent(new CustomEvent(INTERNAL_EVENTS.beginTask, { detail }));
  return await waitForEvent(eventID, timeout);
}
