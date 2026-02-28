import { EVENTS, ERROR_MARKER, IS_DEV_SENTRY_TEST } from './config';
import { installSetTimeoutStackTraces } from './utils/misc';
import { safeSerialize, jsonClone, getErrorMessage } from './utils/serialize';
import { ErrorMessage } from './utils/errors';
import { ContentScriptBridge } from './bridge';
import { setupSentryDebugId, setupSessionTimestamp, forwardToSentry } from './sentry';
import './webpack/base';

import snapchat from './platforms/snapchat/index';
import reddit from './platforms/reddit/index';
import x from './platforms/x/index';
import instagram from './platforms/instagram/index';
import messenger from './platforms/messenger/index';
import webcamSpoof from './platforms/webcam';
import { badoo, pornhub, whatsapp, tiktok, telegram, discord, fetlife, grindr, gvoice, bluesky } from './platforms/stubs';

installSetTimeoutStackTraces();

const platformRegistry = {
  base: ContentScriptBridge,
  snapchat,
  reddit,
  badoo,
  pornhub,
  instagram,
  whatsapp,
  tiktok,
  telegram,
  discord,
  x,
  fetlife,
  messenger,
  grindr,
  gvoice,
  bluesky,
  webcamSpoof,
  webcamPermission: {
    pollWebcamPermission({ eventID }) {
      let lastState = null;
      function check() {
        navigator.permissions.query({ name: 'camera' }).then((result) => {
          if (lastState !== result.state) {
            lastState = result.state;
            window.dispatchEvent(new CustomEvent(eventID, {
              detail: { isEnabled: result.state === 'granted' },
            }));
          }
        });
      }
      check();
      setInterval(check, 1000);
      return true;
    },
  },
};

let currentTaskFnId = null;

function parseFnId(fnId) {
  const [fnScope, fnName] = fnId.split('.');
  return { fnScope, fnName };
}

function handleGlobalError(type, error) {
  if (!currentTaskFnId) return;

  if (error && typeof error === 'object' && ERROR_MARKER in error) {
    const errorData = error.errorData;
    if (errorData) {
      const serialized = error instanceof Error ? jsonClone(error) : error;
      const errMsg = new ErrorMessage(errorData.content, errorData.opts, serialized, errorData.key);
      forwardToSentry(parseFnId(currentTaskFnId).fnName, errMsg);
      return;
    }
  }

  const detail = {
    type,
    fnName: parseFnId(currentTaskFnId).fnName,
    message: getErrorMessage(error, `Unknown ${type}`),
    rawError: error instanceof Error ? jsonClone(error) : (error && typeof error === 'object' ? error : undefined),
    isDevSentryTest: IS_DEV_SENTRY_TEST && !!error && typeof error === 'object' && error.__devSentryTest === true,
  };

  window.dispatchEvent(new CustomEvent(EVENTS.globalErrorCapture, {
    detail: safeSerialize(detail),
  }));
}

async function executeTask(fnId, args) {
  const { fnScope, fnName } = parseFnId(fnId);

  if (platformRegistry[fnScope] == null) {
    const errMsg = `Could not find scope: ${fnScope}`;
    console.error(errMsg);
    return { success: false, error: errMsg, errorData: { content: errMsg, opts: { sentry: false } } };
  }

  const fn = platformRegistry[fnScope][fnName];
  if (fn == null) {
    const errMsg = `Could not find function: ${fnId}`;
    console.error(errMsg);
    return { success: false, error: errMsg, errorData: { content: errMsg, opts: { sentry: false } } };
  }

  try {
    return { success: true, data: await fn(args) };
  } catch (err) {
    console.error(err);
    let errorData = { content: err.message, opts: { sentry: 'veryRare' }, rawData: jsonClone(err) };

    if (err[ERROR_MARKER]) {
      errorData = { ...errorData, ...err.errorData };
      delete errorData.rawData?.errorData;
    }

    return {
      success: false,
      error: err.message || err.name || err.stack,
      errorData,
    };
  }
}

function sendResponse(eventId, result) {
  const scope = eventId.split('-')[0];
  result = safeSerialize(result, scope === 'reddit' ? 6 : Infinity);

  const pollInterval = setInterval(() => {
    window.dispatchEvent(new CustomEvent(eventId, { detail: result }));
  }, 100);

  const ackEventId = `int-acknowledge-${eventId}`;
  const ackHandler = () => {
    clearInterval(pollInterval);
    window.removeEventListener(ackEventId, ackHandler);
  };
  window.addEventListener(ackEventId, ackHandler);
}

// Main initialization
(function init() {
  globalThis.q1 = true;

  setupSessionTimestamp();
  setupSentryDebugId();

  try {
    window.onbeforeunload = null;
    window.onunload = null;
  } catch (err) {
    console.error('Start patches failed', err);
  }

  // Install global error observers
  const errorObserverKey = '__wingmanErrorObserver';
  const existing = globalThis[errorObserverKey];
  if (existing?.onError) window.removeEventListener('error', existing.onError);
  if (existing?.onRejection) window.removeEventListener('unhandledrejection', existing.onRejection);

  const onError = (event) => handleGlobalError('error', event.error ?? event.message);
  const onRejection = (event) => handleGlobalError('rejection', event.reason);

  window.addEventListener('error', onError);
  window.addEventListener('unhandledrejection', onRejection);
  globalThis[errorObserverKey] = { onError, onRejection };

  // Listen for task requests from the content script
  window.addEventListener(EVENTS.beginTask, async (event) => {
    const { fnID, ejectedDataEventID } = event.detail;
    currentTaskFnId = fnID;

    const result = await executeTask(fnID, event.detail);

    if (currentTaskFnId === fnID) currentTaskFnId = null;
    sendResponse(ejectedDataEventID, result);
  });

  globalThis.q2 = true;
})();
