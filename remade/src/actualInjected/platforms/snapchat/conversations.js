import { createAssertionGroup } from '../../utils/errors';
import { isOneOfType } from '../../utils/types';
import { comparator } from '../../utils/objects';
import { sleep } from '../../utils/async';
import SnapchatWebpack from './webpack';
import { ConversationType } from './constants';
import { getCurrentUser } from './users';
import { getFriends } from './friends';

function idObjectFromUUID(uuid) {
  let hex = uuid.replace(/-/g, '').toLowerCase();
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.substring(i, i + 2), 16);
  }
  return { id: bytes, str: uuid };
}

globalThis.idObjectFromUUID = idObjectFromUUID;

export async function getFeed({ loadAll }) {
  while (loadAll && !SnapchatWebpack.accessSnapchatStore('messaging->hasNoMoreFeedEntries')) {
    await SnapchatWebpack.callSnapchatStore('messaging->pageFeed');
    await sleep(500);
  }

  return Object.values(SnapchatWebpack.accessSnapchatStore('messaging->feed'))
    .filter((entry) => entry.conversationType === ConversationType.ONEONONE)
    .sort(comparator('ascending', 'lastEventUpdateTimestamp'));
}

export function getConversation({ conversationId }) {
  const { assert$ } = createAssertionGroup('505417');
  assert$(1, conversationId != null, '', { sentry: 'veryRare' }, true);
  assert$(2, !conversationId || typeof conversationId === 'string', '', { sentry: 'veryRare' }, true);
  return SnapchatWebpack.accessSnapchatStore(`messaging->conversations->${conversationId}`);
}

export async function createConversationSendTo({ userId }) {
  const { assert$ } = createAssertionGroup('902551');
  assert$(1, userId != null, '', { sentry: 'veryRare' }, true);
  assert$(2, typeof userId === 'string', '', { sentry: 'veryRare' }, true);
  const currentUser = getCurrentUser();
  return SnapchatWebpack.callSnapchatStore(
    'messaging->createConversationSendTo',
    [userId],
    idObjectFromUUID(currentUser.user_id),
    ''
  );
}

export async function enterConversation({ conversationId }) {
  const { assert$ } = createAssertionGroup('x757036');
  assert$(1, conversationId != null, '', { sentry: 'veryRare' }, true);
  assert$(2, conversationId, '', { sentry: 'veryRare' }, true);
  assert$(3, typeof conversationId === 'string', '', { sentry: 'veryRare' }, true);

  const isActive = () => !!SnapchatWebpack.accessSnapchatStore(`messaging->conversations->${conversationId}->isActive`);
  if (isActive()) return true;

  await SnapchatWebpack.callSnapchatStore('messaging->enterConversation', idObjectFromUUID(conversationId), 0);
  return isActive();
}

export async function exitConversation({ conversationId }) {
  const { assert$ } = createAssertionGroup('0a3bd4');
  assert$(1, conversationId != null, '', { sentry: 'veryRare' }, true);
  assert$(2, conversationId, '', { sentry: 'veryRare' }, true);
  assert$(3, typeof conversationId === 'string', '', { sentry: 'veryRare' }, true);
  return SnapchatWebpack.callSnapchatStore('messaging->exitConversation', idObjectFromUUID(conversationId));
}

export async function _getConversationId({ userId }) {
  const { assert$ } = createAssertionGroup('e6dd78');
  assert$(1, userId != null, '', { sentry: 'veryRare' }, true);
  assert$(2, typeof userId === 'string', '', { sentry: 'veryRare' }, true);

  const getDestinations = SnapchatWebpack.accessSnapchatStore('messaging->getMessageDestinations');
  const result = await getDestinations([userId], [], []);
  assert$(3, result.conversations.length > 0, '', { sentry: 'veryRare' }, true);
  return result.conversations[0].str;
}

export async function _getOpenConversation() {
  const convId = await _getOpenConversationId();
  return getConversation({ conversationId: convId });
}

export async function _getOpenConversationId() {
  const { assert$ } = createAssertionGroup('f0060c');
  const match = location.href.match(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/);
  assert$(1, match, '', { sentry: false }, true);
  return match[0];
}

export async function _getFeedItem({ conversationId }) {
  return SnapchatWebpack.accessSnapchatStore(`messaging->feed->${conversationId}`);
}

export async function _getMappedConversations({ loadAll }) {
  const feedItems = await getFeed({ loadAll });
  const currentUser = getCurrentUser();
  const friendMap = getFriends({ networkFriendMap: {} });

  return Promise.all(feedItems.map(async (feedItem) => {
    await SnapchatWebpack.callSnapchatStore(
      'messaging->fetchConversation',
      idObjectFromUUID(feedItem.conversationId)
    );

    const conversation = getConversation({ conversationId: feedItem.conversationId.str });
    const otherParticipants = feedItem.participants
      ?.filter((p) => p.str !== currentUser.user_id) ?? [];
    const friends = otherParticipants.map((p) => friendMap[p.str]) ?? [];

    return {
      ...conversation,
      feedItem,
      friends,
      displayName: friends.map((f) => f?.display).join(', '),
    };
  }));
}
