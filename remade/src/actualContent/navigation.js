/**
 * Page navigation utilities for content script.
 */

/**
 * Navigate current tab to URL.
 *
 * @param {string} url - URL to navigate to
 */
export function navigateTo(url) {
  window.location.href = url;
}

/**
 * Wait for URL to match a pattern.
 *
 * @param {string|RegExp} urlPattern - String (includes) or RegExp
 * @param {number} [timeout=10000] - Timeout in ms
 */
export function waitForNavigation(urlPattern, timeout = 10000) {
  return new Promise((resolve, reject) => {
    const match = () => {
      const url = getCurrentUrl();
      if (typeof urlPattern === 'string') return url.includes(urlPattern);
      return urlPattern.test(url);
    };

    if (match()) return resolve();

    const check = () => {
      if (match()) {
        clearInterval(interval);
        resolve();
      }
    };

    const interval = setInterval(check, 100);
    setTimeout(() => {
      clearInterval(interval);
      if (match()) resolve();
      else reject(new Error(`Navigation timeout: ${urlPattern}`));
    }, timeout);
  });
}

/**
 * Get current page URL.
 *
 * @returns {string}
 */
export function getCurrentUrl() {
  return window.location.href;
}

/**
 * Check if current URL matches pattern.
 *
 * @param {string|RegExp} urlPattern - String (includes) or RegExp
 * @returns {boolean}
 */
export function isOnPage(urlPattern) {
  const url = getCurrentUrl();
  if (typeof urlPattern === 'string') return url.includes(urlPattern);
  return urlPattern.test(url);
}

/**
 * Wait for document ready state.
 *
 * @param {number} [timeout=10000] - Timeout in ms
 */
export function waitForPageLoad(timeout = 10000) {
  return new Promise((resolve, reject) => {
    if (document.readyState === 'complete') return resolve();

    const handler = () => {
      if (document.readyState === 'complete') {
        window.removeEventListener('load', handler);
        resolve();
      }
    };

    window.addEventListener('load', handler);
    setTimeout(() => {
      window.removeEventListener('load', handler);
      if (document.readyState === 'complete') resolve();
      else reject(new Error('Page load timeout'));
    }, timeout);
  });
}
