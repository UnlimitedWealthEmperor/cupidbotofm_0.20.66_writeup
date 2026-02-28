/**
 * Reddit platform SDK - uses Matrix chat client and GraphQL APIs.
 * Interacts with Reddit's shadow DOM elements (rs-app, rs-matrix-client, etc).
 * GraphQL endpoints: gql.reddit.com and gql-fed.reddit.com
 */

import { createAssertionGroup } from '../../utils/errors';
import { randomString, safeTry } from '../../utils/misc';
import { cleanFalsy } from '../../utils/objects';
import { forwardToSentry } from '../../sentry';

const assertReddit = createAssertionGroup('reddit');

// Operation IDs for gql.reddit.com
const OP_NOTIFICATION_INBOX = 'be3e43b15ada';
const OP_FOLLOWERS = '5fc67bec507f';
const OP_REDDITOR_BY_NAME = 'db6eb1356b13';

const ADMIN_USER_ID = '@t2_1qwk:reddit.com';

const redditCache = {
  redditChatScript: null,
  newRedditOperationHashes: {},
};

let graphqlClientFallback = null;

/** RedditElements - getter-based object for finding Reddit DOM elements */
const RedditElements = {
  get redditChatApp() {
    return assertReddit.assert$(1, document.querySelector('rs-app'), '', { sentry: 'uncommon' }, true);
  },
  get redditRoomNav() {
    return assertReddit.assert$(1, this.redditChatApp?.shadowRoot?.querySelector('rs-rooms-nav'), '', { sentry: 'uncommon' }, true);
  },
  get redditMatrixClient() {
    return assertReddit.assert$(1, document.querySelector('rs-matrix-client'), '', { sentry: 'uncommon' }, true);
  },
  get redditAuthClient() {
    return assertReddit.assert$(1, this.redditMatrixClient?.authClient, '', { sentry: 'uncommon' }, true);
  },
  get redditRoomNavVirtual() {
    return assertReddit.assert$(1, this.redditRoomNav?.shadowRoot?.querySelector('rs-virtual-scroll'), '', { sentry: 'uncommon' }, true);
  },
  get redditFirstRoom() {
    const virtual = this.redditRoomNavVirtual;
    return assertReddit.assert$(1, virtual?.shadowRoot?.querySelector('rs-rooms-nav-room'), '', { sentry: 'uncommon' }, true);
  },
  get redditUserController() {
    return this.redditFirstRoom?.users;
  },
  get redditChatGqlClient() {
    const el = document.querySelector('reddit-chat-gql-client');
    return el?.client ?? null;
  },
  get graphqlClient() {
    const rsClient = document.querySelector('rs-graphql-client');
    if (rsClient?.client) return rsClient.client;

    if (!graphqlClientFallback) {
      graphqlClientFallback = {
        async makeGQLCall({ operation, variables }, opts = {}) {
          const auth = RedditElements.redditAuthClient;
          const token = await auth.getToken();
          const loid = auth.constructor?.getLoid?.();
          const headers = { 'Content-Type': 'application/json' };
          if (token) headers.Authorization = `Bearer ${token}`;
          if (loid) headers['X-Reddit-Loid'] = loid;

          const body = variables ? { variables } : {};
          if (operation?.hash) {
            body.operationName = operation.name;
            body.extensions = { persistedQuery: { version: 1, sha256Hash: operation.hash } };
          } else if (operation?.query) {
            body.query = operation.query;
          } else {
            throw new Error('Operation is invalid');
          }

          const controller = opts.abortController ?? new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 10000);
          try {
            const res = await fetch('https://gql-fed.reddit.com', {
              method: 'POST',
              headers,
              body: JSON.stringify(body),
              signal: controller.signal,
            });
            clearTimeout(timeoutId);
            if (res.status === 200) return res.json();
            throw new Error(`GraphQL request failed with status ${res.status}`);
          } catch (e) {
            clearTimeout(timeoutId);
            throw e;
          }
        },
      };
    }
    return assertReddit.assert$(1, graphqlClientFallback, '', { sentry: 'uncommon' }, true);
  },
  get matrix() {
    return assertReddit.assert$(1, this.redditChatApp?.client, '', { sentry: 'uncommon' }, true);
  },

  async graphQlCall(body, retryCount = 0) {
    assertReddit.assert$(1, retryCount < 3, '', { sentry: 'uncommon' }, true);

    const token = await this.redditAuthClient.getToken();
    const loid = this.redditAuthClient.constructor?.getLoid?.();
    this.redditAuthClient.constructor?.getCsrfToken?.();
    const sessionTracker = Object.fromEntries(
      document.cookie.split(';').map((s) => s.trim().split('='))
    ).session_tracker;

    const res = await fetch('https://gql.reddit.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        'X-Reddit-Loid': loid ?? '',
        'X-Reddit-Session': sessionTracker ?? '',
      },
      body: JSON.stringify(body),
    });

    if (res.status === 401) {
      await this.redditAuthClient.refreshToken?.();
      return this.graphQlCall(body, retryCount + 1);
    }
    if (res.status === 200) return res.json();
    return null;
  },
};

function getRedditChatElement() {
  return document.getElementById('reddit-chat');
}

async function getOperationHash(name) {
  if (redditCache.newRedditOperationHashes[name]) return redditCache.newRedditOperationHashes[name];

  let script = redditCache.redditChatScript;
  if (!script) {
    const chatEl = getRedditChatElement();
    if (!chatEl) return null;
    const src = chatEl.getAttribute('src');
    if (!src) return null;
    const resp = await fetch(src);
    script = await resp.text();
    redditCache.redditChatScript = script;
  }

  assertReddit.assert$(1, typeof script === 'string', '', { sentry: 'rare' }, true);
  const re = new RegExp(`name:"${name}",hash:"([\\w$]*?)"`);
  const match = script.match(re);
  assertReddit.assert$(2, match, '', { sentry: 'rare' }, true);
  const hash = match[1];
  assertReddit.assert$(3, hash, '', { sentry: 'rare' }, true);
  redditCache.newRedditOperationHashes[name] = hash;
  return hash;
}

function cleanUser(u) {
  return u
    ? { userId: u.userId, name: u.name, displayName: u.displayName, rawDisplayName: u.rawDisplayName }
    : u;
}

function cleanMembers(members) {
  if (!members) return members;
  return Object.keys(members).reduce((acc, k) => {
    if (k !== ADMIN_USER_ID) acc[k] = cleanUser(members[k]);
    return acc;
  }, {});
}

function cleanRooms(rooms) {
  if (!rooms) return rooms;
  return rooms.map((r) =>
    r
      ? {
          currentState: { members: cleanMembers(r.currentState?.members) },
          roomId: r.roomId,
          timeline: r.timeline?.map((e) => ({
            event: { origin_server_ts: e.event?.origin_server_ts },
          })),
        }
      : r
  );
}

function cleanInvitedRooms(rooms) {
  if (!rooms) return rooms;
  return rooms.map((r) =>
    r
      ? {
          currentState: { members: cleanMembers(r.currentState?.members) },
          roomId: r.roomId,
        }
      : r
  );
}

function extractUserId(matrixId) {
  return matrixId?.slice(1, matrixId.indexOf(':'));
}

function toMatrixId(userId) {
  return `@${userId}:reddit.com`;
}

async function resizeImageBlob(blob, opts = { compress: true }) {
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

function getImageDimensions(blob) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    const img = new Image();
    reader.onload = () => {
      img.onload = () =>
        resolve({ w: img.width, h: img.height, mimetype: blob.type, size: blob.size });
      img.onerror = () => resolve(null);
      img.src = reader.result;
    };
    reader.readAsDataURL(blob);
  });
}

function annotateRedditMessage(msg) {
  msg.ogMsg = msg.msg;
  let annotated = msg.msg || '';
  if (msg.isGIF) annotated = '[GIF]';
  else if (msg.isSticker) annotated = '[sticker]';
  else if (msg.isPhoto) annotated = `[photo] ${annotated}`;
  else if (msg.msg) annotated = msg.msg;
  annotated = annotated.trim();
  if (msg.isInReplyThread) annotated = `[replied] ${annotated}`;
  annotated = annotated.trim();
  msg.msg = annotated;
  return msg;
}

// --- notifications ---
async function getNotifications({ cursor } = {}) {
  const data = await RedditElements.graphQlCall({
    id: OP_NOTIFICATION_INBOX,
    variables: {
      after: cursor ?? null,
      first: 10,
    },
  });
  assertReddit.assert$(1, data?.data, '', { sentry: 'veryRare', networkRelated: true }, true);
  const elements = data.data?.notificationInbox?.elements;
  const edges = elements?.edges;
  const pageInfo = elements?.pageInfo;
  assertReddit.assert$(2, edges, '', { sentry: 'rare' }, true);
  assertReddit.assert$(3, pageInfo, '', { sentry: 'rare' }, true);
  return {
    notifications: edges?.map((e) => e.node) ?? [],
    hasNext: pageInfo?.hasNextPage,
    cursor: pageInfo?.endCursor,
  };
}

// --- replies ---
const REPLY_TYPES = ['COMMENT_REPLY', 'POST_REPLY', 'THREAD_REPLIES'];

async function getReplies({ cursor } = {}) {
  const { notifications, hasNext, cursor: nextCursor } = await getNotifications({ cursor });
  const comments = notifications
    .filter((n) => REPLY_TYPES.includes(n?.context?.messageType))
    .map((n) => {
      const titleMatch = n?.title?.match(/u\/(.+?) /);
      const author = titleMatch?.[1] ?? '';
      return {
        ...n,
        author:
          !author || (author.startsWith('[') && author.endsWith(']')) ? '' : author,
      };
    })
    .filter((c) => !!c.author && c.author !== 'AutoModerator');
  return { comments, hasNext, cursor: nextCursor };
}

// --- rooms ---
function getFilteredRoomList(type, clean) {
  const nav = RedditElements.redditRoomNav;
  assertReddit.throw$(1, !!nav, '', { sentry: 'veryRare' }, true);

  if (type === 'joined_chat_rooms') {
    let list = nav.getRoomsList?.() ?? [];
    return clean ? cleanRooms(list) : list;
  }
  if (type === 'invited_chat_rooms') {
    let list = nav.getFilteredRoomList?.()?.filter((r) => r.getMyMembership?.() === 'invite') ?? [];
    return clean ? cleanInvitedRooms(list) : list;
  }
  return null;
}

async function getRooms({ clean } = {}) {
  return getFilteredRoomList('joined_chat_rooms', clean);
}

async function getRoomRequests({ clean } = {}) {
  return getFilteredRoomList('invited_chat_rooms', clean);
}

async function getRoom({ roomId }) {
  assertReddit.assert$(1, typeof roomId === 'string', '', { sentry: false }, true);
  return RedditElements.matrix.getRoom(roomId);
}

async function acceptRoomRequest({ roomId }) {
  assertReddit.assert$(1, typeof roomId === 'string', '', { sentry: false }, true);
  await RedditElements.matrix.joinRoom(roomId);
}

async function ignoreRoomRequest({ roomId }) {
  assertReddit.assert$(1, typeof roomId === 'string', '', { sentry: false }, true);
  await RedditElements.matrix.leaveRoom(roomId);
}

async function createRoom({ userId }) {
  assertReddit.assert$(1, typeof userId === 'string', '', { sentry: false }, true);
  return RedditElements.matrix.createRoom({
    preset: 'reddit_dm',
    invite: [userId],
  });
}

async function markAsRead({ roomId }) {
  assertReddit.assert$(1, typeof roomId === 'string', '', { sentry: false }, true);
  const room = await getRoom({ roomId });
  assertReddit.assert$(2, room, '', { sentry: 'rare' }, true);
  const timeline = room.getLiveTimeline?.();
  assertReddit.assert$(3, timeline, '', { sentry: 'rare' }, true);
  const events = timeline.getEvents?.() ?? [];
  if (events.length > 0) {
    await RedditElements.matrix.sendReadReceipt?.(events[events.length - 1]);
  }
}

// --- followers ---
async function getFollowers({ cursor } = {}) {
  const data = await RedditElements.graphQlCall({
    id: OP_FOLLOWERS,
    variables: {
      includeIdentity: false,
      first: null,
      after: cursor ?? null,
      searchQuery: null,
    },
  });
  assertReddit.assert$(1, data?.data, '', { sentry: 'rare' }, true);
  const info = data.data?.identity?.followedByRedditorsInfo;
  assertReddit.assert$(2, info, '', { sentry: 'rare' }, true);
  const pageInfo = info?.pageInfo;
  assertReddit.assert$(3, pageInfo, '', { sentry: 'rare' }, true);

  const nodes = info?.edges?.map((e) => e.node) ?? [];
  const followers = nodes
    .filter((n) => n?.__typename !== 'DeletedRedditor')
    .map((n) => ({ ...n, id: toMatrixId(n.id) }));

  return {
    followers,
    hasMore: pageInfo?.hasNextPage,
    nextCursor: pageInfo?.endCursor,
  };
}

// --- messages ---
async function loadThreads({ roomId }) {
  const room = assertReddit.assert$(1, await getRoom({ roomId }), '', { sentry: false }, true);
  const timelineSet = room.getUnfilteredTimelineSet?.();
  const liveTimeline = assertReddit.assert$(2, timelineSet?.getLiveTimeline?.(), '', { sentry: false }, true);
  const threadRoots = liveTimeline.events?.filter((e) => e?.isThreadRoot && !e?.thread) ?? [];

  for (const ev of threadRoots) {
    const eventId = ev.event?.event_id;
    if (eventId) await room.createThread?.(eventId, ev, [], 0);
  }
  return threadRoots.length;
}

async function processMessages({ roomId }) {
  const room = assertReddit.assert$(1, await getRoom({ roomId }), '', { sentry: false }, true);
  const myUserId = assertReddit.assert$(2, RedditElements.matrix.getUserId?.(), '', { sentry: false }, true);
  const seen = new Map();

  function processEventList(events, threadId = null) {
    for (const ev of events ?? []) {
      const event = ev?.event;
      if (!event) continue;

      const id = event.event_id;
      let msg = '';
      const ts = event.origin_server_ts / 1000;
      const isIncoming = ev.sender?.userId !== myUserId;
      let isGIF = false;
      let isPhoto = false;
      let isSticker = false;
      const isInReplyThread = !!threadId;

      if (seen.has(id)) continue;
      if (event.type === 'm.reaction') continue;

      if (event.type === 'm.sticker') isSticker = true;

      const msgtype = event.content?.msgtype;
      const mimetype = event.content?.info?.mimetype;

      if (msgtype === 'm.text') msg = event.content?.body ?? '';
      if (msgtype === 'm.image') {
        isPhoto = mimetype !== 'image/gif';
        isGIF = mimetype === 'image/gif';
      }

      if (msg || isGIF || isPhoto || isSticker) {
        const obj = {
          id,
          msg,
          timestamp: ts,
          isIncoming,
          isGIF,
          isPhoto,
          isSticker,
          isInReplyThread,
        };
        seen.set(id, annotateRedditMessage(obj));
      }

      if (ev.thread && ev.threadId !== threadId) {
        processEventList(ev.thread?.timeline ?? [], ev.threadId);
      }
    }
  }

  const timelineSet = assertReddit.assert$(3, room.getUnfilteredTimelineSet?.(), '', { sentry: 'rare' }, true);
  const liveTimeline = assertReddit.assert$(4, timelineSet?.getLiveTimeline?.(), '', { sentry: 'rare' }, true);
  processEventList(liveTimeline.events ?? []);
  const result = Array.from(seen.values()).sort((a, b) => a.timestamp - b.timestamp);
  return result;
}

async function paginateMessages({ roomId }) {
  const room = assertReddit.assert$(1, await getRoom({ roomId }), '', { sentry: 'rare' }, true);
  const timelineSet = assertReddit.assert$(2, room.getUnfilteredTimelineSet?.(), '', { sentry: 'rare' }, true);
  const liveTimeline = assertReddit.assert$(3, timelineSet?.getLiveTimeline?.(), '', { sentry: 'rare' }, true);
  return RedditElements.matrix.paginateEventTimeline?.(liveTimeline, {
    backwards: true,
    limit: 10,
  });
}

async function sendPhoto({ roomId, blob, threadId }) {
  assertReddit.assert$(1, typeof roomId === 'string', '', { sentry: false }, true);
  assertReddit.assert$(2, blob instanceof Blob, '', { sentry: false }, true);

  const compressed = await resizeImageBlob(blob, { compress: true, width: 1080 });
  const file = new File([compressed], `${randomString(8)}.jpg`, { type: 'image/jpeg' });

  const uploadResult = await RedditElements.matrix.uploadContent?.(file);
  assertReddit.assert$(3, uploadResult, '', { sentry: 'rare' }, true);

  const dims = await getImageDimensions(file);
  assertReddit.assert$(4, dims, '', { sentry: 'rare' }, true);
  assertReddit.assert$(5, typeof uploadResult?.content_uri === 'string', '', { sentry: 'rare' }, true);

  return RedditElements.matrix.sendImageMessage?.(
    roomId,
    threadId ?? null,
    uploadResult.content_uri,
    dims
  );
}

async function sendTextMessage({ roomId, message, threadId }) {
  assertReddit.assert$(1, typeof roomId === 'string', '', { sentry: false }, true);
  assertReddit.assert$(2, typeof message === 'string', '', { sentry: false }, true);
  return RedditElements.matrix.sendTextMessage?.(
    roomId,
    threadId ?? null,
    message,
    null
  );
}

// --- init ---
function hasLoaded() {
  return !!safeTry(() => RedditElements.redditChatApp?.client);
}

// --- presence ---
function startTyping({ roomId }) {
  assertReddit.assert$(1, typeof roomId === 'string', '', { sentry: false }, true);
  return RedditElements.matrix.sendTyping?.(roomId, true, 15000);
}

function stopTyping({ roomId }) {
  assertReddit.assert$(1, typeof roomId === 'string', '', { sentry: false }, true);
  return RedditElements.matrix.sendTyping?.(roomId, false, 0);
}

function isRecipientTyping({ roomId, recipientId }) {
  const room = RedditElements.matrix.getRoom?.(roomId);
  assertReddit.assert$(1, room, '', { sentry: false }, true);
  const member = room.getMember?.(recipientId);
  assertReddit.assert$(2, member, '', { sentry: 'rare' }, true);
  return member.typing;
}

// --- users ---
const usersCache = { users: null };

async function getMe({ clean } = {}) {
  const userId = await RedditElements.matrix.getUserId?.();
  const user = await RedditElements.matrix.getUser?.(userId);
  return clean ? cleanUser(user) : user;
}

async function getUsers({ clean } = {}) {
  const users = await RedditElements.matrix.getUsers?.();
  return clean ? users?.map(cleanUser) : users;
}

function extractRedditorsFromResponse(data) {
  const d = data?.data ?? data;
  const candidates = [
    d?.redditorsInfoByIds,
    d?.chatRedditors?.redditorsInfoByIds,
    d?.chatRedditorsByIds?.nodes,
    d?.chatRedditors?.nodes,
  ];
  return candidates.find(Array.isArray);
}

async function fetchRedditors({ userIds, ignoreCache } = {}) {
  assertReddit.assert$(1, Array.isArray(userIds), '', { sentry: false }, true);

  const cached = {};
  const toFetch = ignoreCache ? userIds : [];

  if (!ignoreCache) {
    for (const id of userIds) {
      if (usersCache.users?.[id]) cached[id] = usersCache.users[id];
      else toFetch.push(id);
    }
  }

  if (toFetch.length === 0) return cached;

  const ids = toFetch.map(extractUserId);
  let nodes = null;

  const gqlClient = RedditElements.redditChatGqlClient;
  const hasChatClient = !!gqlClient?.queryRedditors;
  const hasLegacyScript = !!getRedditChatElement();

  if (hasChatClient) {
    const res = await gqlClient.queryRedditors({ ids }).catch(() => null);
    nodes = extractRedditorsFromResponse(res);
  }

  if (!nodes && hasLegacyScript) {
    const hash = await getOperationHash('Redditors');
    const res = await RedditElements.graphqlClient.makeGQLCall({
      operation: { name: 'Redditors', hash },
      variables: { ids },
    });
    nodes = extractRedditorsFromResponse(res);
  }

  if (!nodes) {
    forwardToSentry('reddit.fetchRedditors', assertReddit.message$(3, '', {
      sentry: 'veryRare',
      extra: { hasChatClient, hasLegacyScript },
    }, true));
    return { ...cached };
  }

  const byMatrixId = Object.fromEntries(
    nodes.map((n) => [toMatrixId(n.id), n])
  );
  const result = { ...cached };

  for (const matrixId of toFetch) {
    const node =
      byMatrixId[matrixId] ?? {
        __typename: 'DeletedRedditor',
        id: 't2_0',
        displayName: '[deleted]',
      };
    result[matrixId] = node;
    if (!usersCache.users) usersCache.users = {};
    usersCache.users[matrixId] = node;
  }
  return result;
}

async function fetchRedditorByUsername({ username }) {
  assertReddit.assert$(1, username != null, '', { sentry: false }, true);
  assertReddit.assert$(2, username, '', { sentry: false }, true);

  const data = await RedditElements.graphQlCall({
    id: OP_REDDITOR_BY_NAME,
    variables: { name: username },
  });
  assertReddit.assert$(3, OP_REDDITOR_BY_NAME, '', { sentry: 'rare' }, true);
  assertReddit.assert$(4, data?.data?.redditorInfoByName, '', {
    extra: data?.data,
    sentry: 'veryRare',
  }, true);
  assertReddit.assert$(5, data?.data?.redditorInfoByName?.id, '', {
    extra: data?.data?.redditorInfoByName,
    sentry: 'veryRare',
  }, true);
  return data.data.redditorInfoByName.id;
}

async function searchUser({ username }) {
  const results = await searchUsers({ term: username });
  return assertReddit.assert$(1, results?.[0], '', { sentry: 'veryRare' }, true);
}

async function searchUsers({ term, limit } = {}) {
  const res = await RedditElements.matrix.searchUserDirectory?.({ term, limit });
  return res?.results ?? [];
}

async function getDeletedUsers({ userIds } = {}) {
  assertReddit.assert$(1, Array.isArray(userIds), '', { sentry: false }, true);
  const redditors = await fetchRedditors({ userIds });
  return Object.fromEntries(
    userIds.map((id) => [id, redditors[id]?.__typename === 'DeletedRedditor'])
  );
}

// --- exports ---
export default {
  // RedditElements (for advanced usage)
  RedditElements,

  // Notifications & replies
  getNotifications,
  getReplies,

  // Rooms (conversations)
  getRooms,
  getRoomRequests,
  getRoom,
  acceptRoomRequest,
  ignoreRoomRequest,
  createRoom,
  markAsRead,

  // Followers
  getFollowers,

  // Messages
  loadThreads,
  processMessages,
  paginateMessages,
  sendPhoto,
  sendTextMessage,

  // Init
  hasLoaded,

  // Presence
  startTyping,
  stopTyping,
  isRecipientTyping,

  // Users
  getMe,
  getUsers,
  fetchRedditors,
  fetchRedditorByUsername,
  searchUser,
  searchUsers,
  getDeletedUsers,

  // Aliases for bridge compatibility
  acceptRequest: acceptRoomRequest,
  ignoreRequest: ignoreRoomRequest,
  markRead: markAsRead,
  sendMessage: sendTextMessage,
  getCommentReplies: getReplies,
};
