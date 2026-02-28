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
  isChromeStorageAvailable = typeof chrome !== 'undefined' && chrome.storage?.local !== undefined;
  return isChromeStorageAvailable;
}

export const safeJSON = {
  stringify: (value, replacer = null, space = null) =>
    JSON_REF.stringify(value, (key, val) => {
      if (key === '') return val;
      if (val === undefined) val = null;
      return val;
    }, space),
  parse: JSON_REF.parse,
};

function shouldCacheKey(key) {
  return !key.endsWith('Logs') && !NO_CACHE_KEYS.has(key);
}

export async function setStorageValue(key, value) {
  if (value === undefined) value = null;
  if (shouldCacheKey(key)) storageCache[key] = value;
  await chrome.storage.local.set({ [key]: value });
}

export async function getStorageValue(key, defaultVal = null) {
  if (shouldCacheKey(key) && storageCache[key] !== undefined) {
    return storageCache[key];
  }
  const result = await chrome.storage.local.get({ [key]: defaultVal });
  const val = result?.[key] ?? defaultVal;
  if (shouldCacheKey(key)) storageCache[key] = val;
  return val;
}

export async function getState() {
  return await getStorageValue('state', {});
}
