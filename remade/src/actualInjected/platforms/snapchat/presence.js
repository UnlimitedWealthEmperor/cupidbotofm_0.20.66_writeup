import { createAssertionGroup } from '../../utils/errors';
import { isOneOfType } from '../../utils/types';
import SnapchatWebpack from './webpack';
import { getCurrentUser } from './users';
import { enterConversation, _getOpenConversationId } from './conversations';

const TypingState = { NONE: 0, TYPING: 1, TYPED: 2 };
const TypingActivityType = { TYPING: 'TYPING', FINISH: 'FINISH' };

const DEFAULT_PRESENCE = Object.freeze({
  presentOnPlatform: false,
  isPeeking: false,
  typingState: TypingState.NONE,
});

function idObjectFromUUID(uuid) {
  let hex = uuid.replace(/-/g, '').toLowerCase();
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.substring(i, i + 2), 16);
  }
  return { id: bytes, str: uuid };
}

let presenceQueue = Promise.resolve();

function matchesUserId(key, userId) {
  if (!key) return false;
  return key.split(':')[0] === userId;
}

export async function isRecipientPresent({ conversationId, recipientId } = {}) {
  const { assert$ } = createAssertionGroup('cde366');
  assert$(1, conversationId != null, '', { sentry: 'veryRare' }, true);
  assert$(4, recipientId != null, '', { sentry: 'veryRare' }, true);

  const recipient = await _findPresenceRecipient({ conversationId, recipientId });
  return !!recipient.presentOnPlatform || !!recipient.isPeeking;
}

export async function isRecipientTyping({ conversationId, recipientId }) {
  const { assert$ } = createAssertionGroup('d5843d');
  assert$(1, conversationId != null, '', { sentry: 'veryRare' }, true);
  assert$(4, recipientId != null, '', { sentry: 'veryRare' }, true);

  const recipient = await _findPresenceRecipient({ conversationId, recipientId });
  return recipient.typingState === TypingState.TYPING || recipient.typingState === TypingState.TYPED;
}

export async function startPresence({ conversationId }) {
  const { assert$, throw$ } = createAssertionGroup('204ae7');
  assert$(1, conversationId != null, '', { sentry: 'veryRare', extra: { conversationId } }, true);
  assert$(2, conversationId, '', { sentry: 'veryRare', extra: { conversationId } }, true);
  assert$(3, typeof conversationId === 'string', '', { sentry: 'veryRare', extra: { conversationId } }, true);

  const session = {
    get: () => SnapchatWebpack.accessSnapchatStore('presence->presenceSession'),
    isValid: (s = session.get()) => {
      return s?.conversationId?.str === conversationId || s?.conversationId === conversationId;
    },
  };

  if (session.isValid()) return session.get();

  const convIdObj = idObjectFromUUID(conversationId);

  const task = presenceQueue.then(async () => {
    if (session.isValid()) return session.get();

    const existing = session.get();
    if (existing && !session.isValid(existing)) await existing?.dispose?.();

    const enterResult = await enterConversation({ conversationId });
    const isActive = !!SnapchatWebpack.accessSnapchatStore(`messaging->conversations->${conversationId}->isActive`);

    if (!isActive) {
      const openConvId = await _getOpenConversationId().catch(() => null);
      throw$(4, '', {
        sentry: 'extremelyRare',
        extra: { conversationId, enterConversationResult: enterResult, openConversationId: openConvId },
      }, true);
    }

    await SnapchatWebpack.callSnapchatStore('presence->createPresenceSession', convIdObj);

    const storeModule = SnapchatWebpack.getSnapchatStoreModule().exportsMatched.value;
    const MAX_WAIT = 2000;

    const { presSession } = session.isValid()
      ? { presSession: session.get() }
      : await new Promise((resolve) => {
        const start = Date.now();
        let unsub = () => {};
        const done = (timedOut) => {
          unsub();
          resolve({ presSession: session.get(), timedOut, waitedMs: Date.now() - start });
        };
        const timeout = setTimeout(() => done(true), MAX_WAIT);
        unsub = storeModule.subscribe(() => {
          if (session.isValid()) { clearTimeout(timeout); done(false); }
        });
      });

    if (!session.isValid(presSession)) {
      const openConvId = await _getOpenConversationId().catch(() => null);
      const isCorrectConv = !openConvId || openConvId === conversationId;
      throw$(1, '', {
        sentry: isCorrectConv ? 'veryRare' : 'extremelyRare',
        networkRelated: true,
        extra: { conversationId, openConversationId: openConvId },
      }, true);
    }

    await SnapchatWebpack.callSnapchatStore('presence->presenceSession->activate');
    return session.get();
  });

  presenceQueue = task.catch(() => null);
  return task;
}

export async function stopPresence() {
  const session = SnapchatWebpack.accessSnapchatStore('presence->presenceSession');
  await session?.dispose();
}

export async function startTyping({ conversationId }) {
  const { assert$ } = createAssertionGroup('3402ad');
  assert$(1, conversationId != null, '', { sentry: 'veryRare', extra: { conversationId } }, true);
  return _sendTypingActivity({ conversationId, type: 'TYPING' });
}

export async function stopTyping({ conversationId }) {
  const { assert$ } = createAssertionGroup('cf9178');
  assert$(1, conversationId != null, '', { sentry: 'veryRare', extra: { conversationId } }, true);
  return _sendTypingActivity({ conversationId, type: 'FINISH' });
}

const typingActivityValues = { TYPING: 0, FINISH: 1 };

async function _sendTypingActivity({ conversationId, type }) {
  const { assert$ } = createAssertionGroup('42c44e');
  assert$(1, conversationId != null, '', { sentry: 'veryRare' }, true);
  assert$(4, type != null, '', { sentry: 'veryRare' }, true);
  assert$(6, typingActivityValues[type] != null, '', { sentry: 'veryRare' }, true);

  const session = await startPresence({ conversationId });
  assert$(7, session?.processTypingActivity != null, '', { sentry: 'veryRare' }, true);
  return session.processTypingActivity(typingActivityValues[type], 0);
}

async function _findPresenceRecipient({ conversationId, recipientId }) {
  const { assert$ } = createAssertionGroup('adae08');
  assert$(1, conversationId != null, '', { sentry: 'veryRare' }, true);
  assert$(2, recipientId != null, '', { sentry: 'veryRare' }, true);

  let session;
  try { session = await startPresence({ conversationId }); }
  catch { return DEFAULT_PRESENCE; }

  const currentUser = getCurrentUser();

  const findInSession = (s) => {
    const entries = Array.from(s?.state?.entries?.() ?? []);
    const found = entries.find(([key]) => {
      const keyStr = typeof key === 'string' ? key : key?.str;
      return recipientId ? matchesUserId(keyStr, recipientId) : !matchesUserId(keyStr, currentUser.user_id);
    });
    return found?.[1] ?? null;
  };

  const recipient = findInSession(session);
  if (recipient) return recipient;

  const store = SnapchatWebpack.getSnapchatStoreModule().exportsMatched.value;
  if (typeof store?.subscribe === 'function') {
    const TIMEOUT = 3000;
    const result = await new Promise((resolve) => {
      let unsub = () => {};
      const done = (val) => { unsub(); resolve(val); };
      const timeout = setTimeout(() => done(null), TIMEOUT);
      unsub = store.subscribe(() => {
        const s = SnapchatWebpack.accessSnapchatStore('presence->presenceSession');
        const found = findInSession(s);
        if (found) { clearTimeout(timeout); done(found); }
      });
    });
    if (result) return result;
  }

  return DEFAULT_PRESENCE;
}
