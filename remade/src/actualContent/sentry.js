/**
 * Sentry integration for content script context.
 * Handles errors and events forwarded from injected script.
 */

import { EVENTS, listenFromInjected } from './bridge';

let _sentryInitialized = false;

/**
 * Initialize Sentry SDK in content script context.
 *
 * @param {string} dsn - Sentry DSN
 * @param {string} [release] - Release version
 */
export function initSentry(dsn, release) {
  if (_sentryInitialized || !dsn) return;

  try {
    // Sentry browser SDK initialization
    // In content script we may use @sentry/browser - stub for now
    if (typeof window.Sentry !== 'undefined') {
      window.Sentry.init({ dsn, release });
      _sentryInitialized = true;
    }
  } catch (err) {
    console.warn('[actualContent] Sentry init failed:', err);
  }
}

/**
 * Capture an exception to Sentry.
 *
 * @param {Error} error - Error to capture
 * @param {object} [context] - Additional context
 */
export function captureException(error, context = {}) {
  try {
    if (window.Sentry?.captureException) {
      window.Sentry.withScope((scope) => {
        Object.entries(context).forEach(([k, v]) => scope.setExtra(k, v));
        window.Sentry.captureException(error);
      });
    }
  } catch (e) {
    console.warn('[actualContent] Sentry captureException failed:', e);
  }
}

/**
 * Capture a message to Sentry.
 *
 * @param {string} message - Message text
 * @param {string} [level='info'] - Sentry level: fatal, error, warning, log, info, debug
 * @param {object} [context] - Additional context
 */
export function captureMessage(message, level = 'info', context = {}) {
  try {
    if (window.Sentry?.captureMessage) {
      window.Sentry.withScope((scope) => {
        Object.entries(context).forEach(([k, v]) => scope.setExtra(k, v));
        window.Sentry.captureMessage(message, level);
      });
    }
  } catch (e) {
    console.warn('[actualContent] Sentry captureMessage failed:', e);
  }
}

/**
 * Set Sentry context/breadcrumb.
 *
 * @param {string} name - Context name
 * @param {object} data - Context data
 */
export function setContext(name, data) {
  try {
    if (window.Sentry?.setContext) {
      window.Sentry.setContext(name, data);
    }
  } catch (e) {
    console.warn('[actualContent] Sentry setContext failed:', e);
  }
}

/**
 * Listen for Sentry events forwarded from injected script.
 * Injected script dispatches EVENTS.sentryCapture when it wants to report.
 */
export function setupSentryForwardListener() {
  listenFromInjected(EVENTS.sentryCapture, (detail) => {
    const { transactionName, extendedMessage, level } = detail ?? {};
    if (extendedMessage) {
      captureMessage(extendedMessage, level || 'error', { transactionName });
    }
  });
}
