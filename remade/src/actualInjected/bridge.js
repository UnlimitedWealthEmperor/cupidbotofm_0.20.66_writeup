import { EVENTS, IS_DEV_SENTRY_TEST, SENTRY_LEVELS } from './config';
import { ErrorMessage } from './utils/errors';
import { randomString } from './utils/misc';

export class ContentScriptBridge {
  static fetch(url, init) {
    return new Promise((resolve, reject) => {
      const taskId = randomString(8);
      const responseEventId = `int-ejectedData-${taskId}`;

      const handler = (event) => {
        window.dispatchEvent(new CustomEvent(`int-acknowledge-${responseEventId}`));
        window.removeEventListener(responseEventId, handler);
        if (event.detail.success) {
          resolve(event.detail.data);
        } else {
          reject(event.detail.error);
        }
      };

      window.addEventListener(responseEventId, handler);
      window.dispatchEvent(new CustomEvent(EVENTS.backgroundFetch, {
        detail: { url, init, ejectedDataEventID: responseEventId },
      }));
    });
  }

  static evalCode({ code }) {
    return new Promise((resolve, reject) => {
      const taskId = randomString(8);
      const responseEventId = `int-ejectedData-${taskId}`;

      const handler = (event) => {
        window.dispatchEvent(new CustomEvent(`int-acknowledge-${responseEventId}`));
        window.removeEventListener(responseEventId, handler);
        if (event.detail.success) {
          resolve(event.detail.data);
        } else {
          reject(event.detail.error);
        }
      };

      window.addEventListener(responseEventId, handler);
      window.dispatchEvent(new CustomEvent(EVENTS.evalCode, {
        detail: { c: code, ejectedDataEventID: responseEventId },
      }));
    });
  }

  static ping() {
    return true;
  }

  static devSentryTest() {
    if (!IS_DEV_SENTRY_TEST) return;
    throw new ErrorMessage('[INJECTED] Dev test - expected file: base.ts', {
      sentry: 'always',
      sentryLevel: SENTRY_LEVELS.error,
      key: 'dev-sentry-injected',
      skipFingerprint: true,
    }).createError();
  }

  static async devSentrySdkTest() {
    if (!IS_DEV_SENTRY_TEST) return false;
    const err = new ErrorMessage('Dev test (sdk stack) - expected exception capture', {
      sentry: 'always',
      sentryLevel: SENTRY_LEVELS.error,
      key: 'dev-sentry-sdk-stack',
      skipFingerprint: true,
    }).createError(new Error('Dev test (sdk stack) - expected exception capture'));
    err.__devSentryTest = true;
    err.code = 13;
    throw err;
  }

  static async devSentrySdkNoStackTest() {
    if (!IS_DEV_SENTRY_TEST) return false;
    const err = new ErrorMessage('message goes here', {
      sentry: 'always',
      sentryLevel: SENTRY_LEVELS.error,
      key: 'dev-sentry-sdk-no-stack',
      skipFingerprint: true,
    }).createError({ message: 'message goes here' });
    err.__devSentryTest = true;
    err.code = 13;
    throw err;
  }

  static async devSentrySdkNoStackEmptyMessageTest() {
    if (!IS_DEV_SENTRY_TEST) return false;
    const err = new ErrorMessage('', {
      sentry: 'always',
      sentryLevel: SENTRY_LEVELS.error,
      key: 'dev-sentry-sdk-no-stack-empty-message',
      skipFingerprint: true,
      networkRelated: true,
    }).createError({
      message: '',
      name: 'AjaxError',
      networkError: '',
      responseText: '',
      statusCode: 0,
      url: '/api/v1/friendships/pending/',
    });
    err.__devSentryTest = true;
    err.code = 13;
    throw err;
  }

  static async devSentrySdkGlobalTest() {
    if (!IS_DEV_SENTRY_TEST) return false;
    setTimeout(() => {
      const err = new Error('Dev test (stack) - expected file: base.ts');
      err.__devSentryTest = true;
      throw err;
    }, 0);
    await new Promise((r) => setTimeout(r, 50));
    return true;
  }

  static async devSentrySdkGlobalNoStackTest() {
    if (!IS_DEV_SENTRY_TEST) return false;
    setTimeout(() => {
      throw { message: 'Dev test (no stack) - expected file: base.ts', __devSentryTest: true };
    }, 0);
    await new Promise((r) => setTimeout(r, 50));
    return true;
  }
}
