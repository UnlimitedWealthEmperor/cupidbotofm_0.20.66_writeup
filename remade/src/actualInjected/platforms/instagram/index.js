/**
 * Instagram platform SDK
 * Uses Facebook Metro module system (window.require) and LS (Lightspeed) Database.
 * Based on actualInjectedScript_deobf.js lines 6530-7675.
 */

import { createAssertionGroup } from '../../utils/errors';
import { isOneOfType } from '../../utils/types';
import { cleanFalsy, deepSearch } from '../../utils/objects';
import { randomString } from '../../utils/misc';
import { sleep, waitUntil } from '../../utils/async';
import { createStore } from '../../utils/store';

// =============================================================================
// Helpers
// =============================================================================

async function compressImageBlob(blob, opts = { compress: true }) {
  const bitmap = await createImageBitmap(blob);
  let w = bitmap.width;
  let h = bitmap.height;
  if (opts.height) {
    h = opts.height;
    w = Math.round(h * (bitmap.width / bitmap.height));
  }
  if (opts.width) {
    w = opts.width;
    h = Math.round(w * (bitmap.height / bitmap.width));
  }
  const canvas = new OffscreenCanvas(w, h);
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(bitmap, 0, 0, w, h);
  return opts.compress
    ? canvas.convertToBlob({ type: 'image/jpeg', quality: 0.925 })
    : canvas.convertToBlob();
}

// =============================================================================
// Metro - Facebook Metro module system
// =============================================================================

function module(name) {
  const ag = createAssertionGroup('metro');
  ag.assert$(1, globalThis.window?.require, '', { sentry: 'rare' }, true);
  const req = globalThis.window.require(name);
  ag.assert$(2, req, '', { sentry: 'rare', extra: { moduleName: name } }, true);
  return req;
}

function moduleFactory(name) {
  return module('__debug').modulesMap[name];
}

async function loadModule(name, entryName = name, timeoutMs = 30000) {
  const ag = createAssertionGroup('metro-load');
  const factory = moduleFactory(name);
  if (factory?.factoryFinished) return module(name);

  const BootloaderEndpoint = module('BootloaderEndpoint');
  const load = BootloaderEndpoint?.load ?? BootloaderEndpoint?.BootloaderEndpoint?.load;
  ag.assert$(1, load != null, '', { sentry: 'rare' }, true);

  return new Promise((resolve, reject) => {
    let timeoutId;
    let intervalId;
    const cleanup = () => {
      globalThis.clearTimeout(timeoutId);
      globalThis.clearInterval(intervalId);
    };

    try {
      timeoutId = globalThis.setTimeout(() => {
        cleanup();
        reject(new Error('Failed to load metro module, timeout. Did entry module change?'));
      }, timeoutMs);

      intervalId = globalThis.setInterval(() => {
        if (moduleFactory(name)) {
          try {
            cleanup();
            resolve(module(name));
          } catch (e) {
            console.log(`Error loading module ${name}, about to retry`, e);
          }
        }
        if (moduleFactory(entryName)) load(entryName, true);
      }, 500);

      load(entryName, true);
    } catch (e) {
      cleanup();
      reject(e);
    }
  });
}

async function loadModuleSimple(name, entryName = name, timeoutMs = 30000) {
  const ag = createAssertionGroup('metro-load-simple');
  const factory = moduleFactory(name);
  if (factory?.factoryFinished) return module(name);

  const BootloaderEndpoint = module('BootloaderEndpoint');
  const load = BootloaderEndpoint?.load ?? BootloaderEndpoint?.BootloaderEndpoint?.load;
  ag.assert$(1, load != null, '', { sentry: 'rare' }, true);

  load(entryName, true);
  await waitUntil(
    () => {
      try {
        module(name);
        return true;
      } catch {
        return false;
      }
    },
    100,
    timeoutMs
  );
  return module(name);
}

function serverTimeMs() {
  return module('ServerTime').getMillis();
}

function search(terms) {
  const modules = module('__debug').getModules();
  return Object.keys(modules).filter((key) =>
    terms.every((term) => key.includes(term))
  );
}

// =============================================================================
// MetroExtended - LS Database, config, upload, lsInt64
// =============================================================================

function getOpenPlatform() {
  const ag = createAssertionGroup('open-platform');
  const env = module('CurrentEnvironment');
  const platform = env.instagramdotcom
    ? 'instagram'
    : env.messengerdotcom || env.facebookdotcom
      ? 'messenger'
      : null;
  ag.assert$(1, platform, '', { sentry: 'veryRare', extra: { environment: env } }, true);
  return platform;
}

function config() {
  const ag = createAssertionGroup('config');
  const platform = getOpenPlatform();
  const name = platform.charAt(0).toUpperCase() + platform.slice(1);
  const cfg = module(`LSPlatform${name}Config`).configEagerlyLoaded?.current?.value;
  ag.assert$(1, cfg, '', { sentry: 'rare' }, true);
  return cfg;
}

function lsInt64() {
  const ag = createAssertionGroup('lsInt64');
  const I64 = module('I64');
  const LSInt64Lite = module('LSInt64Lite');
  return {
    zero: I64.zero,
    min: I64.min_int,
    max: I64.max_int,
    isZero: (v) => LSInt64Lite.to_string(v) === '0',
    fromArray: (arr) => LSInt64Lite.cast(arr),
    fromFloat: (f) => LSInt64Lite.of_float(f),
    fromI32: (i) => LSInt64Lite.of_int32(i),
    fromStr: (s) => LSInt64Lite.from_string(s),
    coerce: (v) => {
      if (Array.isArray(v)) return LSInt64Lite.cast(v);
      if (typeof v === 'number') return LSInt64Lite.of_int32(v);
      if (typeof v === 'string') return LSInt64Lite.from_string(v);
      ag.assert$(1, false, '', { sentry: false, extra: { value: v } }, true);
    },
    coerceNonZero: function (v) {
      const result = this.coerce(v);
      ag.assert$(2, !this.isZero(result), '', { sentry: false, extra: { value: v } }, true);
      return result;
    },
    toI32: (v) => parseInt(LSInt64Lite.to_string(v), 10),
    toStr: (v) => LSInt64Lite.to_string(v),
    toFloat: (v) => LSInt64Lite.to_float(v),
    minus: (a, b) => LSInt64Lite.sub(a, b),
    equals: (a, b) => LSInt64Lite.eq(a, b),
    gt: (a, b) => LSInt64Lite.gt(a, b),
    ge: (a, b) => LSInt64Lite.ge(a, b),
    lt: (a, b) => LSInt64Lite.lt(a, b),
    le: (a, b) => LSInt64Lite.le(a, b),
  };
}

function lsServerTime() {
  return lsInt64().fromFloat(serverTimeMs());
}

function factory(transaction) {
  return module('LSFactory')(transaction);
}

const db = {
  get: () => module('LSDatabaseSingleton').getLSDatabaseSingletonPromiseOrValue(),

  table: async (name) => {
    const ag = createAssertionGroup('db-table');
    const tables = (await db.get()).tables;
    const t = tables?.[name];
    ag.assert$(1, t != null, '', { sentry: 'rare', extra: { name } }, true);
    return t;
  },

  tables: async () => (await db.get()).tables,

  tableIds: async () => module('LSMetadata').schema?.tableIds,

  entries: async (tableName) => {
    const ag = createAssertionGroup('db-entries');
    const iter = (await db.table(tableName)).entries();
    ag.assert$(1, iter, '', { sentry: 'rare', extra: { name: tableName } }, true);
    const result = [];
    let next = await iter.next();
    while (!next.done) {
      result.push(next.value);
      next = await iter.next();
    }
    return result;
  },

  _search: async (query) => {
    const tables = await db.tables();
    let results = [];
    for (const tableName in tables) {
      const entries = await db.entries(tableName);
      const matches = deepSearch(entries, query, { cacheKey: null });
      for (const m of matches) {
        m.tableName = tableName;
        m.tableEntries = entries;
      }
      results = results.concat(matches);
    }
    return results;
  },

  waitForCondition: async (tableName, condition, timeoutMs = 10000) => {
    const table = await db.table(tableName);
    return new Promise((resolve, reject) => {
      const unsub = table.subscribe(async (data) => {
        if (await condition(data)) {
          unsub();
          resolve(data);
        }
      });
      globalThis.setTimeout(() => {
        unsub();
        reject(new Error('Timeout waiting for db changes'));
      }, timeoutMs);
    });
  },

  waitForChanges: async (tableName, timeoutMs = 10000) =>
    db.waitForCondition(tableName, () => true, timeoutMs),

  transaction: (callback, ...args) =>
    db.get().then((d) =>
      d.runInTransaction((tx) => callback(factory(tx), tx), ...args)
    ),

  updateTable: async (tableName, data) =>
    db.transaction((_, tx) => tx.db.table(tableName).put(data)),
};

async function uploadMedia({ blob }) {
  const { startUpload } = module('MWPComposerMediaUploadUtil');
  const { createOfflineThreadingID } = module('OfflineThreadingId');
  const offlineId = createOfflineThreadingID();
  const file = new File([blob], `${offlineId}.jpg`, { type: 'image/jpeg' });
  return new Promise((resolve, reject) => {
    startUpload(
      () => {},
      () => {},
      (offlineIdResult, fbId) => resolve({ offlineId: offlineIdResult, fbId }),
      (err) => reject(err ?? new Error('Media upload failed')),
      undefined,
      [file],
      [offlineId],
      undefined,
      undefined,
      undefined,
      undefined,
      undefined
    );
  });
}

async function updateTable(tableName, data) {
  return db.transaction((_, tx) => tx.db.table(tableName).put(data));
}

// =============================================================================
// InstagramPlatform - PolarisDirectAPI, reducers
// =============================================================================

function directApi() {
  return module('PolarisDirectAPI');
}

function reducers() {
  const ag = createAssertionGroup('reducers');
  const registry = module('polarisReducerRegistry').reducerRegistry;
  ag.assert$(1, registry, '', { sentry: 'uncommon' }, true);
  const reducerObj = Object.values(registry).find((v) => typeof v === 'object');
  ag.assert$(2, reducerObj, '', { sentry: 'uncommon' }, true);
  return reducerObj;
}

// =============================================================================
// Calls management
// =============================================================================

let _callsOldRinging = null;

async function getZenonCallInviteModelTypes() {
  await waitUntil(() => !!moduleFactory('ZenonCallInviteModelTypes'));
  return module('ZenonCallInviteModelTypes');
}

async function callsState() {
  const { CallInviteModelType } = await getZenonCallInviteModelTypes();
  return CallInviteModelType.ringing === -1 ? 'disabled' : 'enabled';
}

async function disableCalls() {
  const { CallInviteModelType } = await getZenonCallInviteModelTypes();
  if (CallInviteModelType.ringing !== -1) {
    _callsOldRinging = CallInviteModelType.ringing;
    CallInviteModelType.ringing = -1;
  }
  return callsState();
}

async function enableCalls() {
  const { CallInviteModelType } = await getZenonCallInviteModelTypes();
  if (_callsOldRinging != null) {
    CallInviteModelType.ringing = _callsOldRinging;
    _callsOldRinging = null;
  }
  return callsState();
}

// =============================================================================
// LS Message / Attachment constants
// =============================================================================

const DISPLAYED_CONTENT_TYPES = Object.freeze({
  MEDIA: 0,
  TEXT: 1,
  PTT: 4,
  XMA: 8,
  POST: 1032,
  STICKER: 4096,
});

const ATTACHMENT_TYPE = Object.freeze({
  NONE: 0,
  STICKER: 1,
  IMAGE: 2,
  ANIMATED_IMAGE: 3,
  VIDEO: 4,
  AUDIO: 5,
  FILE: 6,
  XMA: 7,
  EPHEMERAL_IMAGE: 8,
  EPHEMERAL_VIDEO: 9,
  SELFIE_STICKER: 10,
  SOUND_BITE: 12,
  CATALOG_ITEM: 13,
  POWER_UP: 14,
  THIRD_PARTY_STICKER: 15,
});

const EPHEMERAL_STATE = Object.freeze({
  PERMANENT: 0,
  UNSEEN: 1,
  SEEN: 2,
  REPLAYED: 3,
  EXPIRED: 4,
});

const REACHABILITY_STATUS = Object.freeze({
  REACHABLE: 0,
  UNREACHABLE_USER_TYPE: 1,
  UNREACHABLE_ADULT_TYPE: 2,
  REACHABLE_INVITE_BANNER: 3,
  UNREACHABLE_INVITE_BLOCK: 4,
  UNREACHABLE_INTEROP_THIRD_PARTY_USER: 5,
  UNREACHABLE_INTEROP_USER_OPT_OUT: 6,
  UNREACHABLE_INTEROP_THIRD_PARTY_APP_NOT_SUPPORTED: 7,
  UNREACHABLE_INTEROP_USER_REMOVED_THIRD_PARTY_APP: 8,
  UNREACHABLE_NULL_INTEROP_USER: 9,
  UNREACHABLE_MR_LIMIT_BLOCK: 10,
  UNREACHABLE_RS_UPSELL_ELIGIBLE: 11,
});

// =============================================================================
// Users
// =============================================================================

function getCurrentUserIds() {
  const ag = createAssertionGroup('current-user-ids');
  const CurrentUser = module('CurrentUser');
  const id = CurrentUser.getPossiblyNonFacebookUserID();
  const eimu = CurrentUser.getEIMU();
  ag.assert$(1, id, '', { sentry: 'rare' }, true);
  ag.assert$(2, eimu, '', { sentry: 'rare' }, true);
  return {
    id: lsInt64().fromStr(id),
    eimu: lsInt64().fromStr(eimu),
  };
}

async function getCurrentUser() {
  const ids = getCurrentUserIds();
  return getContact({ userId: ids.id });
}

async function getContacts() {
  const entries = await db.entries('contacts');
  return entries?.map(([, row]) => {
    row.idStr = lsInt64().toStr(row.id);
    return row;
  });
}

async function getContact({ userId }) {
  const table = await db.table('contacts');
  return table.get(userId);
}

async function getFeatureLimits() {
  const entries = await db.entries('feature_limits');
  const now = lsServerTime();
  return entries?.filter(
    ([, row]) =>
      row?.expirationTimestampSeconds &&
      lsInt64().gt(row.expirationTimestampSeconds, now)
  ).reduce((acc, [key, row]) => {
    acc[lsInt64().toI32(key[0])] = lsInt64().toI32(row.expirationTimestampSeconds);
    return acc;
  }, {});
}

async function _isContactUnreachable({ userId }) {
  const ag = createAssertionGroup('contact-unreachable');
  ag.assert$(1, isOneOfType(userId, 'array'), '', { sentry: false }, true);
  const contact = await getContact({ userId });
  if (!contact) return false;
  return module('LSContactUtils').isContactUnreachable(contact);
}

// =============================================================================
// Messages
// =============================================================================

async function sendTextMessage({ threadId, message, isFirstMsg }) {
  const ag = createAssertionGroup('send-text');
  ag.assert$(1, Array.isArray(threadId), '', { sentry: false }, true);
  ag.assert$(2, typeof message === 'string', '', { sentry: false }, true);

  const LSOptimisticSendMessage = module('LSOptimisticSendMessageV2StoredProcedure');
  const LSThreadAttributionTypeUtil = module('LSThreadAttributionTypeUtil');
  const LSShape = module('LSShape');
  const LSMailboxType = module('LSMailboxType');
  const MessagingThreadType = module('MessagingThreadType');

  const currentUserIds = getCurrentUserIds();
  const senderId =
    lsInt64().toI32(currentUserIds.eimu) !== 0 ? currentUserIds.eimu : currentUserIds.id;
  const threadKey = lsInt64().fromArray(threadId);
  const mailboxType = lsInt64().fromI32(LSMailboxType.MESSENGER);
  const threadType = lsInt64().fromI32(MessagingThreadType.ONE_TO_ONE);

  const extra = {
    mark_read: true,
    source: LSThreadAttributionTypeUtil.getSourceWithoutReset(
      lsInt64().fromArray(threadId),
      'inboxInThread'
    ),
    ...(isFirstMsg ? { is_first_msg: true } : {}),
  };

  return db.transaction((tx) =>
    LSOptimisticSendMessage(tx, {
      threadKey,
      mailboxType,
      threadType,
      senderId,
      text: message,
      snippet: undefined,
      extraSendMessageParams: LSShape.ofRecord(extra),
    })
  );
}

async function sendMedia({ threadId, blob, blobExtension }) {
  const ag = createAssertionGroup('send-media');
  ag.assert$(1, Array.isArray(threadId), '', { sentry: false }, true);
  ag.assert$(2, blob instanceof Blob, '', { sentry: false }, true);
  ag.assert$(3, blobExtension, '', { sentry: false }, true);

  const MAWModule =
    getOpenPlatform() === 'instagram'
      ? await loadModule('MAWForwardMessageFromSecureThread.react', 'IGDMessageRowActions.react')
      : module('MAWForwardMessageFromSecureThread.react');

  const LSMessagingThreadAttributionType = module('LSMessagingThreadAttributionType');
  const OfflineThreadingId = module('OfflineThreadingId');
  const MessagingAttachmentType = module('MessagingAttachmentType');

  const database = await db.get();
  const eimu = getCurrentUserIds().eimu;
  const offlineId = OfflineThreadingId.createOfflineThreadingID();
  const mime = blob.type;
  const filename = `${offlineId}.${blobExtension}`;

  const attachmentType = mime.startsWith('audio')
    ? MessagingAttachmentType.AUDIO
    : mime.startsWith('video')
      ? MessagingAttachmentType.VIDEO
      : mime.startsWith('image')
        ? MessagingAttachmentType.IMAGE
        : null;
  ag.assert$(4, attachmentType, '', { sentry: false }, true);

  const processedBlob =
    attachmentType === MessagingAttachmentType.IMAGE
      ? await compressImageBlob(blob, { compress: true, width: 1080 })
      : blob;
  const file = new File([processedBlob], filename, { type: processedBlob.type });

  return db.transaction((_, tx) =>
    MAWModule.uploadAndSendMediaToOpenThread(
      database,
      {
        attachment_type: lsInt64().fromI32(attachmentType),
        attachment_fbid: offlineId,
        offline_attachment_id: offlineId,
        thread_key: threadId,
      },
      file,
      lsInt64().fromI32(1),
      threadId,
      undefined,
      eimu,
      tx,
      LSMessagingThreadAttributionType.MESSENGER_INBOX_IN_THREAD
    )
  );
}

async function getMessages({ threadId }) {
  const ag = createAssertionGroup('get-messages');
  ag.assert$(1, Array.isArray(threadId), '', { sentry: false }, true);

  const threadKey = lsInt64().fromArray(threadId);
  const entries = await db.entries('messages');
  return entries
    .filter(([, row]) => row && lsInt64().equals(row.threadKey, threadKey))
    .sort((a, b) => lsInt64().minus(a[1].timestampMs, b[1].timestampMs))
    .map(([key, row]) => ({
      ...row,
      timestamp: lsInt64().toI32(row.timestampMs) / 1000,
      key,
    }));
}

async function getMessage({ offlineThreadingId }) {
  const entries = await db.entries('messages');
  const found = entries.find(([, row]) => row?.offlineThreadingId === offlineThreadingId);
  return found?.[1];
}

async function paginateMessages({ threadId }) {
  const ag = createAssertionGroup('paginate-messages');
  const rangeEntries = await db.entries('messages_ranges_v2__generated');
  const threadKey = lsInt64().fromArray(threadId);
  const rangeRow = rangeEntries.find(
    ([, row]) => row && lsInt64().equals(row.threadKey, threadKey)
  );
  ag.throw$(1, !!rangeRow, '', { sentry: 'veryRare' }, true);

  const messages = await getMessages({ threadId });
  if (!rangeRow[1].hasMoreBefore) return messages;

  const LSIssueMessagesRangeQuery = module('LSIssueMessagesRangeQueryStoredProcedure');
  await db.transaction((tx) =>
    LSIssueMessagesRangeQuery(tx, {
      direction: lsInt64().fromI32(0),
      referenceTimestampMs: messages[0].timestampMs,
      threadKey: lsInt64().fromArray(threadId),
    })
  );

  return db
    .waitForChanges('messages', 30000)
    .then(() => getMessages({ threadId }))
    .catch(() => messages);
}

async function _processMessageIr({
  message,
  contacts,
  contactInfos,
  attachmentEntries,
  attachmentItems,
  attachmentCtas,
  currentUser,
}) {
  const contactsTable = contacts ?? (await db.table('contacts'));
  const contactInfosTable = contactInfos ?? (await db.table('ig_contact_info'));
  const attEntries = attachmentEntries ?? (await db.entries('attachments'));
  const attItems = attachmentItems ?? (await db.entries('attachment_items'));
  const attCtasTable = attachmentCtas ?? (await db.table('attachment_ctas'));
  const current = currentUser ?? (await getCurrentUser());

  const messageId = message.messageId;
  const attachment = attEntries.find(([, row]) => row?.messageId === messageId)?.[1] ?? null;
  const items = attachment
    ? attItems
        .filter(([, row]) => row?.messageId === messageId)
        .map(([, row]) => row)
    : null;
  const attachmentCta = attachment
    ? await attCtasTable.get(attachment.defaultCtaId)
    : null;

  const conversationUser = (await getRecipient({ threadId: message.threadKey })) ?? {};
  const messageAuthor = (await contactsTable.get(message.senderId)) ?? {};
  const contactInfo = (await contactInfosTable.get(message.senderId)) ?? {};

  return {
    id: messageId,
    messageAuthor: { ...messageAuthor, ...contactInfo },
    message,
    conversationUser,
    attachment,
    attachmentCta,
    attachmentItems: items,
    currentUser: current,
  };
}

function _processMessage({ ir, transformText }) {
  const msg = ir.message;
  const att = ir.attachment;
  const attCta = ir.attachmentCta;
  const attItems = ir.attachmentItems;
  const actionUrl = attCta?.actionUrl ? decodeURIComponent(attCta.actionUrl) : null;
  const nativeUrl = attCta?.nativeUrl ? decodeURIComponent(attCta.nativeUrl) : null;
  const convUser = ir.conversationUser;
  const currentUser = ir.currentUser;
  const msgAuthor = ir.messageAuthor;

  let text = msg.text;
  if (transformText) text = transformText(text);

  const timestamp = lsInt64().toI32(msg.timestampMs) / 1000;
  const hasText = !!text;
  const isIncoming = lsInt64().equals(msg.senderId, convUser.id);
  const isStoryMention = attCta?.type_ === 'xma_ig_mention_add_to_story';
  const isAdminMessage = !!msg.isAdminMessage;
  const displayedContentTypes = lsInt64().toI32(msg.displayedContentTypes);
  const attachmentType = att ? lsInt64().toI32(att.attachmentType) : null;
  const ephemeralState = att?.ephemeralMediaState
    ? lsInt64().toI32(att.ephemeralMediaState)
    : null;
  const defaultCtaType = att?.defaultCtaType;
  const isForwarded = !!msg.isForwarded;
  const isXma = att && attachmentType === ATTACHMENT_TYPE.XMA;
  const hasNoCtaType = !att?.defaultCtaType;
  const isAdReply = msg.adminMsgCtaType === 'admin_msg_web_url';

  let xmaTypename = null;
  let xmaTargetType = null;
  let xmaCallState = null;
  let xmaCallType = null;
  if (att?.xmaDataclass) {
    try {
      const parsed = JSON.parse(att.xmaDataclass);
      xmaTypename = parsed?.content?.custom_template_data?.__typename ?? null;
      xmaTargetType = parsed?.target_type ?? null;
      xmaCallState = parsed?.content?.custom_template_data?.call_state ?? null;
      xmaCallType = parsed?.content?.custom_template_data?.call_type ?? null;
    } catch {}
  }

  const url = nativeUrl || actionUrl || att?.actionUrl || '';
  const isProfileLink =
    /instagram\.com\/[a-zA-Z0-9._]+(?:\?|$)/.test(url) &&
    !/instagram\.com\/(reel|p|stories|tv|reels_share)\//.test(url);
  const isFbShare = !/facebook\.com\/share\//.test(url) || !!xmaTargetType;
  const isProfileAttached = isProfileLink || isFbShare;
  const profileUsername =
    isProfileAttached &&
    (url.match(/instagram\.com\/([a-zA-Z0-9._]+)/)?.[1] ||
      att?.headerTitle ||
      att?.titleText);
  const isAudio = displayedContentTypes === DISPLAYED_CONTENT_TYPES.PTT || attachmentType === ATTACHMENT_TYPE.AUDIO;
  const isPhoto =
    attachmentType === ATTACHMENT_TYPE.IMAGE || attachmentType === ATTACHMENT_TYPE.EPHEMERAL_IMAGE;
  const isVideo =
    attachmentType === ATTACHMENT_TYPE.VIDEO || attachmentType === ATTACHMENT_TYPE.EPHEMERAL_VIDEO;
  const isEphemeral =
    attachmentType === ATTACHMENT_TYPE.EPHEMERAL_IMAGE ||
    attachmentType === ATTACHMENT_TYPE.EPHEMERAL_VIDEO;
  const isUnopenedEphemeral = ephemeralState === EPHEMERAL_STATE.UNSEEN;
  const isGif =
    attachmentType === ATTACHMENT_TYPE.ANIMATED_IMAGE || !!att?.shouldAutoplayVideo;
  const isSticker =
    attachmentType === ATTACHMENT_TYPE.STICKER ||
    displayedContentTypes === DISPLAYED_CONTENT_TYPES.STICKER ||
    (isXma &&
      (hasNoCtaType || att?.defaultCtaType === 'xma_open_native') &&
      (att?.previewUrlMimeType === 'image/png' || att?.playableUrlMimeType === 'image/gif'));
  const isAvatar =
    isSticker &&
    !(
      !att?.accessibilitySummaryText?.toLowerCase().includes('avatar') &&
      !att?.titleText?.toLowerCase().includes('avatar')
    );
  const isFile = attachmentType === ATTACHMENT_TYPE.FILE;
  const isStoryAttached =
    !!actionUrl?.includes('stories/') || attCta?.type_ === 'xma_montage_share';
  const isAttachmentOurs =
    !!(
      !isIncoming &&
      (isPhoto || isVideo || isAudio) &&
      !isForwarded
    ) ||
    (currentUser?.username && att?.headerTitle === currentUser.username) ||
    (msg.replySnippet && currentUser?.username && msg.replySnippet.includes(currentUser.username)) ||
    (msg.replySnippet &&
      currentUser?.full_name &&
      msg.replySnippet.includes(currentUser.full_name));
  const isAttachmentTheirs =
    !!(
      isIncoming &&
      (isPhoto || isVideo || isAudio) &&
      !isForwarded
    ) ||
    (msgAuthor?.secondaryName && att?.headerTitle === msgAuthor.secondaryName) ||
    (msg.replySnippet &&
      convUser.secondaryName &&
      msg.replySnippet.includes(convUser.secondaryName)) ||
    (msg.replySnippet && convUser.name && msg.replySnippet.includes(convUser.name));
  const isReply = isStoryAttached
    ? !!msg.replySourceTypeV2 && (isIncoming ? isAttachmentOurs : isAttachmentTheirs)
    : !!msg.replySourceId;
  const isReels =
    !!nativeUrl?.includes('reels_share') ||
    !!actionUrl?.includes('instagram.com/tv') ||
    !!actionUrl?.includes('instagram.com/reel/') ||
    !!actionUrl?.includes('facebook.com/share/v/') ||
    !!actionUrl?.includes('facebook.com/share/r/');
  const isShopping = !!actionUrl?.includes('commerce/products');
  const isPost =
    (isXma && !isReels && defaultCtaType === 'igd_web_post_share') ||
    !!actionUrl?.includes('instagram.com/p/') ||
    !!actionUrl?.includes('facebook.com/share/p/') ||
    xmaTargetType === 'FB_FEED_SHARE';
  const isMissedCall =
    defaultCtaType?.toLowerCase().includes('missed') ||
    (xmaTypename === 'XMSGXmaCallingTemplateData' && xmaCallState === 'MISSED');
  const isMissedVideoCall = isMissedCall && (xmaCallType === 'VIDEO' || defaultCtaType?.includes('video'));
  const isMissedAudioCall = isMissedCall && (xmaCallType === 'AUDIO' || defaultCtaType?.includes('audio'));
  const urlCombined = actionUrl || nativeUrl || att?.actionUrl || '';
  const isLocation =
    xmaTypename === 'XMSGXmaLocationTemplateData' ||
    urlCombined.includes('maps.app.goo.gl') ||
    urlCombined.includes('maps.google.com') ||
    urlCombined.includes('maps.apple') ||
    urlCombined.startsWith('messenger://location_share');
  const isMusic = !!attCta?.actionUrl?.includes('facebook.com/audio');
  const isBitmoji = !(!isStoryAttached || !isAttachmentOurs || hasText);
  const hasAttachmentContent =
    att &&
    (att.headerTitle ||
      att.offlineAttachmentId ||
      att.defaultCtaType ||
      att.playableUrl ||
      att.previewUrl ||
      att.sourceText ||
      att.targetId ||
      att.verifiedType ||
      att.imageUrl ||
      att.actionUrl ||
      att.accessibilitySummaryText ||
      att.titleText);
  const isInvalid = !(
    hasText ||
    hasAttachmentContent ||
    isSticker ||
    isGif ||
    isAvatar ||
    isPhoto ||
    isVideo ||
    isAudio ||
    isFile ||
    isMissedCall ||
    isLocation ||
    isReels ||
    isProfileAttached ||
    isPost
  );
  const attachmentAuthorUsername = isAttachmentOurs
    ? currentUser?.username
    : isAttachmentTheirs
      ? convUser.secondaryName
      : isProfileAttached && profileUsername
        ? profileUsername
        : att?.headerTitle ?? null;

  return {
    msg: text,
    id: msg.messageId,
    timestamp,
    isIncoming,
    isReply,
    isForwarded,
    isStoryMention,
    isMusicAttached: isMusic,
    isStoryAttached,
    isPostAttached: isPost,
    isReelsAttached: isReels,
    isAdminMessage,
    isProfileAttached,
    isPhotoAttached: isPhoto,
    isVideoAttached: isVideo,
    isAudioAttached: isAudio,
    isEphemeral,
    isUnopenedEphemeral,
    isAdReply,
    isMissedCall,
    isMissedVideoCall,
    isMissedAudioCall,
    isLocationShare: isLocation,
    isShoppingItemAttached: isShopping,
    isFileAttached: isFile,
    isSticker,
    isGIF: isGif,
    isAvatar,
    isBitmoji,
    isInvalid,
    attachmentAuthorUsername,
    isAttachmentOurs,
    isAttachmentTheirs,
  };
}

function _annotateMessage(processed) {
  processed.ogMsg = processed.msg;
  let out = processed.msg ?? '';
  if (processed.isGIF) out = '[GIF]';
  else if (processed.isAvatar) out = '[avatar-sticker]';
  else if (processed.isSticker) out = '[sticker]';
  else if (processed.isPhotoAttached) out = `[photo] ${out}`;
  else if (processed.isVideoAttached) out = `[video] ${out}`;
  else if (processed.isAudioAttached) out = `[audio-message] ${out}`;
  else if (processed.isFileAttached) out = `[file] ${out}`;
  else if (processed.isShoppingItemAttached) out = `[shopping-item] ${out}`;
  else if (processed.isProfileAttached)
    out = processed.attachmentAuthorUsername
      ? `[attached-profile-with-username-${processed.attachmentAuthorUsername}] ${out}`
      : `[attached-profile] ${out}`;
  else if (processed.isMissedVideoCall) out = '[missed-video-call]';
  else if (processed.isMissedAudioCall) out = '[missed-audio-call]';
  else if (processed.isMissedCall) out = '[missed-call]';
  else if (processed.isLocationShare) out = '[shared-location]';
  else if (processed.isAdminMessage) out = `[status-message] ${out}`;
  else if (processed.isMusicAttached) out = `[attached-song] ${out}`;
  else if (processed.isReelsAttached)
    out = processed.isAttachmentTheirs
      ? `[replied-to-his-video-reel] ${out}`
      : processed.isAttachmentOurs
        ? `[replied-to-your-video-reel] ${out}`
        : processed.attachmentAuthorUsername
          ? `[attached-video-reel-from-username-${processed.attachmentAuthorUsername}] ${out}`
          : `[attached-video-reel] ${out}`;
  else if (processed.isPostAttached)
    out = processed.isAttachmentTheirs
      ? `[replied-to-his-post] ${out}`
      : processed.isAttachmentOurs
        ? `[replied-to-your-post] ${out}`
        : processed.attachmentAuthorUsername
          ? `[attached-post-from-username-${processed.attachmentAuthorUsername}] ${out}`
          : `[attached-post] ${out}`;
  else if (processed.isStoryMention) out = `[mentioned-you-in-their-story] ${out}`;
  else if (processed.isStoryAttached)
    out = processed.isAttachmentTheirs
      ? `[replied-to-his-story] ${out || 'nice!'}`
      : processed.isAttachmentOurs
        ? `[replied-to-your-story] ${out || 'nice!'}`
        : processed.attachmentAuthorUsername
          ? `[attached-story-from-username-${processed.attachmentAuthorUsername}] ${out}`
          : `[attached-story] ${out}`;
  else if (processed.msg) out = processed.msg;
  else if (processed.isInvalid) out = '[message-no-longer-available]';
  out = out.trim();
  if (processed.isReply) out = `[replied] ${out}`;
  out = out.trim();
  processed.msg = out;
  return processed;
}

async function processMessages({ threadId, transformText }) {
  const ag = createAssertionGroup('process-messages');
  ag.assert$(1, Array.isArray(threadId), '', { sentry: false }, true);

  const messages = await getMessages({ threadId });
  const [attEntries, attItems, attCtas, contacts, contactInfos, currentUser] = await Promise.all([
    db.entries('attachments'),
    db.entries('attachment_items'),
    db.table('attachment_ctas'),
    db.table('contacts'),
    db.table('ig_contact_info'),
    getCurrentUser(),
  ]);

  return Promise.all(
    messages.map(async (m) => {
      const ir = await _processMessageIr({
        message: m,
        currentUser,
        contacts,
        contactInfos,
        attachmentCtas: attCtas,
        attachmentEntries: attEntries,
        attachmentItems: attItems,
      });
      const processed = await _processMessage({ ir, transformText });
      return _annotateMessage(cleanFalsy(processed, { deep: true }));
    })
  );
}

async function _processOpenMessages(opts = {}) {
  const threadId = getOpenThreadId();
  const results = await processMessages({
    threadId,
    transformText: opts.transformText,
  });
  return results.map((r) => Object.fromEntries(Object.entries(r).filter(([, v]) => !!v)));
}

// =============================================================================
// Threads / Conversations
// =============================================================================

const THREAD_FOLDERS = {
  inbox: [0, 0],
  pending: [-1, 0xffffffff],
  other: [-1, 0xfffffffe],
  spam: [-1, 0xfffffffd],
  hidden: [-1, 0xfffffffc],
  archived: [-1, 0xffffffea],
  restricted: [-1, 0xffffffd1],
  e2ee_cutover: [-1, 0xffffffcf],
};

async function loadThreads(opts = {}) {
  const loadFrom = opts.loadFrom ?? 'inbox';
  const timeout = opts.timeout ?? 60000;

  const loadMoreLSThreads = await module('loadMoreLSThreads');

  const listThreads = async () =>
    (await db.entries('threads'))
      .map(([key, row]) => ({
        ...row,
        lastActivityTimestamp: lsInt64().toI32(row.lastActivityTimestampMs) / 1000,
        key,
        idStr: lsInt64().toStr(row.threadKey),
      }))
      .filter((t) => t.folderName === loadFrom)
      .sort((a, b) => a.lastActivityTimestamp - b.lastActivityTimestamp);

  if (opts.loadAll || opts.loadAtLeast) {
    const parentKey = lsInt64().fromArray(THREAD_FOLDERS[loadFrom]);
    const getRange = () =>
      db
        .entries('threads_ranges_v2__generated')
        .then((entries) =>
          entries.find(([, row]) => lsInt64().equals(row.parentThreadKey, parentKey))
        );

    let rangeRow = await getRange();
    const shouldLoadMore = async () =>
      opts.loadAll
        ? !rangeRow || rangeRow[1]?.hasMoreBefore
        : opts.loadAtLeast
          ? !rangeRow ||
            rangeRow[1]?.hasMoreBefore ||
            (await listThreads()).length < opts.loadAtLeast
          : false;

    while (await shouldLoadMore()) {
      await db.transaction((_, tx) => loadMoreLSThreads(tx, parentKey));
      const [, row] = await getRange();
      if (row?.isLoadingBefore) {
        await db.waitForCondition(
          'threads_ranges_v2__generated',
          async ([key]) => {
            if (!lsInt64().equals(key, parentKey)) return false;
            const [, r] = await getRange();
            return !r?.isLoadingBefore;
          },
          timeout
        );
      }
      rangeRow = await getRange();
      if (await shouldLoadMore()) await sleep(1000);
    }
  }

  return listThreads();
}

async function acceptThreadRequest({ threadId }) {
  const ag = createAssertionGroup('accept-thread');
  ag.assert$(1, Array.isArray(threadId), '', { sentry: false }, true);
  const proc = module('LSOptimisticAcceptMessageRequestStoredProcedure');
  return db.transaction((tx) =>
    proc(tx, { threadKey: lsInt64().fromArray(threadId) })
  );
}

async function removeThreadRequest({ threadId }) {
  const ag = createAssertionGroup('remove-thread');
  ag.assert$(1, Array.isArray(threadId), '', { sentry: false }, true);
  const proc = module('LSOptimisticRemoveThreadStoredProcedure');
  return db.transaction((tx) =>
    proc(tx, {
      threadKey: lsInt64().fromArray(threadId),
      removeType: 0,
    })
  );
}

function getOpenThreadId() {
  const m = globalThis.window?.location?.href?.match(/\/t\/(\d+)/);
  return m ? lsInt64().coerceNonZero(m[1]) : null;
}

async function getInboxThreads(opts = {}) {
  return loadThreads({ ...opts, loadFrom: 'inbox' });
}

async function getArchivedThreads(opts = {}) {
  return loadThreads({ ...opts, loadFrom: 'archived' });
}

async function getPendingThreads(opts = {}) {
  return loadThreads({ ...opts, loadFrom: 'pending' });
}

async function getSpamThreads(opts = {}) {
  return loadThreads({ ...opts, loadFrom: 'spam' });
}

async function getOtherThreads(opts = {}) {
  return loadThreads({ ...opts, loadFrom: 'other' });
}

async function getRestrictedThreads(opts = {}) {
  return loadThreads({ ...opts, loadFrom: 'restricted' });
}

async function getThread({ threadId, loadMessages }) {
  const ag = createAssertionGroup('get-thread');
  const table = await db.table('threads');
  const threadKey = lsInt64().fromArray(threadId);
  const row = await table.get(threadKey);
  ag.assert$(1, row, '', { sentry: 'rare' }, true);
  return {
    ...row,
    messages: loadMessages ? await getMessages({ threadId }) : [],
  };
}

async function getRecipient({ threadId }) {
  const ag = createAssertionGroup('get-recipient');
  ag.assert$(1, Array.isArray(threadId), '', { sentry: false }, true);

  const { firstAsync, fromTableAscending, mergeJoin } = module('ReQL');
  const contacts = await db.table('contacts');
  const participants = await db.table('participants');
  const currentUserIds = getCurrentUserIds();
  const currentUserId = lsInt64().isZero(currentUserIds.eimu)
    ? currentUserIds.id
    : currentUserIds.eimu;

  const rows = await firstAsync(
    mergeJoin(
      fromTableAscending(participants).getKeyRange(threadId),
      fromTableAscending(contacts)
    ).filter(([, contactRow]) => !lsInt64().equals(contactRow.id, currentUserId))
  );

  ag.assert$(2, Array.isArray(rows), '', {
    sentry: 'rare',
    extra: { row: rows, threadId, currentUserId },
  }, true);
  const [participantRow, contactRow] = rows;
  ag.assert$(3, participantRow, '', { sentry: 'rare', extra: { threadId, currentUserId } }, true);
  ag.assert$(4, contactRow, '', { sentry: 'rare', extra: { threadId, currentUserId } }, true);

  return { ...participantRow, ...contactRow };
}

async function getLastReadTimestamp({ threadId }) {
  const recipient = await getRecipient({ threadId }).catch(() => null);
  return recipient ? lsInt64().toI32(recipient.readActionTimestampMs) : null;
}

async function markThreadRead({ threadId }) {
  const ag = createAssertionGroup('mark-read');
  ag.assert$(1, Array.isArray(threadId), '', { sentry: false }, true);
  const proc = module('LSOptimisticMarkThreadReadV2StoredProcedure');
  const threadKey = lsInt64().fromArray(threadId);
  return db.transaction((tx) =>
    proc(tx, {
      threadKey,
      readWatermarkTimestampMs: lsServerTime(),
    })
  );
}

async function createThread({ recipientId }) {
  const ag = createAssertionGroup('create-thread');
  ag.assert$(1, typeof recipientId === 'string', '', { sentry: false }, true);
  const { createGroupThread } = directApi();
  const result = await createGroupThread([recipientId]);
  const threadKey = result?.messaging_thread_key;
  ag.assert$(2, threadKey, '', { sentry: 'rare' }, true);
  const threadId = lsInt64().fromStr(threadKey);
  return {
    ...result,
    threadId,
    threadIdStr: threadKey,
  };
}

// =============================================================================
// Instagram-specific users (PolarisViewer cache)
// =============================================================================

const store = createStore('instagram', {
  initializedRelayStore: false,
  typingState: {},
  currentUser: null,
});

function getCurrentUserCached() {
  const ag = createAssertionGroup('current-user-cached');
  const cached = store.get('currentUser');
  if (cached?.id) return cached;

  const PolarisViewer = module('PolarisViewer');
  const data = PolarisViewer?.data;
  ag.assert$(1, data, '', { sentry: 'veryRare' }, true);
  const ids = getCurrentUserIds();
  data.ids = ids;
  data.idStr = lsInt64().toStr(ids.eimu);
  store.set('currentUser', data);
  return data;
}

async function fetchFromUsername({ username }) {
  const ag = createAssertionGroup('fetch-username');
  const { getUserProfile } = directApi();
  const res = await getUserProfile(username);
  ag.assert$(1, res?.statusCode === 200, '', {
    sentry: 'veryRare',
    networkResponse: res,
  }, true);
  return res?.data?.user;
}

// =============================================================================
// Social - Friends, Follow requests
// =============================================================================

async function getFriends(opts = {}) {
  const ag = createAssertionGroup('get-friends');
  ag.assert$(1, opts != null, '', { sentry: false }, true);
  const { type = 'followers', cursor, userId = getCurrentUserCached()?.id } = opts;
  ag.assert$(2, type === 'followers' || type === 'following', '', { sentry: false }, true);
  ag.assert$(3, userId, '', { sentry: false }, true);

  const mod = await loadModuleSimple('PolarisFollowListActions', 'PolarisProfileFollowRoot.react');
  const { requestNextFollowListPage } = mod;
  ag.assert$(4, typeof requestNextFollowListPage === 'function', '', {
    sentry: 'rare',
    extra: { type, available: Object.keys(mod ?? {}) },
  }, true);

  let response = null;
  const thunk = requestNextFollowListPage(userId, type, false, undefined, false);
  ag.assert$(5, typeof thunk === 'function', '', { sentry: 'veryRare', extra: { thunk } }, true);

  await thunk(
    (val) => {
      if (val?.response?.users) response = val.response;
      return val;
    },
    () => ({
      followLists: {
        [userId]: {
          inbound: { pagination: { endCursor: cursor ?? null } },
          outbound: { pagination: { endCursor: cursor ?? null } },
          inboundMutual: { pagination: { endCursor: cursor ?? null } },
        },
      },
    })
  );

  ag.assert$(6, response?.users && Array.isArray(response.users), '', {
    sentry: 'veryRare',
    networkResponse: response,
    extra: { type, userId, cursor, response },
  }, true);

  return {
    nextCursor: response?.next_max_id ?? null,
    users: response.users,
  };
}

async function getFollowRequests() {
  const ag = createAssertionGroup('follow-requests');
  const { getFollowRequests } = module('PolarisAPIGetFollowRequests');
  const result = await getFollowRequests();
  ag.assert$(1, result, '', { sentry: 'veryRare', networkResponse: result }, true);
  ag.assert$(2, result.users, '', { sentry: 'veryRare', networkResponse: result }, true);
  ag.assert$(3, Array.isArray(result.users), '', {
    sentry: 'veryRare',
    networkResponse: result,
  }, true);
  return result.users;
}

async function acceptFollowRequest({ userId }) {
  const ag = createAssertionGroup('accept-follow');
  ag.assert$(1, userId != null, '', { sentry: false }, true);
  ag.assert$(2, userId && typeof userId === 'string', '', { sentry: false }, true);
  const { approveFollowRequest } = module('PolarisAPIApproveFollowRequest');
  const res = await approveFollowRequest(userId);
  ag.assert$(3, res?.statusCode === 200, '', {
    sentry: 'veryRare',
    networkResponse: res,
    extra: { result: res },
  }, true);
  return res;
}

async function removeFollowRequest({ userId }) {
  const ag = createAssertionGroup('remove-follow');
  ag.assert$(1, userId != null, '', { sentry: false }, true);
  ag.assert$(2, userId && typeof userId === 'string', '', { sentry: false }, true);
  const { ignoreFollowRequest } = module('PolarisAPIIgnoreFollowRequest');
  const res = await ignoreFollowRequest(userId);
  ag.assert$(3, res?.statusCode === 200, '', {
    sentry: 'veryRare',
    networkResponse: res,
    extra: { result: res },
  }, true);
  return res;
}

// =============================================================================
// Close Friends (Bloks)
// =============================================================================

async function _bloks() {
  const WebBloksLoader = await loadModule(
    'WebBloksHasteAppLoader',
    'PolarisSettingsCloseFriendsRoot.react'
  );
  const RawController = await loadModule(
    'XWebBloksAsyncRawController',
    'PolarisSettingsCloseFriendsRoot.react'
  );
  return new WebBloksLoader.WebBloksHasteAppLoader(RawController);
}

async function manageCloseFriend({ userId, shouldInclude }) {
  const ag = createAssertionGroup('close-friend');
  ag.assert$(1, userId != null, '', { sentry: false }, true);
  ag.assert$(2, userId, '', { sentry: 'rare' }, true);
  const bloks = await _bloks();
  return bloks.fetchAction(
    'com.instagram.portable_settings.privacy.close_friends_screen.make_close_friend',
    {
      user_id: userId,
      should_not_make_close_friend: !shouldInclude,
    }
  );
}

async function fetchCloseFriends() {
  const ag = createAssertionGroup('fetch-close-friends');
  const bloks = await _bloks();
  const data = (await bloks.fetchApp('com.instagram.portable_settings.privacy.close_friends_screen_v2'))
    ?.data;
  ag.assert$(1, data, '', { sentry: 'rare' }, true);
  ag.assert$(2, Array.isArray(data), '', { sentry: 'rare' }, true);
  const filtered = data.filter((item) => {
    const lispy = item?.data?.initial_lispy;
    return (
      lispy &&
      lispy.includes('bk.action.array.Make') &&
      lispy.includes('user_id') &&
      lispy.includes('username')
    );
  });
  ag.assert$(3, filtered.length === 2, '', { sentry: 'rare' }, true);
  return { closeFriends: filtered[0], others: filtered[1] };
}

async function addCloseFriend({ userId }) {
  return manageCloseFriend({ userId, shouldInclude: true });
}

async function removeCloseFriend({ userId }) {
  return manageCloseFriend({ userId, shouldInclude: false });
}

// =============================================================================
// Highlights
// =============================================================================

function getStoryAPIActions() {
  return module('PolarisStoryAPIActions');
}

async function createHighlight({ mediaIds, coverMediaId, title }) {
  const ag = createAssertionGroup('create-highlight');
  ag.assert$(1, mediaIds != null, '', { sentry: false }, true);
  ag.assert$(2, coverMediaId != null, '', { sentry: false }, true);
  ag.assert$(3, title != null, '', { sentry: false }, true);
  const userId = ag.assert$(4, getCurrentUserCached()?.id, '', { sentry: 'rare' }, true);
  return getStoryAPIActions().postNewHighlight(mediaIds, userId, title, coverMediaId);
}

async function modifyHighlight({
  highlightId,
  addMediaIds,
  removeMediaIds,
  title,
  coverMediaId,
}) {
  const ag = createAssertionGroup('modify-highlight');
  ag.assert$(1, highlightId != null, '', { sentry: false }, true);
  ag.assert$(2, !addMediaIds || Array.isArray(addMediaIds), '', { sentry: false }, true);
  ag.assert$(3, !removeMediaIds || Array.isArray(removeMediaIds), '', { sentry: false }, true);
  ag.assert$(4, !title || typeof title === 'string', '', { sentry: false }, true);
  ag.assert$(5, !coverMediaId || typeof coverMediaId === 'string', '', { sentry: false }, true);
  const userId = ag.assert$(6, getCurrentUserCached()?.id, '', { sentry: 'rare' }, true);
  return getStoryAPIActions().editHighlight(
    addMediaIds ?? [],
    removeMediaIds ?? [],
    highlightId,
    userId,
    title,
    coverMediaId
  );
}

// =============================================================================
// Export - flat object with all functions
// =============================================================================

export default {
  // Metro
  module,
  moduleFactory,
  loadModule,
  loadModuleSimple,
  serverTimeMs,
  search,

  // MetroExtended
  config,
  db,
  uploadMedia,
  updateTable,
  factory,
  lsServerTime,
  lsInt64,
  getOpenPlatform,

  // InstagramPlatform
  directApi,
  reducers,

  // Calls
  callsState,
  disableCalls,
  enableCalls,

  // Constants
  DISPLAYED_CONTENT_TYPES,
  ATTACHMENT_TYPE,
  EPHEMERAL_STATE,
  REACHABILITY_STATUS,

  // Users
  getCurrentUser,
  getCurrentUserIds,
  getContacts,
  getContact,
  getFeatureLimits,
  _isContactUnreachable,
  getCurrentUserCached,
  fetchFromUsername,

  // Messages
  sendTextMessage,
  sendMedia,
  getMessages,
  getMessage,
  paginateMessages,
  _processMessageIr,
  _processMessage,
  processMessages,
  _processOpenMessages,

  // Threads
  acceptThreadRequest,
  removeThreadRequest,
  getOpenThreadId,
  getInboxThreads,
  getArchivedThreads,
  getPendingThreads,
  getSpamThreads,
  getOtherThreads,
  getRestrictedThreads,
  getThread,
  getRecipient,
  getLastReadTimestamp,
  markThreadRead,
  createThread,

  // Social
  getFriends,
  getFollowRequests,
  acceptFollowRequest,
  removeFollowRequest,

  // Close Friends
  addCloseFriend,
  removeCloseFriend,
  fetchCloseFriends,
  manageCloseFriend,

  // Highlights
  createHighlight,
  modifyHighlight,
};
