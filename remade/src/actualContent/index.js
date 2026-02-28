/**
 * Main entry point for the actualContentScript - DOM automation engine.
 * Runs in content script context. Guards against double-injection,
 * initializes Sentry, and sets up message listeners.
 */

const INJECTION_MARKER = '__actualContentInjected';

import { initSentry } from './sentry';
import { setupMessageHandlers } from './messageHandler';
import { setupInjectedProxies } from './bridge';

/**
 * Guard against double-injection of the content script.
 */
function guardDoubleInjection() {
  if (window[INJECTION_MARKER]) {
    return false;
  }
  window[INJECTION_MARKER] = true;
  return true;
}

/**
 * Initialize the actualContent script.
 */
function init() {
  if (!guardDoubleInjection()) {
    return;
  }

  // Sentry will be initialized when DSN/release are provided via config
  const sentryDsn = typeof window.__SENTRY_DSN === 'string' ? window.__SENTRY_DSN : null;
  const sentryRelease = typeof window.__SENTRY_RELEASE === 'string' ? window.__SENTRY_RELEASE : null;
  if (sentryDsn) {
    initSentry(sentryDsn, sentryRelease);
  }

  setupMessageHandlers();
  setupInjectedProxies();
}

init();

export { executeTask } from './taskDispatcher';
