/**
 * API communication from content script.
 * Proxies requests through background script when needed (CORS, auth).
 */

/**
 * Send API request via background script.
 * Background has full fetch access and can attach auth headers.
 *
 * @param {string} endpoint - API endpoint path (e.g. 'v1/messages')
 * @param {string} [method='GET'] - HTTP method
 * @param {string} app - Platform/app name
 * @param {object} [params] - Extra params
 * @returns {Promise<any>}
 */
export async function apiFetch(endpoint, method = 'GET', app, params = {}) {
  const response = await chrome.runtime.sendMessage({
    action: 'apiFetch',
    endpoint,
    method,
    app,
    params,
  });

  if (response?.error) {
    throw new Error(response.error);
  }
  return response;
}

/**
 * Proxied fetch through background script.
 * Use when content script fetch hits CORS restrictions.
 *
 * @param {string} url - Full URL
 * @param {object} [options] - Fetch init options
 * @returns {Promise<Response>}
 */
export async function backgroundFetch(url, options = {}) {
  const response = await chrome.runtime.sendMessage({
    action: 'fetch',
    url,
    options,
  });

  if (response?.error) {
    throw new Error(response.error);
  }
  return response;
}
