import * as users from './users';
import * as friends from './friends';
import * as conversations from './conversations';
import * as messages from './messages';
import * as presence from './presence';
import * as stories from './stories';
import { applySnapchatPatches } from './patches';

export default {
  ...users,
  ...friends,
  ...conversations,
  ...messages,
  ...presence,
  ...stories,
  applySnapchatPatches,

  init: async () => await applySnapchatPatches(),
  async hasLoaded() {
    try {
      const feed = Object.values(
        (await import('./webpack')).default.accessSnapchatStore('messaging->feed') ?? {}
      );
      const hasClient = !!(await import('./webpack')).default.accessSnapchatStore('talk->client');
      return !!feed.length && hasClient;
    } catch { return false; }
  },
};
