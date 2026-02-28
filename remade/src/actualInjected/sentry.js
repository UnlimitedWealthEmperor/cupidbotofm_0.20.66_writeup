import { EVENTS } from './config';
import { safeSerialize } from './utils/serialize';
import { isUUID } from './utils/misc';
import { createAssertionGroup } from './utils/errors';

export function forwardToSentry(transactionName, errorMessage) {
  console.warn('Forwarding to sentry capture', errorMessage);
  window.dispatchEvent(new CustomEvent(EVENTS.sentryCapture, {
    detail: {
      transactionName,
      extendedMessage: safeSerialize(errorMessage),
    },
  }));
}

function extractDebugIdFromString(str) {
  if (!str) return null;
  const match = str.match(/sentry-dbid-([a-f0-9-]{36})/i) || str.match(/debugId=([a-f0-9-]{36})/i);
  const id = match?.[1] ?? null;
  return isUUID(id) ? id : null;
}

export function setupSentryDebugId() {
  const { message$ } = createAssertionGroup('injected-sentry');
  try {
    let debugId;
    const identifier = globalThis._sentryDebugIdIdentifier;
    debugId = extractDebugIdFromString(typeof identifier === 'string' ? identifier : null) ?? undefined;

    const debugIds = globalThis._sentryDebugIds;
    if (!debugId && debugIds && typeof debugIds === 'object') {
      const entry = Object.entries(debugIds)
        .filter(([k, v]) => typeof k === 'string' && typeof v === 'string')
        .find(([k]) => k.includes('actualInjectedScript'));
      debugId = entry?.[1];
    }

    if (isUUID(debugId)) {
      try { window.__sentryInjectedDebugId = debugId; } catch {}

      const applyDebugId = () => {
        try {
          if (!document?.documentElement) return false;
          document.documentElement.dataset.sentryInjectedDebugId = debugId;
          window.dispatchEvent(new CustomEvent(EVENTS.sentryDebugId, {
            detail: { debugId, filename: 'actualInjectedScript.js' },
          }));
          return true;
        } catch { return false; }
      };

      if (!applyDebugId()) {
        const retry = () => {
          if (applyDebugId()) {
            document.removeEventListener('DOMContentLoaded', retry);
            document.removeEventListener('readystatechange', retry);
          }
        };
        document.addEventListener('DOMContentLoaded', retry);
        document.addEventListener('readystatechange', retry);
        setTimeout(retry, 0);
      }
    } else if (debugIds && typeof debugIds === 'object' && Object.keys(debugIds).length > 0) {
      forwardToSentry('Missing debug ID in injected context', message$(1, '', {
        sentry: 'rare',
        extra: {
          hasDebugIdIdentifier: typeof identifier === 'string',
          debugIdKeys: Object.keys(debugIds ?? {}).slice(0, 3),
        },
      }, true));
    }
  } catch {}
}

export function setupSessionTimestamp() {
  const epochMs = performance.timeOrigin + performance.now();
  const apply = () => {
    if (!document?.documentElement) return false;
    document.documentElement.dataset.sentryInjectedSessionStartEpochMs = String(epochMs);
    return true;
  };
  try {
    if (!apply()) {
      document.addEventListener('DOMContentLoaded', apply, { once: true });
    }
  } catch {}
}
