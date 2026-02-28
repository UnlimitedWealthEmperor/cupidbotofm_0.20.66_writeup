import { createAssertionGroup } from '../../utils/errors';
import { isOneOfType } from '../../utils/types';
import { cleanFalsy } from '../../utils/objects';
import { ContentScriptBridge } from '../../bridge';
import { sleep } from '../../utils/async';
import SnapchatWebpack from './webpack';
import { FriendType } from './constants';

let cachedFriendMap = null;

export async function acceptFriendRequests({ userIds }) {
  const { assert$ } = createAssertionGroup('2482a8');
  assert$(1, userIds != null, '', { sentry: 'veryRare' }, true);
  assert$(2, Array.isArray(userIds), '', { sentry: 'veryRare' }, true);
  assert$(3, userIds.length > 0, '', { sentry: 'veryRare' }, true);
  assert$(4, userIds.every((id) => isOneOfType(id, 'string')), '', { sentry: 'veryRare' }, true);
  return _handleFriendRequests({ userIds, action: 'accept' });
}

export async function ignoreFriendRequests({ userIds }) {
  const { assert$ } = createAssertionGroup('ea1a4d');
  assert$(1, userIds != null, '', { sentry: 'veryRare' }, true);
  assert$(2, Array.isArray(userIds), '', { sentry: 'veryRare' }, true);
  assert$(3, userIds.length > 0, '', { sentry: 'veryRare' }, true);
  assert$(4, userIds.every((id) => isOneOfType(id, 'string')), '', { sentry: 'veryRare' }, true);
  return _handleFriendRequests({ userIds, action: 'ignore' });
}

export async function syncFriends() {
  return SnapchatWebpack.callSnapchatStore('user->syncFriends');
}

export function getFriendRequests() {
  const { assert$ } = createAssertionGroup('bf5728');

  const filterRequests = (list, includeOutgoing) =>
    list.filter((r) => (r.direction === 'INCOMING' || includeOutgoing) && r.type === FriendType.PENDING && !r.ignored_link);

  const friendRequests = SnapchatWebpack.accessSnapchatStore('user->friendRequests');
  if (friendRequests != null) return filterRequests(friendRequests, false);

  const incoming = SnapchatWebpack.accessSnapchatStore('user->incomingFriendRequests');
  assert$(1, incoming != null, '', { sentry: 'rare' }, true);
  return filterRequests(Array.from(incoming.values()), true);
}

export function getFriends({ networkFriendMap }) {
  const friendMap = networkFriendMap;
  const storeKeys = ['publicUsers', 'incomingFriendRequests', 'mutualOutgoingAndBlockedFriends'];

  for (const key of storeKeys) {
    const users = SnapchatWebpack.accessSnapchatStore(`user->${key}`);
    if (users?.size) {
      users.forEach((user) => {
        const cleaned = cleanFalsy({ ...user }, { allowZero: true });
        const userId = cleaned.user_id?.str;
        if (userId) {
          cleaned.user_id = userId;
          delete cleaned.fidelius_info;
          friendMap[userId] = { ...(friendMap[userId] ?? {}), ...cleaned };
        }
      });
    }
  }

  return friendMap;
}

export async function fetchFriends({ friends_request = {}, iter = 0 }) {
  const { assert$, throw$ } = createAssertionGroup('0e60fc');
  const MAX_PAGES = 30;

  if (cachedFriendMap) return cachedFriendMap;

  const response = await SnapchatWebpack.Http.fetch({
    method: 'POST',
    url: 'https://web.snapchat.com/ami/friends',
    body: JSON.stringify(friends_request),
    headers: { 'Content-Type': 'application/json' },
  });

  assert$(1, response?.ok, '', {
    sentry: 'veryRare',
    networkResponse: response,
  }, true);

  const data = await response.json();
  const cursor = data?.cursor;
  const friends = data?.friends ?? data?.added_friends ?? [];

  const friendMap = {};
  for (const friend of friends) {
    if (friend.user_id) {
      friendMap[friend.user_id] = friend;
    }
  }

  if (cursor && iter < MAX_PAGES) {
    const nextPage = await fetchFriends({
      friends_request: { ...friends_request, cursor },
      iter: iter + 1,
    });
    Object.assign(friendMap, nextPage);
  }

  if (iter === 0) cachedFriendMap = friendMap;
  return friendMap;
}

async function _handleFriendRequests({ userIds, action }) {
  const { assert$, throw$ } = createAssertionGroup('d9c39f');
  const rpcModule = SnapchatWebpack.Rpc();
  assert$(1, rpcModule, '', { sentry: 'rare' }, true);

  const rpcFn = rpcModule.exportsMatched.value;
  const rpcName = action === 'accept' ? 'AddFriends' : 'IgnoreFriends';

  const results = [];
  for (const userId of userIds) {
    try {
      const result = await rpcFn[rpcName]({ user_ids: [{ str: userId }] });
      results.push({ userId, success: true, result });
    } catch (err) {
      results.push({ userId, success: false, error: err.message });
    }
    await sleep(200);
  }

  return results;
}
