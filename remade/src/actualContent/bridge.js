/**
 * Communication bridge between content script and injected script.
 * Content script runs in isolated world; injected script runs in page context.
 * CustomEvents on window bridge the two contexts.
 */

import { INTERNAL_EVENTS } from '../shared/constants';

// Re-export event constants for consumers
export const EVENTS = { ...INTERNAL_EVENTS };

/**
 * Send data to the injected script via CustomEvent.
 * The injected script listens on window for these events.
 *
 * @param {string} eventName - Event name (use EVENTS constants)
 * @param {object} data - Payload in event.detail
 */
export function sendToInjected(eventName, data = {}) {
  window.dispatchEvent(
    new CustomEvent(eventName, {
      detail: data,
      bubbles: true,
    })
  );
}

/**
 * Listen for CustomEvents from the injected script.
 * Injected script dispatches events that bubble to window.
 *
 * @param {string} eventName - Event name to listen for
 * @param {function} callback - (event) => void, receives event.detail
 * @returns {function} Unsubscribe function
 */
export function listenFromInjected(eventName, callback) {
  const handler = (event) => callback(event.detail);
  window.addEventListener(eventName, handler);
  return () => window.removeEventListener(eventName, handler);
}

/**
 * Proxy fetch for injected script. Content script has fetch access; injected may hit CORS.
 *
 * @param {string} url - Request URL
 * @param {object} options - Fetch init options
 * @returns {Promise<object>} { ok, status, headers, body } or { error }
 */
export async function proxyFetch(url, options = {}) {
  try {
    const res = await fetch(url, options);
    const cloned = res.clone();
    const text = await cloned.text();
    let body;
    try {
      body = JSON.parse(text);
    } catch {
      body = text;
    }
    return {
      success: true,
      data: {
        ok: res.ok,
        status: res.status,
        headers: Object.fromEntries(res.headers.entries()),
        body,
      },
    };
  } catch (err) {
    return { success: false, error: err?.message ?? String(err) };
  }
}

/**
 * Proxy eval for injected script. Runs code in page context via injected script tag.
 *
 * @param {string} code - Code to evaluate
 * @returns {Promise<any>} Eval result
 */
export function proxyEvalCode(code) {
  return new Promise((resolve, reject) => {
    const eventId = `int-eval-result-${Math.random().toString(36).slice(2)}`;
    const script = document.createElement('script');
    script.textContent = `(function(){try{var r=eval(${JSON.stringify(code)});window.dispatchEvent(new CustomEvent(${JSON.stringify(eventId)},{detail:{result:r}}));}catch(e){window.dispatchEvent(new CustomEvent(${JSON.stringify(eventId)},{detail:{error:e.message}}));}})();`;
    const handler = (e) => {
      try { script.remove(); } catch {}
      window.removeEventListener(eventId, handler);
      const d = e.detail;
      if (d?.error) reject(new Error(d.error));
      else resolve(d?.result);
    };
    window.addEventListener(eventId, handler);
    (document.head || document.documentElement).appendChild(script);
  });
}

/**
 * Set up listeners for fetch and eval requests from injected script.
 */
export function setupInjectedProxies() {
  listenFromInjected(EVENTS.backgroundFetch, async (detail) => {
    const { url, init, ejectedDataEventID } = detail ?? {};
    if (!ejectedDataEventID) return;
    const result = await proxyFetch(url, init ?? {});
    sendToInjected(ejectedDataEventID, result);
  });

  listenFromInjected(EVENTS.evalCode, async (detail) => {
    const { c: code, ejectedDataEventID } = detail ?? {};
    if (!ejectedDataEventID) return;
    try {
      const result = await proxyEvalCode(code);
      sendToInjected(ejectedDataEventID, { success: true, data: result });
    } catch (err) {
      sendToInjected(ejectedDataEventID, { success: false, error: err?.message ?? String(err) });
    }
  });
}
