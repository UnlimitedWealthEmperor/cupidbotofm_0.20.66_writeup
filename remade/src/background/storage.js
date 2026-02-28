const JSON_REF = JSON;

const storageCache = {};
const NO_CACHE_KEYS = new Set([
  'networkLog', 'shouldLog', 'currentContentScript', 'pendingContentScript',
  'currentInjectedScript', 'pendingInjectedScript', 'currentPopupScript',
  'pendingPopupScript', 'dynamicInterceptions',
]);

let isChromeStorageAvailable = null;

export function isChromeStorage() {
  if (isChromeStorageAvailable !== null) return isChromeStorageAvailable;
  isChromeStorageAvailable =
    typeof chrome !== 'undefined' && chrome.storage?.local !== undefined;
  return isChromeStorageAvailable;
}

export function isServiceWorker() {
  return typeof document === 'undefined';
}

export const safeJSON = {
  stringify: (value, replacer = null, space = null) =>
    JSON_REF.stringify(
      value,
      (key, val) => {
        if (key === '') return val;
        if (typeof replacer === 'function') {
          val = replacer(key, val);
          if (val === undefined) val = null;
        } else if (Array.isArray(replacer)) {
          if (val === undefined) val = null;
          val = replacer.includes(key) ? val : undefined;
        } else if (val === undefined) {
          val = null;
        }
        return val;
      },
      space
    ),
  parse: JSON_REF.parse,
};

function trimStorageValue(value, maxLen = 1000) {
  if (Array.isArray(value)) {
    let trimmed = value;
    if (value.length > maxLen) {
      trimmed = value.slice(0, maxLen);
    }
    return trimmed.map((elem) => trimStorageValue(elem, maxLen));
  }
  if (value !== null && typeof value === 'object') {
    const result = {};
    for (const prop in value) {
      if (value.hasOwnProperty(prop)) {
        result[prop] = trimStorageValue(value[prop], maxLen);
      }
    }
    return result;
  }
  return value;
}

function shouldCacheKey(key) {
  return !isServiceWorker() && !key.endsWith('Logs') && !NO_CACHE_KEYS.has(key);
}

export async function setStorageValue(key, value, useSync = false) {
  if (value === undefined) value = null;
  if (useSync) {
    await chrome.storage.sync.set({ [key]: value });
  } else {
    if (shouldCacheKey(key)) storageCache[key] = value;
    await chrome.storage.local.set({ [key]: value });
  }
}

export async function getStorageValue(key, defaultVal = null, useSync = false) {
  if (useSync) {
    const result = await chrome.storage.sync.get({ [key]: defaultVal });
    return result?.[key] ?? defaultVal;
  }
  if (shouldCacheKey(key)) {
    if (storageCache[key] === undefined) {
      const result = await chrome.storage.local.get({ [key]: defaultVal });
      storageCache[key] = result?.[key];
      return storageCache[key];
    }
    return storageCache[key];
  }
  const result = await chrome.storage.local.get({ [key]: defaultVal });
  return result?.[key] ?? defaultVal;
}

export function setStorageOrLocal(key, value) {
  if (isChromeStorage()) return setStorageValue(key, value);
  const trimmed = trimStorageValue(value);
  localStorage.setItem(key, safeJSON.stringify(trimmed));
}

export function getStorageOrLocal(key, defaultVal = null) {
  if (isChromeStorage()) return getStorageValue(key, defaultVal);
  const stored = localStorage.getItem(key);
  return stored ? safeJSON.parse(stored) : defaultVal;
}

export async function getState() {
  return await getStorageOrLocal('state', {});
}

export async function getStateValue(key) {
  const state = await getState();
  return state ? state[key] : null;
}

export async function getCurrentUser() {
  return (await getState()).user;
}

export async function getCurrentBgScript() {
  return await getStorageValue('currentBackgroundScript');
}

export async function getPendingBgScript() {
  return await getStorageValue('pendingBackgroundScript');
}

export async function setPendingBgScript(data) {
  await setStorageValue('pendingBackgroundScript', data);
}

export async function setPendingContentScript(data) {
  await setStorageValue('pendingContentScript', data);
}

export async function setPendingPopupScript(data) {
  await setStorageValue('pendingPopupScript', data);
}

export async function setPendingInjectedScript(data) {
  await setStorageValue('pendingInjectedScript', data);
}
