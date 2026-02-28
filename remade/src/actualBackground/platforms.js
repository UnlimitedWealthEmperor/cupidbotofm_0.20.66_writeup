/**
 * Platform configurations for supported social/chat applications.
 * Each config defines app domain, chat domain, restart URL, and excluded paths.
 */
export const PLATFORM_CONFIGS = {
  snapchat: {
    appDomain: 'web.snapchat.com',
    chatDomain: 'web.snapchat.com',
    restartURL: 'https://web.snapchat.com',
    excluded: ['/accounts'],
  },
  instagram: {
    appDomain: 'www.instagram.com',
    chatDomain: 'www.instagram.com',
    restartURL: 'https://www.instagram.com/direct/inbox/',
    excluded: ['/accounts', '/challenge'],
  },
  x: {
    appDomain: 'x.com',
    chatDomain: 'x.com',
    restartURL: 'https://x.com/messages',
    excluded: ['/login', '/i/flow'],
  },
  reddit: {
    appDomain: 'www.reddit.com',
    chatDomain: 'chat.reddit.com',
    restartURL: 'https://www.reddit.com',
    excluded: ['/login'],
  },
  whatsapp: {
    appDomain: 'web.whatsapp.com',
    chatDomain: 'web.whatsapp.com',
    restartURL: 'https://web.whatsapp.com',
    excluded: [],
  },
  telegram: {
    appDomain: 'web.telegram.org',
    chatDomain: 'web.telegram.org',
    restartURL: 'https://web.telegram.org',
    excluded: [],
  },
  tinder: {
    appDomain: 'tinder.com',
    chatDomain: 'tinder.com',
    restartURL: 'https://tinder.com/app/recs',
    excluded: ['/login'],
  },
  bumble: {
    appDomain: 'bumble.com',
    chatDomain: 'bumble.com',
    restartURL: 'https://bumble.com/app',
    excluded: [],
  },
  badoo: {
    appDomain: 'badoo.com',
    chatDomain: 'badoo.com',
    restartURL: 'https://badoo.com/encounters',
    excluded: [],
  },
  grindr: {
    appDomain: 'grindr.com',
    chatDomain: 'grindr.com',
    restartURL: 'https://grindr.com',
    excluded: [],
  },
  discord: {
    appDomain: 'discord.com',
    chatDomain: 'discord.com',
    restartURL: 'https://discord.com/channels/@me',
    excluded: ['/login'],
  },
  tiktok: {
    appDomain: 'www.tiktok.com',
    chatDomain: 'www.tiktok.com',
    restartURL: 'https://www.tiktok.com/messages',
    excluded: ['/login'],
  },
  fetlife: {
    appDomain: 'fetlife.com',
    chatDomain: 'fetlife.com',
    restartURL: 'https://fetlife.com/conversations',
    excluded: [],
  },
  pornhub: {
    appDomain: 'www.pornhub.com',
    chatDomain: 'www.pornhub.com',
    restartURL: 'https://www.pornhub.com',
    excluded: [],
  },
  bluesky: {
    appDomain: 'bsky.app',
    chatDomain: 'bsky.app',
    restartURL: 'https://bsky.app',
    excluded: [],
  },
  messenger: {
    appDomain: 'www.messenger.com',
    chatDomain: 'www.messenger.com',
    restartURL: 'https://www.messenger.com',
    excluded: ['/login'],
  },
  linkedin: {
    appDomain: 'www.linkedin.com',
    chatDomain: 'www.linkedin.com',
    restartURL: 'https://www.linkedin.com/messaging/',
    excluded: ['/login'],
  },
  gvoice: {
    appDomain: 'voice.google.com',
    chatDomain: 'voice.google.com',
    restartURL: 'https://voice.google.com/u/0/messages',
    excluded: [],
  },
};
