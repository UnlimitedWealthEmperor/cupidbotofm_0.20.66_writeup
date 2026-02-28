import { safeJSON, isServiceWorker, getStorageOrLocal, setStorageOrLocal } from './storage';
import { IS_DEV } from '../shared/branding';

export function sleep(ms) {
  if (ms <= 0) return;
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function randomFloat(max, min = 0) {
  return Math.random() * Math.abs(max - min) + Math.min(max, min);
}

export function randomInt(max, min = 0) {
  return Math.floor(randomFloat(max, min));
}

export function randomDelay(maxMs, minMs = 0) {
  if (maxMs <= 0 && minMs <= 0) return;
  return sleep(randomFloat(maxMs, minMs));
}

export function extractDigits(str) {
  if (!str) return null;
  const match = str.match(/\d+/g);
  return match ? parseInt(match.join(''), 10) : null;
}

const HTML_TAG_REGEX = /<.*?>/g;

export function stripHtml(input) {
  if (isServiceWorker() || !input) return input;
  if (typeof input !== 'string') return input;
  input = input.trim().replace(HTML_TAG_REGEX, '');
  return safeJSON.parse(
    safeJSON.stringify(new DOMParser().parseFromString(input, 'text/html').documentElement.textContent)
  );
}

let cachedManifestVersion = null;

export function getManifestVersion() {
  if (!cachedManifestVersion) {
    cachedManifestVersion = chrome.runtime.getManifest().version;
  }
  return cachedManifestVersion;
}

export function getScriptVersion() {
  return globalThis._bgData?.version || globalThis._scriptData?.version;
}

export function isTruthy(value) {
  if (!value || value == null) return false;
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') return value.trim().length > 0;
  if (Array.isArray(value)) return value.length !== 0 && value.every(isTruthy);
  if (typeof value === 'object') return Object.keys(value).length > 0;
  if (typeof value === 'number') return value !== 0;
  return !!value;
}

export function buildQueryString(params) {
  if (!params || Object.keys(params).length === 0) return '';
  params = Object.fromEntries(Object.entries(params).filter(([, v]) => v != null));
  return '?' + new URLSearchParams(params).toString();
}

export function flattenForSentry(obj, maxLength = null) {
  if (typeof obj !== 'object') return obj;
  const result = {};
  for (const key in obj) {
    const val = obj[key];
    result[key] = typeof val === 'object' || Array.isArray(val) ? safeJSON.stringify(val) : val;
    if (maxLength && typeof result[key] === 'string' && result[key].length > maxLength) {
      result[key] = result[key].slice(0, maxLength) + '...';
    }
  }
  return result;
}

export function isEmptyObject(obj) {
  return Object.keys(obj ?? {}).length === 0;
}

export function defineHiddenProp(obj, key, value) {
  Object.defineProperty(obj, key, { value, enumerable: false, writable: true, configurable: true });
  return obj;
}

const utcDateFormatter = new Intl.DateTimeFormat('sv-SE', {
  timeZone: 'UTC', year: 'numeric', month: '2-digit', day: '2-digit',
  hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
});

function formatTimestamp() {
  const now = Date.now();
  const ms = now % 1000;
  return utcDateFormatter.format(now) + '.' + String(ms).padStart(3, '0');
}

export function logInfo(message, extra) {
  const prefix = `[${formatTimestamp()}] [BG] ${message}`;
  extra !== undefined ? console.info(prefix, extra) : console.info(prefix);
}

export function logWarning(message, extra) {
  const prefix = `[${formatTimestamp()}] [BG] ${message}`;
  extra !== undefined ? console.warn(prefix, extra) : console.warn(prefix);
}

export function logError(message, extra) {
  const prefix = `[${formatTimestamp()}] [BG] ${message}`;
  extra !== undefined ? console.error(prefix, extra) : console.error(prefix);
}

export async function appLog(app, ...logArgs) {
  const caller = (() => {
    const lines = new Error().stack.split('\n');
    for (let i = 3; i < lines.length; i++) {
      const match = lines[i].match(/(?:\s+at\s+|@)(.*?)(?::\d+){1,2}$/);
      if (match?.[1]) return match[1].split('/').pop();
    }
    return 'unknown';
  })();

  const logStr = logArgs.map((e) => (typeof e === 'object' ? safeJSON.stringify(e) : e)).join(' ');
  const logLine = `[${new Date().toISOString()} - ${caller}] ${logStr}`;
  const logKey = app + 'Logs';
  const existing = (await getStorageOrLocal(logKey, '')) + logLine + '\n\n';
  const maxChars = IS_DEV ? 1024 * 1024 / 2 : 2 * 1024 * 1024 / 2;

  if (existing.length > maxChars) {
    await setStorageOrLocal(logKey, existing.slice(existing.length - maxChars));
  } else {
    await setStorageOrLocal(logKey, existing);
  }
}

export function appError(app, ...args) {
  console.error(`[${app}]`, ...args);
}
