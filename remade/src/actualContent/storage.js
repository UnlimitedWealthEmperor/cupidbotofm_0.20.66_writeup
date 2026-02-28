/**
 * Storage utilities for content script.
 * Uses chrome.storage.local for extension state.
 */

/**
 * Get value from chrome.storage.local.
 *
 * @param {string} key - Storage key
 * @param {*} [defaultVal] - Default if key missing
 * @returns {Promise<*>}
 */
export function getStorageValue(key, defaultVal = undefined) {
  return new Promise((resolve) => {
    chrome.storage.local.get([key], (result) => {
      resolve(key in result ? result[key] : defaultVal);
    });
  });
}

/**
 * Set value in chrome.storage.local.
 *
 * @param {string} key - Storage key
 * @param {*} value - Value to store
 * @returns {Promise<void>}
 */
export function setStorageValue(key, value) {
  return new Promise((resolve) => {
    chrome.storage.local.set({ [key]: value }, resolve);
  });
}

/**
 * Get extension state (main cupidbot/OFM state).
 *
 * @returns {Promise<object|null>}
 */
export async function getState() {
  const state = await getStorageValue('cupidbotState', null);
  return state;
}

/**
 * Get platform-specific app state.
 *
 * @param {string} app - Platform name (e.g. 'instagram', 'snapchat')
 * @returns {Promise<object|null>}
 */
export async function getAppState(app) {
  const key = `accountState_${app}`;
  return getStorageValue(key, null);
}
