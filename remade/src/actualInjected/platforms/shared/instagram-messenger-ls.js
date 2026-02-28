/**
 * Shared Metro module system and LS Database layer for Instagram & Messenger.
 * Both platforms use the same codebase on different domains (instagram.com, messenger.com, facebook.com).
 */
import { deepSearch } from '../../utils/objects';
import { safeTry } from '../../utils/misc';
import { waitUntil } from '../../utils/async';

let _metroRequire = null;
let _moduleFactories = null;
let _lsDb = null;
let _lsInt64Helper = null;
let _lsFactory = null;
let _lsServerTimeFn = null;

function discoverMetroRequire() {
  if (_metroRequire) return _metroRequire;
  const candidates = [
    () => globalThis.require,
    () => globalThis.__r,
    () => globalThis.__r?.(),
    () => {
      const bootloader = globalThis.BootloaderEndpoint ?? globalThis.__bootloader;
      return bootloader?.getRequire?.() ?? bootloader?.require;
    },
  ];
  for (const getReq of candidates) {
    const req = safeTry(getReq);
    if (typeof req === 'function') {
      _metroRequire = req;
      return req;
    }
  }
  const search = deepSearch(globalThis, 'require', {
    type: 'function',
    cacheKey: 'metro-require',
  });
  const found = search.find((r) => {
    try {
      return typeof r.value === 'function' && r.value.toString().includes('module');
    } catch {
      return false;
    }
  });
  if (found) {
    _metroRequire = found.value;
    return _metroRequire;
  }
  return null;
}

function discoverLsDb() {
  if (_lsDb) return _lsDb;
  const search = deepSearch(globalThis, 'Lightning', { cacheKey: 'ls-lightning' });
  const storeSearch = deepSearch(globalThis, 'getThread', { cacheKey: 'ls-getThread' });
  const dbLike = search.find((r) => r.value?.getThreads)?.value
    ?? storeSearch.find((r) => typeof r.value === 'object')?.value;
  if (dbLike) {
    _lsDb = dbLike;
    return dbLike;
  }
  const require = discoverMetroRequire();
  if (!require) return null;
  const moduleNames = ['LSDatabase', 'LSDB', 'LightningDB', 'LightningService'];
  for (const name of moduleNames) {
    try {
      const mod = require(name);
      if (mod?.getThreads || mod?.getThread) {
        _lsDb = mod;
        return mod;
      }
    } catch {}
  }
  return null;
}

/** Get Metro module by name/id */
export function module(name) {
  const req = discoverMetroRequire();
  if (!req) return null;
  try {
    return req(name);
  } catch {
    return null;
  }
}

/** Get Metro module factory (uninitialized) */
export function moduleFactory(name) {
  if (!_moduleFactories) {
    const m = module('__d') ?? module('metroRequire');
    _moduleFactories = m?.c ?? m;
  }
  return _moduleFactories?.[name] ?? null;
}

/** Load module, waiting if needed */
export async function loadModule(name) {
  const mod = module(name);
  if (mod) return mod;
  return waitUntil(() => module(name) != null, 200, 5000).then(() => module(name));
}

/** Load module without waiting */
export function loadModuleSimple(name) {
  return module(name);
}

/** Server time in ms (LS sync) */
export function serverTimeMs() {
  const st = _lsServerTimeFn ?? (() => {
    const db = discoverLsDb();
    const fn = db?.getServerTime ?? db?.serverTimeMs ?? db?.serverTime;
    if (typeof fn === 'function') _lsServerTimeFn = fn;
    return fn;
  })();
  return typeof st === 'function' ? st() : Date.now();
}

/** Search Metro modules by terms */
export function search(terms) {
  const req = discoverMetroRequire();
  if (!req?.modules) return [];
  const termsArr = Array.isArray(terms) ? terms : [terms];
  return Object.keys(req.modules ?? {}).filter((id) =>
    termsArr.every((t) => String(id).includes(String(t)))
  );
}

/** LS Database - threads table */
export function dbGetThreads(folder) {
  const db = discoverLsDb();
  if (!db) return [];
  const all = db.getThreads?.() ?? db.threads ?? [];
  if (!folder) return Array.isArray(all) ? all : Object.values(all ?? {});
  return (Array.isArray(all) ? all : Object.values(all ?? {})).filter(
    (t) => t.folder === folder || t.thread_folder === folder
  );
}

/** LS Database - single thread */
export function dbGetThread(threadId) {
  const db = discoverLsDb();
  if (!db) return null;
  return db.getThread?.(threadId) ?? db.threads?.[threadId] ?? null;
}

/** LS Database - thread participants */
export function dbGetThreadParticipants(threadId) {
  const db = discoverLsDb();
  if (!db) return [];
  const participants = db.getThreadParticipants?.(threadId)
    ?? db.thread_participants?.[threadId]
    ?? db.getThread?.(threadId)?.participants;
  return Array.isArray(participants) ? participants : Object.values(participants ?? {});
}

/** LS Database - contacts */
export function dbGetContacts() {
  const db = discoverLsDb();
  if (!db) return [];
  const contacts = db.getContacts?.() ?? db.contacts ?? {};
  return Array.isArray(contacts) ? contacts : Object.values(contacts ?? {});
}

/** LS Database - contact by userId */
export function dbGetContact(userId) {
  const db = discoverLsDb();
  if (!db) return null;
  return db.getContact?.(userId) ?? db.contacts?.[userId] ?? null;
}

/** LS Int64 helper for LS stored procedures */
export function lsInt64() {
  if (_lsInt64Helper) return _lsInt64Helper;
  const mod = module('Int64') ?? module('LSInt64') ?? module('BigInt');
  _lsInt64Helper = mod ?? BigInt;
  return _lsInt64Helper;
}

/** LS factory for creating procedure params */
export function factory() {
  if (_lsFactory) return _lsFactory;
  _lsFactory = module('LSFactory') ?? module('LightningFactory');
  return _lsFactory;
}

/** LS server time */
export function lsServerTime() {
  return serverTimeMs();
}

/** Platform detection */
export function getOpenPlatform() {
  const host = (globalThis.location?.hostname ?? '').toLowerCase();
  if (host.includes('instagram.com')) return 'instagram';
  if (host.includes('messenger.com') || host.includes('facebook.com')) return 'messenger';
  return null;
}

/** Get LS DB instance (for procedures / raw access) */
export function getLsDb() {
  return discoverLsDb();
}
