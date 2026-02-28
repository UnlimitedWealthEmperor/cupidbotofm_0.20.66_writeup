import { createAssertionGroup } from '../../utils/errors';
import SnapchatWebpack from './webpack';

export function getCurrentUser() {
  const { assert$ } = createAssertionGroup('8794db');
  const auth = SnapchatWebpack.accessSnapchatStore('auth');
  const userId = auth.userId;
  const me = auth.me;

  assert$(1, userId, '', { extra: { auth, userId }, sentry: 'veryRare' }, true);
  assert$(2, me, '', { extra: { auth, userId }, sentry: 'veryRare' }, true);
  assert$(3, me.username, '', { extra: { auth }, sentry: 'veryRare' }, true);

  return {
    user_id: userId,
    username: me.username,
    mutable_username: me.mutableUsername,
    display_name: me.displayName,
    bitmoji_avatar_id: me.bitmojiAvatarId,
    bitmoji_selfie_id: me.bitmojiSelfieId,
    birthdate: me.birthdate,
  };
}

export function getCurrentUserId() {
  return getCurrentUser().user_id;
}
