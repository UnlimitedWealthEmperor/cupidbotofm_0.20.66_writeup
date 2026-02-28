/**
 * Messenger platform SDK
 * Uses Metro module system, E2EE support, shared Instagram LS database layer.
 * Shares codebase with Instagram on messenger.com / facebook.com.
 */
import { createAssertionGroup } from '../../utils/errors';
import { isOneOfType } from '../../utils/types';
import { cleanFalsy } from '../../utils/objects';
import { sleep } from '../../utils/async';

import * as ls from '../shared/instagram-messenger-ls';

// --- Constants (same as Instagram) ---

export const DISPLAYED_CONTENT_TYPES = Object.freeze({
  TEXT: 1,
  PHOTO: 2,
  VIDEO: 3,
  AUDIO: 4,
  STICKER: 5,
  GIF: 6,
  REACTION: 7,
  EPHEMERAL: 8,
});

export const ATTACHMENT_TYPE = Object.freeze({
  NONE: 0,
  PHOTO: 1,
  VIDEO: 2,
  AUDIO: 3,
  FILE: 4,
});

export const EPHEMERAL_STATE = Object.freeze({
  NONE: 0,
  SENT: 1,
  DELIVERED: 2,
  READ: 3,
  RELEASE: 4,
});

export const REACHABILITY_STATUS = Object.freeze({
  UNKNOWN: 0,
  REACHABLE: 1,
  UNREACHABLE: 2,
});

// --- Metro / LS passthrough (shared with Instagram) ---

export function module(name) { return ls.module(name); }
export function moduleFactory(name) { return ls.moduleFactory(name); }
export function loadModule(name) { return ls.loadModule(name); }
export function loadModuleSimple(name) { return ls.loadModuleSimple(name); }
export function serverTimeMs() { return ls.serverTimeMs(); }
export function search(terms) { return ls.search(terms); }
export function lsInt64() { return ls.lsInt64(); }
export function factory() { return ls.factory(); }
export function lsServerTime() { return ls.lsServerTime(); }

export const db = {
  getThreads: ls.dbGetThreads,
  getThread: ls.dbGetThread,
  getThreadParticipants: ls.dbGetThreadParticipants,
  getContacts: ls.dbGetContacts,
  getContact: ls.dbGetContact,
};

export function getOpenPlatform() {
  const platform = ls.getOpenPlatform();
  return platform === 'messenger' ? 'messenger' : platform;
}

// --- LS DB accessors ---

function getDb() {
  return ls.getLsDb();
}

function callLsProc(procName, ...args) {
  const mod = ls.module(procName) ?? ls.module('LSProcedures');
  const proc = typeof mod === 'object' ? mod[procName] ?? mod?.default?.[procName] : mod;
  if (typeof proc !== 'function') {
    const db = getDb();
    const fn = db?.[procName] ?? db?.callProcedure;
    if (typeof fn === 'function') return fn.call(db, procName, ...args);
    throw new Error(`LS procedure not found: ${procName}`);
  }
  return proc(...args);
}

// --- E2EE (Messenger-specific) ---

export function isE2EEThread({ threadId }) {
  const { assert$ } = createAssertionGroup('messenger-e2ee');
  assert$(1, threadId != null, 'threadId required', { sentry: 'veryRare' }, true);
  try {
    const thread = ls.dbGetThread(threadId) ?? getThread({ threadId });
    return !!(thread?.is_e2ee ?? thread?.isE2ee ?? thread?.thread_metadata?.e2ee);
  } catch {
    return false;
  }
}

// --- Users (shared LS DB with Instagram) ---

export function getCurrentUser() {
  const { assert$ } = createAssertionGroup('messenger-user');
  const db = getDb();
  const me = db?.getViewer?.() ?? db?.getCurrentUser?.() ?? db?.viewer ?? db?.me;
  assert$(1, me, 'Not logged in', { sentry: 'veryRare' }, true);
  const id = me.id ?? me.user_id ?? me.fbid;
  assert$(2, id, 'No user id', { sentry: 'veryRare' }, true);
  return {
    id,
    user_id: id,
    username: me.username ?? me.name,
    name: me.name ?? me.username,
    profile_pic: me.profile_pic ?? me.profilePic,
  };
}

export function getCurrentUserIds() {
  const me = getCurrentUser();
  return [me.id ?? me.user_id];
}

export function getContacts() {
  return ls.dbGetContacts();
}

export function getContact({ userId }) {
  const { assert$ } = createAssertionGroup('messenger-contact');
  assert$(1, userId != null, 'userId required', { sentry: 'veryRare' }, true);
  return ls.dbGetContact(userId);
}

export function getFeatureLimits() {
  const db = getDb();
  return db?.getFeatureLimits?.() ?? db?.feature_limits ?? {};
}

export function _isContactUnreachable({ userId }) {
  const contact = getContact({ userId });
  const status = contact?.reachability_status ?? contact?.reachabilityStatus ?? REACHABILITY_STATUS.UNKNOWN;
  return status === REACHABILITY_STATUS.UNREACHABLE;
}

// --- Threads ---

export function getThreads({ folder } = {}) {
  if (folder) {
    return ls.dbGetThreads(folder);
  }
  return ls.dbGetThreads();
}

export function getThread({ threadId }) {
  const { assert$ } = createAssertionGroup('messenger-thread');
  assert$(1, threadId != null, 'threadId required', { sentry: 'veryRare' }, true);
  return ls.dbGetThread(threadId);
}

export function getThreadParticipants({ threadId }) {
  const { assert$ } = createAssertionGroup('messenger-participants');
  assert$(1, threadId != null, 'threadId required', { sentry: 'veryRare' }, true);
  return ls.dbGetThreadParticipants(threadId);
}

export function getRecipient({ threadId }) {
  const { assert$ } = createAssertionGroup('messenger-recipient');
  assert$(1, threadId != null, 'threadId required', { sentry: 'veryRare' }, true);
  const participants = getThreadParticipants({ threadId });
  const currentIds = getCurrentUserIds();
  const other = participants.find(
    (p) => !currentIds.includes(p.id ?? p.user_id ?? p.fbid)
  );
  assert$(2, other, 'Recipient not found', { sentry: 'veryRare' }, true);
  return other;
}

export async function markAsRead({ threadId }) {
  const { assert$ } = createAssertionGroup('messenger-mark-read');
  assert$(1, threadId != null, 'threadId required', { sentry: 'veryRare' }, true);
  return callLsProc('LSMarkThreadRead', threadId);
}

// --- Messages (same LS procedures as Instagram) ---

export async function sendTextMessage({ threadId, message, isFirstMsg = false }) {
  const { assert$ } = createAssertionGroup('messenger-send');
  assert$(1, threadId != null, 'threadId required', { sentry: 'veryRare' }, true);
  assert$(2, message != null && typeof message === 'string', 'message required', { sentry: 'veryRare' }, true);
  return callLsProc('LSSendTextMessage', threadId, message, isFirstMsg);
}

export async function sendMedia({ threadId, blob, blobExtension }) {
  const { assert$ } = createAssertionGroup('messenger-send-media');
  assert$(1, threadId != null, 'threadId required', { sentry: 'veryRare' }, true);
  assert$(2, blob instanceof Blob, 'blob required', { sentry: 'veryRare' }, true);
  return callLsProc('LSSendMedia', threadId, blob, blobExtension ?? '');
}

export function getMessages({ threadId }) {
  const { assert$ } = createAssertionGroup('messenger-get-msgs');
  assert$(1, threadId != null, 'threadId required', { sentry: 'veryRare' }, true);
  const db = getDb();
  const thread = getThread({ threadId });
  const messages = thread?.messages ?? db?.getMessages?.(threadId) ?? [];
  return Array.isArray(messages) ? messages : Object.values(messages ?? {});
}

export function getMessage({ offlineThreadingId }) {
  const { assert$ } = createAssertionGroup('messenger-get-msg');
  assert$(1, offlineThreadingId != null, 'offlineThreadingId required', { sentry: 'veryRare' }, true);
  const db = getDb();
  return db?.getMessage?.(offlineThreadingId) ?? null;
}

export async function paginateMessages({ threadId }) {
  const { assert$ } = createAssertionGroup('messenger-paginate');
  assert$(1, threadId != null, 'threadId required', { sentry: 'veryRare' }, true);
  return callLsProc('LSPaginateMessages', threadId);
}

export async function processMessages({ threadId }) {
  const { assert$ } = createAssertionGroup('messenger-process');
  assert$(1, threadId != null, 'threadId required', { sentry: 'veryRare' }, true);
  let messages = getMessages({ threadId });
  if (!messages.length) {
    await paginateMessages({ threadId });
    await sleep(300);
    messages = getMessages({ threadId });
  }
  return messages.map((m) => _processMessage(_processMessageIr(m)));
}

export function _processMessageIr(message) {
  if (message == null) return null;
  if (typeof message !== 'object') return { raw: message };
  const ir = {
    id: message.id ?? message.message_id ?? message.offline_threading_id,
    text: message.text ?? message.body ?? message.message,
    timestamp: message.timestamp ?? message.time ?? message.created_at,
    senderId: message.sender_id ?? message.senderId ?? message.from,
    attachmentType: message.attachment_type ?? message.attachmentType ?? ATTACHMENT_TYPE.NONE,
    ephemeralState: message.ephemeral_state ?? message.ephemeralState ?? EPHEMERAL_STATE.NONE,
  };
  return ir;
}

export function _processMessage(ir) {
  if (!ir) return null;
  const currentIds = getCurrentUserIds();
  const senderId = ir.senderId ?? ir.sender_id;
  const isIncoming = currentIds.every((id) => String(senderId) !== String(id));
  const processed = cleanFalsy({
    id: ir.id,
    msg: ir.text ?? '',
    timestamp: ir.timestamp,
    isIncoming,
    contentType: ir.attachmentType ?? ATTACHMENT_TYPE.NONE,
    ephemeralState: ir.ephemeralState ?? EPHEMERAL_STATE.NONE,
  }, { deep: false, allowZero: true });
  return annotateMessage(processed);
}

function annotateMessage(msg) {
  if (!msg) return msg;
  msg.ogMsg = msg.msg;
  let text = msg.msg || '';
  const whose = msg.isIncoming ? 'your' : 'his';

  if (!text) {
    if (msg.contentType === ATTACHMENT_TYPE.PHOTO) text = '[photo]';
    else if (msg.contentType === ATTACHMENT_TYPE.VIDEO) text = '[video]';
    else if (msg.contentType === ATTACHMENT_TYPE.AUDIO) text = '[audio]';
    else if (msg.contentType === ATTACHMENT_TYPE.FILE) text = '[file]';
    else text = `[${msg.contentType || 'unknown'}]`;
  }
  msg.msg = text.trim();
  return msg;
}

// --- Presence / Typing ---

export async function startTyping({ threadId }) {
  const { assert$ } = createAssertionGroup('messenger-typing');
  assert$(1, threadId != null, 'threadId required', { sentry: 'veryRare' }, true);
  return callLsProc('LSMarkTyping', threadId, true);
}

export async function stopTyping({ threadId }) {
  const { assert$ } = createAssertionGroup('messenger-stop-typing');
  assert$(1, threadId != null, 'threadId required', { sentry: 'veryRare' }, true);
  return callLsProc('LSMarkTyping', threadId, false);
}

export function isRecipientTyping({ threadId }) {
  const { assert$ } = createAssertionGroup('messenger-recipient-typing');
  assert$(1, threadId != null, 'threadId required', { sentry: 'veryRare' }, true);
  const db = getDb();
  const indicators = db?.typing_indicators ?? db?.typingIndicators ?? {};
  return !!(indicators[threadId] ?? Object.values(indicators).some((t) => t?.threadId === threadId));
}

// --- Message Requests ---

const PENDING_FOLDER = 'pending';
const SPAM_FOLDER = 'spam';

export function getMessageRequests() {
  const pending = getThreads({ folder: PENDING_FOLDER });
  const spam = getThreads({ folder: SPAM_FOLDER });
  return [...pending, ...spam];
}

export async function acceptMessageRequest({ threadId }) {
  const { assert$ } = createAssertionGroup('messenger-accept-req');
  assert$(1, threadId != null, 'threadId required', { sentry: 'veryRare' }, true);
  return callLsProc('LSAcceptMessageRequest', threadId);
}

export async function ignoreMessageRequest({ threadId }) {
  const { assert$ } = createAssertionGroup('messenger-ignore-req');
  assert$(1, threadId != null, 'threadId required', { sentry: 'veryRare' }, true);
  return callLsProc('LSIgnoreMessageRequest', threadId);
}

export async function deleteThread({ threadId }) {
  const { assert$ } = createAssertionGroup('messenger-delete');
  assert$(1, threadId != null, 'threadId required', { sentry: 'veryRare' }, true);
  return callLsProc('LSDeleteThread', threadId);
}

// --- hasLoaded ---

export async function hasLoaded() {
  try {
    const db = getDb();
    if (!db) return false;
    const threads = getThreads({});
    return Array.isArray(threads) ? threads.length >= 0 : true;
  } catch {
    return false;
  }
}

// --- Export default (flat) ---

export default {
  DISPLAYED_CONTENT_TYPES,
  ATTACHMENT_TYPE,
  EPHEMERAL_STATE,
  REACHABILITY_STATUS,

  module,
  moduleFactory,
  loadModule,
  loadModuleSimple,
  serverTimeMs,
  search,
  lsInt64,
  factory,
  lsServerTime,
  db,
  getOpenPlatform,

  isE2EEThread,
  getCurrentUser,
  getCurrentUserIds,
  getContacts,
  getContact,
  getFeatureLimits,
  _isContactUnreachable,

  getThreads,
  getThread,
  getThreadParticipants,
  getRecipient,
  markAsRead,

  sendTextMessage,
  sendMedia,
  getMessages,
  getMessage,
  paginateMessages,
  processMessages,
  _processMessageIr,
  _processMessage,

  startTyping,
  stopTyping,
  isRecipientTyping,

  getMessageRequests,
  acceptMessageRequest,
  ignoreMessageRequest,
  deleteThread,

  hasLoaded,
};
