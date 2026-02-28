/**
 * Network monitoring - stores and tracks intercepted network data.
 */

const networkEntries = new Map(); // requestId -> entry
const processedEntries = new Set(); // "requestId:method" for idempotency

/**
 * Monitors network requests for a tab via the debugger API.
 * @param {number} tabId
 * @param {string} app
 */
export async function monitorNetwork(tabId, app) {
  // Network monitoring is typically done in conjunction with networkInterceptor.
  // This module stores entries captured during interception.
  // The actual attachment/setup is handled by networkInterceptor.attachDebugger
  return;
}

/**
 * Stores an intercepted network entry.
 * @param {Object} entry - { requestId, url, method, headers, requestHeaders, responseHeaders, etc. }
 */
export function storeNetworkEntry(entry) {
  if (entry?.requestId) {
    networkEntries.set(entry.requestId, {
      ...entry,
      timestamp: Date.now(),
    });
  }
}

/**
 * Marks a network entry as processed.
 * @param {string} requestId
 * @param {string} method - e.g. "Request" or "Response"
 */
export function markEntryProcessed(requestId, method) {
  if (requestId && method) {
    processedEntries.add(`${requestId}:${method}`);
  }
}

/**
 * Checks if an entry has been processed.
 * @param {string} requestId
 * @param {string} method
 * @returns {boolean}
 */
export function isEntryProcessed(requestId, method) {
  return requestId && method && processedEntries.has(`${requestId}:${method}`);
}

/**
 * Gets stored entry by request ID.
 * @param {string} requestId
 * @returns {Object|undefined}
 */
export function getNetworkEntry(requestId) {
  return networkEntries.get(requestId);
}

/**
 * Cleans up old entries (call periodically to prevent memory leak).
 * @param {number} maxAgeMs - Max age before removal (default 5 min)
 */
export function cleanupOldEntries(maxAgeMs = 300000) {
  const now = Date.now();
  for (const [id, entry] of networkEntries) {
    if (entry.timestamp && now - entry.timestamp > maxAgeMs) {
      networkEntries.delete(id);
      processedEntries.delete(id.split(':')[0] + ':Request');
      processedEntries.delete(id.split(':')[0] + ':Response');
    }
  }
}
