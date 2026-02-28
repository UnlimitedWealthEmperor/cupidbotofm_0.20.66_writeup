/**
 * Handles fetch requests from content scripts, converting responses to a serializable format.
 */

/**
 * Converts ArrayBuffer to base64 string.
 * @param {ArrayBuffer} buffer
 * @returns {string}
 */
function arrayBufferToBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i += 8192) {
    binary += String.fromCharCode(...bytes.subarray(i, i + 8192));
  }
  return btoa(binary);
}

/**
 * Handles a fetch request from a content script.
 * Fetches the URL, converts the response to a serializable format including headers,
 * status, body (as base64), and parsed JSON if applicable.
 * @param {Object} request - { url, options?: { method, headers, body } }
 * @param {Function} sendResponse - chrome.runtime.sendMessage callback
 */
export async function handleFetchRequest(request, sendResponse) {
  try {
    const { url, options = {} } = request;
    const { method = 'GET', headers = {}, body } = options;

    const fetchOptions = {
      method,
      headers: new Headers(headers),
    };
    if (body) {
      fetchOptions.body = body;
    }

    const response = await fetch(url, fetchOptions);

    const headersObj = {};
    response.headers.forEach((value, key) => {
      headersObj[key] = value;
    });

    const arrayBuffer = await response.arrayBuffer();
    const bodyBase64 = arrayBufferToBase64(arrayBuffer);
    let json = null;
    const contentType = response.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      try {
        json = JSON.parse(new TextDecoder().decode(arrayBuffer));
      } catch {
        // Not valid JSON, leave json as null
      }
    }

    sendResponse({
      ok: response.ok,
      status: response.status,
      statusText: response.statusText,
      headers: headersObj,
      body: bodyBase64,
      json,
      url: response.url,
    });
  } catch (error) {
    sendResponse({
      error: true,
      message: error?.message || String(error),
    });
  }
}
