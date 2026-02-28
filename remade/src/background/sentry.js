import {
  BrowserClient, Scope, getDefaultIntegrations, defaultStackParser,
  makeFetchTransport, makeOfflineTransport,
} from '@sentry/browser';
import { SENTRY_DSN } from '../shared/branding';
import { SENTRY_ENABLED_SCRIPTS } from '../shared/constants';
import {
  getScriptVersion, getManifestVersion, isEmptyObject, flattenForSentry,
  defineHiddenProp,
} from './utils';
import { safeJSON, getStorageValue, setStorageValue, isServiceWorker } from './storage';
import { normalizeProfile } from './profiles';

const LOG_LEVELS = { error: 'error', warning: 'warning', info: 'info', debug: 'debug' };
const SCRIPT_ORIGINS = { bg: 'bg', loop: 'loop', sdk: 'sdk', sdk_global: 'sdk_global', ui: 'ui' };
const SAMPLE_RATES = { always: 1, normal: 0.5, rare: 0.1 };
const SENTRY_DEBUG_EVENT_ID = '__sentryDebugEvent';

const SENTRY_IGNORED_FILTERS = [
  { origin: SCRIPT_ORIGINS.ui, level: LOG_LEVELS.error, originalMessage: 'Extension context invalidated.' },
  { origin: SCRIPT_ORIGINS.loop, level: LOG_LEVELS.error, originalMessage: 'Could not establish connection. Receiving end does not exist.' },
  { origin: SCRIPT_ORIGINS.loop, level: LOG_LEVELS.error, originalMessage: 'A listener indicated an asynchronous response by returning true, but the message channel closed before a response was received' },
  { origin: SCRIPT_ORIGINS.sdk, app: 'snapchat', level: LOG_LEVELS.error, originalMessage: 'DUPLICATEREQUEST' },
  { origin: SCRIPT_ORIGINS.sdk, app: 'snapchat', level: LOG_LEVELS.error, originalMessage: 'INTERNALERROR' },
  { origin: SCRIPT_ORIGINS.sdk, app: 'instagram', level: LOG_LEVELS.error, originalMessage: 'login_required' },
  { origin: SCRIPT_ORIGINS.sdk, app: 'instagram', level: LOG_LEVELS.error, originalMessage: 'checkpoint_required' },
  { level: LOG_LEVELS.error, originalMessage: 'FILE_ERROR_NO_SPACE (ChromeMethodBFE: 3::WritableFileAppend::8)' },
];

const sentryFingerprints = {
  get: async () => await getStorageValue('sentryFingerprints', {}),
  set: async (val) => await setStorageValue('sentryFingerprints', val),
  registerFingerprint: async (fp) => {
    const all = await sentryFingerprints.get();
    all[fp] = Date.now();
    await sentryFingerprints.set(all);
  },
  isFingerprintRecent: async (fp) => {
    const all = await sentryFingerprints.get();
    const ts = all[fp];
    if (!ts) return false;
    if (Date.now() - ts < 86400000) return true;
    delete all[fp];
    await sentryFingerprints.set(all);
    return false;
  },
  clear: async () => await sentryFingerprints.set({}),
};

function buildFingerprint({ app, origin, level, originalMessage, manifestVersion, scriptVersion, accountId }) {
  const arr = [app, origin, level, originalMessage, manifestVersion, scriptVersion, accountId];
  return {
    arr,
    obj: { app, origin, level, originalMessage, manifestVersion, scriptVersion, accountId },
    str: arr.join(':'),
  };
}

function matchesFilter(fingerprint, filter) {
  for (const key in filter) {
    if (key === 'originalMessage') {
      if (filter[key] && !fingerprint.originalMessage?.includes(filter[key])) return false;
    } else {
      if (filter[key] !== fingerprint[key]) return false;
    }
  }
  return true;
}

let sentryClient = null;

function getOrCreateClient() {
  if (sentryClient) return sentryClient;

  const integrations = getDefaultIntegrations().filter(
    (i) => !['BrowserApiErrors', 'Breadcrumbs', 'GlobalHandlers'].includes(i.name)
  );

  sentryClient = new BrowserClient({
    dsn: SENTRY_DSN,
    transport: makeOfflineTransport(makeFetchTransport),
    transportOptions: { shouldStore: (_, __, retryCount) => !(retryCount > 0) },
    stackParser: defaultStackParser,
    integrations,
    release: getScriptVersion(),
    beforeSend: (event) => event,
  });

  sentryClient.init();
  return sentryClient;
}

async function createScope() {
  const scope = new Scope();
  const user = await (await import('./storage')).getCurrentUser();
  scope.setClient(getOrCreateClient());
  if (user) {
    scope.setUser({ email: user.email, telegram: user.telegram, telegramChatID: user.telegramChatID });
  }
  return scope;
}

function getCurrentApp() {
  return isServiceWorker() ? 'background' : null;
}

export async function captureToSentry(errorOrMessage, {
  origin, level = LOG_LEVELS.error, tags = {}, extra = {},
  transactionName, frequency = 'normal', networkRelated = false,
  forceApp, skipFingerprint = false,
}) {
  const sampleRate = SAMPLE_RATES[frequency];
  if (sampleRate !== 1 && Math.random() > sampleRate) return false;

  const app = forceApp ?? getCurrentApp();
  if (!app || !SENTRY_ENABLED_SCRIPTS.includes(app)) return false;

  const profile = await normalizeProfile(app);
  const manifestVer = getManifestVersion();
  const scriptVer = getScriptVersion();
  const accountId = profile?.accountID;

  let message = typeof errorOrMessage === 'string' ? errorOrMessage : errorOrMessage.message;
  message = message?.replace(/https:\/\/[^\s]+/g, '').trim();

  const fp = buildFingerprint({ app, origin, level, originalMessage: message, manifestVersion: manifestVer, scriptVersion: scriptVer, accountId });
  const fpShort = buildFingerprint({ app, origin, level, originalMessage: message });

  for (const filter of SENTRY_IGNORED_FILTERS) {
    if (matchesFilter(fp.obj, filter)) return false;
  }

  if (!skipFingerprint) {
    if (await sentryFingerprints.isFingerprintRecent(fpShort.str)) return false;
    await sentryFingerprints.registerFingerprint(fpShort.str);
  }

  tags.app = app;
  tags.accountId = accountId;
  tags.origin = origin;
  tags.manifestVersion = manifestVer;
  if (!isServiceWorker()) tags.url = window?.location?.href;

  const scope = await createScope();
  scope.setTags(tags);
  scope.setTransactionName('\u200E');

  if (!isEmptyObject(extra)) {
    for (const [k, v] of Object.entries(extra)) extra[k] = flattenForSentry(v, 300);
    scope.setContext('Extra', extra);
  }

  scope.setContext('Account', profile);
  scope.setFingerprint(fp.arr);

  if (level === 'error') {
    const err = typeof errorOrMessage === 'string' ? new Error(errorOrMessage) : errorOrMessage;
    const prefix = networkRelated ? '\uD83C\uDF10 ' : '';
    const appName = app.charAt(0).toUpperCase() + app.slice(1);
    defineHiddenProp(err, 'name', `${prefix}${appName}: ${transactionName || message}`);
    defineHiddenProp(err, 'message', `[${origin.toUpperCase()}] ${transactionName ? message : ''}`);
    scope.captureException(err);
  } else {
    scope.captureMessage(String(errorOrMessage), level);
  }

  return true;
}

export { LOG_LEVELS, SCRIPT_ORIGINS };
