import { SENTRY_ASYNC_BOUNDARY } from '../config';

export function randomString(length) {
  let result = '';
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(62 * Math.random()));
  }
  return result;
}

export function getReactFiber(element) {
  const fiberKey = Object.keys(element).find((k) => k.startsWith('__reactFiber'));
  return fiberKey ? element[fiberKey] : null;
}

export function appendAsyncBoundary(error, scheduledStack) {
  if (error instanceof Error && scheduledStack && error.stack) {
    if (!error.stack.includes(SENTRY_ASYNC_BOUNDARY)) {
      error.stack = `${error.stack}${SENTRY_ASYNC_BOUNDARY}${scheduledStack}`;
    }
  }
}

export function isTruthy(value) {
  if (!value || value == null) return false;
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') return value.trim().length > 0;
  if (Array.isArray(value)) return value.length !== 0 && value.every(isTruthy);
  if (typeof value === 'object') return Object.keys(value).length > 0;
  if (typeof value === 'number') return value !== 0;
  return !!value;
}

export function isUUID(str) {
  return typeof str === 'string' && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(str);
}

export function safeTry(fn) {
  try {
    const result = fn();
    if (result && typeof result.then === 'function') return result.catch(() => null);
    return result;
  } catch {
    return null;
  }
}

export function isExpired(date, maxAgeMs) {
  return Date.now() - date.getTime() > maxAgeMs;
}

export function secondsToMs(seconds) { return 1000 * seconds; }
export function minutesToMs(minutes) { return 60 * minutes * 1000; }

export function combineTimestamp(seconds, nanos) {
  return seconds + nanos / 1_000_000_000;
}

export function installSetTimeoutStackTraces() {
  if (globalThis.__wingmanSetTimeoutWithStackInstalled) return;

  const originalSetTimeout = globalThis.setTimeout.bind(globalThis);

  globalThis.setTimeout = (callback, delay, ...args) => {
    if (typeof callback !== 'function') return originalSetTimeout(callback, delay, ...args);

    const scheduledStack = new Error('setTimeout scheduled here').stack;

    const wrappedCallback = function (...callbackArgs) {
      try {
        const result = callback.apply(this, callbackArgs);
        if (result != null && typeof result.then === 'function') {
          return result.catch((err) => {
            appendAsyncBoundary(err, scheduledStack);
            throw err;
          });
        }
        return result;
      } catch (err) {
        appendAsyncBoundary(err, scheduledStack);
        throw err;
      }
    };

    return originalSetTimeout(wrappedCallback, delay, ...args);
  };

  globalThis.__wingmanSetTimeoutWithStackInstalled = true;
}
