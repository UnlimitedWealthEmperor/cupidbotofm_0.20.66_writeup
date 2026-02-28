import { API_BASE_URL, IS_DEV, BRAND_ID, IS_AIR } from '../shared/branding';
import { PLATFORMS } from '../shared/constants';
import { safeJSON, isChromeStorage, getState, getCurrentUser, getStateValue } from './storage';
import { normalizeProfile } from './profiles';
import {
  buildQueryString, getManifestVersion, getScriptVersion, isTruthy,
  randomInt, sleep, appLog, appError, logError,
} from './utils';

const IS_OFM = true;
const DATING_APPS = [
  'tinder', 'bumble', 'hinge', 'badoo', 'okcupid', 'match',
  'hily', 'boo', 'coffeemeetsbagel', 'facebookdating', 'plentyoffish',
];

function isDatingApp(app) {
  return DATING_APPS.includes(app);
}

export async function buildAppContext(app) {
  const cupidbotState = await getState();
  const user = await getCurrentUser();
  await normalizeProfile(app);
  const accountState = await getStateValue(app);

  let obj = {
    manifestVersion: isChromeStorage() ? getManifestVersion() : '100.0.0',
    version: isChromeStorage() ? getScriptVersion() : '100.0.0',
    accessToken: null,
    accountID: null,
    isFemale: null,
    product: null,
    app,
    isOF: IS_OFM,
    brand: BRAND_ID,
    creator_id: null,
    acc_id: null,
    preset_id: null,
    presetName: null,
  };

  if (cupidbotState) {
    obj.accessToken = cupidbotState.accessToken;
    let product = null;
    const subMap = cupidbotState.subscriptionMap;

    if (isDatingApp(app)) {
      if (subMap?.['ofm-da']?.isAuthorized) product = 'ofm-da';
      else if (subMap?.['ofm-da-swiper']?.isAuthorized) product = 'ofm-da-swiper';
      else if (subMap?.['ofm-webcam']?.isAuthorized) product = 'ofm-webcam';
      else product = 'ofm-da';
    } else {
      const platformProductMap = {
        [PLATFORMS.snapchat]: 'ofm-snap', [PLATFORMS.reddit]: 'ofm-reddit',
        [PLATFORMS.instagram]: 'ofm-ig', [PLATFORMS.x]: 'ofm-x',
        [PLATFORMS.whatsapp]: 'ofm-wa', [PLATFORMS.telegram]: 'ofm-tg',
        [PLATFORMS.grindr]: 'ofm-grindr', [PLATFORMS.gvoice]: 'ofm-gvoice',
        [PLATFORMS.tiktok]: 'ofm-tiktok', [PLATFORMS.discord]: 'ofm-discord',
        [PLATFORMS.fetlife]: 'ofm-fetlife', [PLATFORMS.pornhub]: 'ofm-pornhub',
        [PLATFORMS.bluesky]: 'ofm-bluesky',
      };
      product = platformProductMap[app] || null;
    }

    if (accountState) {
      obj.accountID = accountState.accountID;
      obj.isFemale = accountState.isFemale;
      if (accountState.creator_id) obj.creator_id = accountState.creator_id;
      if (accountState.id) obj.acc_id = accountState.id;
      if (accountState.preset_id) obj.preset_id = accountState.preset_id;
      if (accountState.presetName) obj.presetName = accountState.presetName;
    }
    if (product) obj.product = product;
  }

  if (!isChromeStorage()) {
    const localState = await getState();
    obj.accessToken = localState.accessToken;
  }

  return obj;
}

const rateLimitStrikes = {};

function incrementRateLimitStrikes(endpoint, max = 10) {
  const add = randomInt(3, 1);
  rateLimitStrikes[endpoint] = Math.min((rateLimitStrikes[endpoint] || 0) + add, max);
}

function decrementRateLimitStrikes(endpoint) {
  rateLimitStrikes[endpoint] = Math.max((rateLimitStrikes[endpoint] || 0) - 1, 0);
}

async function applyRateLimit(key) {
  if (IS_DEV) return;
  const strikes = rateLimitStrikes[key] || 0;
  if (strikes) {
    const delay = randomInt(1500, 800) * strikes ** 2;
    console.log(`Rate limited for ${key}, waiting ${delay / 1000}s`);
    await sleep(delay);
  }
}

// PATCHED: Always validate - bypass backend check
export function validateApiUrl(url) {
  return true;
}

// PATCHED: Mock subscription data for offline use
const MOCK_SUBSCRIPTION_MAP = {
  'ofm-da': { isAuthorized: true, accountLimit: 999, status: 'active' },
  'ofm-da-swiper': { isAuthorized: true, accountLimit: 999, status: 'active' },
  'ofm-webcam': { isAuthorized: true, accountLimit: 999, status: 'active' },
  'ofm-snap': { isAuthorized: true, accountLimit: 999, status: 'active' },
  'ofm-ig': { isAuthorized: true, accountLimit: 999, status: 'active' },
  'ofm-reddit': { isAuthorized: true, accountLimit: 999, status: 'active' },
  'ofm-x': { isAuthorized: true, accountLimit: 999, status: 'active' },
  'ofm-wa': { isAuthorized: true, accountLimit: 999, status: 'active' },
  'ofm-tg': { isAuthorized: true, accountLimit: 999, status: 'active' },
  'ofm-grindr': { isAuthorized: true, accountLimit: 999, status: 'active' },
  'ofm-gvoice': { isAuthorized: true, accountLimit: 999, status: 'active' },
  'ofm-tiktok': { isAuthorized: true, accountLimit: 999, status: 'active' },
  'ofm-discord': { isAuthorized: true, accountLimit: 999, status: 'active' },
  'ofm-fetlife': { isAuthorized: true, accountLimit: 999, status: 'active' },
  'ofm-pornhub': { isAuthorized: true, accountLimit: 999, status: 'active' },
  'ofm-bluesky': { isAuthorized: true, accountLimit: 999, status: 'active' },
};

export async function apiFetch(endpoint, method, app, extraParams = {}, timeout = 60000, baseUrl = null, useContentFetch = false) {
  // PATCHED: Return mock data for subscription endpoints
  if (endpoint === 'getMe' || endpoint === 'syncState' || endpoint === 'getLatestScriptVersions') {
    console.log('[PATCHED] Intercepting', endpoint, '- returning mock subscription data');
    return {
      subscriptionMap: MOCK_SUBSCRIPTION_MAP,
      user: { id: 'local-user', email: 'offline@localhost' },
      accessToken: 'mock-offline-token',
    };
  }

  const base = baseUrl ?? API_BASE_URL;
  timeout = IS_DEV ? 99999 : timeout;
  const strikeKey = 'customFetch-' + endpoint;

  await applyRateLimit(strikeKey);

  let fetchUrl = `${base}/api/${endpoint}`;
  let body = {};
  const context = { ...(await buildAppContext(app)), ...extraParams };

  if (method === 'GET') {
    fetchUrl += buildQueryString(context);
  } else {
    body = { body: safeJSON.stringify(context) };
  }

  appLog(app, 'fetching ' + endpoint, fetchUrl, method, context);

  return new Promise(async (resolve, reject) => {
    const fetchOptions = {
      method,
      headers: { 'Content-Type': 'application/json' },
      ...body,
    };

    let fetchPromise;
    if (useContentFetch) {
      fetchPromise = chrome.runtime.sendMessage({ action: 'fetch', url: fetchUrl, options: fetchOptions });
    } else {
      fetchPromise = fetch(fetchUrl, fetchOptions);
    }

    try {
      const timer = setTimeout(() => {
        incrementRateLimitStrikes(strikeKey, 10);
        appError(app, endpoint + ' NETWORK TIMEOUT', timeout);
        reject(new Error('Network request timed out'));
      }, timeout);

      const response = await fetchPromise;
      clearTimeout(timer);

      const json = useContentFetch ? response.json : await response.json();
      appLog(app, 'RESPONSE ' + endpoint, response.status, json);

      if (response.status === 429) { incrementRateLimitStrikes(strikeKey, 10); throw new Error('Rate limited'); }
      if (response.status === 500) { incrementRateLimitStrikes(strikeKey, 10); throw new Error('Server error'); }
      if (response.status === 400) { incrementRateLimitStrikes(strikeKey, 50); throw new Error('Bad request'); }
      if (response.status !== 200 || !response.ok) {
        incrementRateLimitStrikes(strikeKey, 10);
        throw new Error('Invalid status: ' + response.status);
      }

      decrementRateLimitStrikes(strikeKey);
      resolve(validateApiUrl(API_BASE_URL) ? json : null);
    } catch (err) {
      incrementRateLimitStrikes(strikeKey, 10);
      appError(app, endpoint + ' NETWORK ERROR', err);
      reject(err);
    }
  });
}
