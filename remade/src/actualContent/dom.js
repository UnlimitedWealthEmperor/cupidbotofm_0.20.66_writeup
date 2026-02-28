/**
 * DOM manipulation utilities for content script automation.
 */

/**
 * Wait for an element to appear in the DOM.
 *
 * @param {string} selector - CSS selector
 * @param {number} [timeout=10000] - Timeout in ms
 * @returns {Promise<Element>}
 */
export function waitForElement(selector, timeout = 10000) {
  return new Promise((resolve, reject) => {
    const el = document.querySelector(selector);
    if (el) return resolve(el);

    const observer = new MutationObserver(() => {
      const found = document.querySelector(selector);
      if (found) {
        observer.disconnect();
        resolve(found);
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    setTimeout(() => {
      observer.disconnect();
      const found = document.querySelector(selector);
      if (found) resolve(found);
      else reject(new Error(`Element not found: ${selector}`));
    }, timeout);
  });
}

/**
 * Wait for an element to be removed from the DOM.
 *
 * @param {string} selector - CSS selector
 * @param {number} [timeout=10000] - Timeout in ms
 */
export function waitForElementRemoval(selector, timeout = 10000) {
  return new Promise((resolve, reject) => {
    if (!document.querySelector(selector)) return resolve();

    const observer = new MutationObserver(() => {
      if (!document.querySelector(selector)) {
        observer.disconnect();
        resolve();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    setTimeout(() => {
      observer.disconnect();
      if (!document.querySelector(selector)) resolve();
      else reject(new Error(`Element still present: ${selector}`));
    }, timeout);
  });
}

/**
 * Simulate click on element.
 *
 * @param {string|Element} selectorOrElement - CSS selector or element
 */
export function clickElement(selectorOrElement) {
  const el = typeof selectorOrElement === 'string'
    ? document.querySelector(selectorOrElement)
    : selectorOrElement;
  if (!el) throw new Error('Element not found');
  el.click();
}

/**
 * Type text into an input with human-like delays.
 *
 * @param {string|Element} selectorOrElement - CSS selector or element
 * @param {string} text - Text to type
 * @param {object} [options] - { delayMin, delayMax }
 */
export async function typeIntoElement(selectorOrElement, text, options = {}) {
  const el = typeof selectorOrElement === 'string'
    ? document.querySelector(selectorOrElement)
    : selectorOrElement;
  if (!el) throw new Error('Element not found');

  const { delayMin = 50, delayMax = 150 } = options;
  const randomDelay = () => delayMin + Math.random() * (delayMax - delayMin);

  el.focus();
  for (const char of text) {
    simulateKeyPress(char, { target: el });
    await new Promise((r) => setTimeout(r, randomDelay()));
  }
}

/**
 * Clear an input field.
 *
 * @param {string|Element} selectorOrElement - CSS selector or element
 */
export function clearInput(selectorOrElement) {
  const el = typeof selectorOrElement === 'string'
    ? document.querySelector(selectorOrElement)
    : selectorOrElement;
  if (!el) throw new Error('Element not found');
  el.value = '';
  el.dispatchEvent(new Event('input', { bubbles: true }));
}

/**
 * Scroll element into viewport.
 *
 * @param {string|Element} selectorOrElement - CSS selector or element
 */
export function scrollIntoView(selectorOrElement) {
  const el = typeof selectorOrElement === 'string'
    ? document.querySelector(selectorOrElement)
    : selectorOrElement;
  if (!el) throw new Error('Element not found');
  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

/**
 * Get text content of element.
 *
 * @param {string|Element} selectorOrElement - CSS selector or element
 * @returns {string}
 */
export function getElementText(selectorOrElement) {
  const el = typeof selectorOrElement === 'string'
    ? document.querySelector(selectorOrElement)
    : selectorOrElement;
  return el?.textContent?.trim() ?? '';
}

/**
 * Get text from all matching elements.
 *
 * @param {string} selector - CSS selector
 * @returns {string[]}
 */
export function querySelectorAllTexts(selector) {
  return [...document.querySelectorAll(selector)].map((el) => el.textContent?.trim() ?? '');
}

/**
 * Simulate key press.
 *
 * @param {string} key - Key character or key name
 * @param {object} [options] - { target }
 */
export function simulateKeyPress(key, options = {}) {
  const target = options.target ?? document.activeElement ?? document.body;
  const eventInit = { key, code: key, bubbles: true, cancelable: true };
  target.dispatchEvent(new KeyboardEvent('keydown', eventInit));
  target.dispatchEvent(new KeyboardEvent('keypress', eventInit));
  target.dispatchEvent(new KeyboardEvent('keyup', eventInit));
}

/**
 * Dispatch mouse event on element.
 *
 * @param {Element} element - Target element
 * @param {string} eventType - 'click', 'mousedown', 'mouseup', etc.
 */
export function simulateMouseEvent(element, eventType) {
  if (!element) throw new Error('Element required');
  const ev = new MouseEvent(eventType, {
    bubbles: true,
    cancelable: true,
    view: window,
  });
  element.dispatchEvent(ev);
}

/**
 * Create a DOM element.
 *
 * @param {string} tag - Tag name
 * @param {object} [attributes] - Attributes object
 * @param {string|Node|Node[]} [children] - Child content
 * @returns {Element}
 */
export function createElement(tag, attributes = {}, children = null) {
  const el = document.createElement(tag);
  Object.entries(attributes).forEach(([k, v]) => {
    if (k === 'className') el.className = v;
    else if (k === 'style' && typeof v === 'object') Object.assign(el.style, v);
    else if (k.startsWith('on')) el.addEventListener(k.slice(2).toLowerCase(), v);
    else if (v != null) el.setAttribute(k, String(v));
  });
  if (children != null) {
    const nodes = Array.isArray(children)
      ? children
      : typeof children === 'string'
        ? [document.createTextNode(children)]
        : [children];
    nodes.forEach((n) => el.appendChild(typeof n === 'string' ? document.createTextNode(n) : n));
  }
  return el;
}

/**
 * Insert newNode after referenceNode.
 *
 * @param {Node} newNode - Node to insert
 * @param {Node} referenceNode - Reference node
 */
export function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode?.insertBefore(newNode, referenceNode.nextSibling);
}

/**
 * Check if element is visible (not hidden, in viewport, has dimensions).
 *
 * @param {Element} element - Element to check
 * @returns {boolean}
 */
export function isElementVisible(element) {
  if (!element) return false;
  const style = getComputedStyle(element);
  if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') {
    return false;
  }
  const rect = element.getBoundingClientRect();
  return rect.width > 0 && rect.height > 0;
}
