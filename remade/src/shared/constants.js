import { IS_DEV } from './branding';

export const PLATFORMS = (IS_DEV
  ? ['snapchat', 'discord', 'gvoice', 'bumble', 'tiktok', 'grindr', 'tinder', 'instagram', 'messenger', 'whatsapp', 'reddit', 'pornhub', 'linkedin', 'badoo', 'telegram', 'fetlife', 'x', 'bluesky']
  : ['snapchat', 'gvoice', 'discord', 'pornhub', 'tiktok', 'fetlife', 'grindr', 'reddit', 'whatsapp', 'x', 'badoo', 'telegram', 'instagram', 'bumble', 'bluesky', 'messenger']
).reduce((acc, p) => { acc[p] = p; return acc; }, {});

export const PLATFORM_LIST = Object.values(PLATFORMS);

export const CHAT_PLATFORMS = [
  PLATFORMS.snapchat, PLATFORMS.reddit, PLATFORMS.instagram, PLATFORMS.x,
  PLATFORMS.whatsapp, PLATFORMS.telegram, PLATFORMS.grindr, PLATFORMS.gvoice,
  PLATFORMS.tiktok, PLATFORMS.discord, PLATFORMS.fetlife, PLATFORMS.pornhub,
  PLATFORMS.bluesky,
].filter(Boolean);

export const MEDIA_PLATFORMS = [
  PLATFORMS.snapchat, PLATFORMS.instagram,
].filter(Boolean);

export const CHAT_PLATFORMS_SET = new Set(CHAT_PLATFORMS);

export const SENTRY_ENABLED_SCRIPTS = [
  'background', 'snapchat', 'instagram', 'discord', 'reddit',
  'gvoice', 'telegram', 'bluesky', 'whatsapp', 'x',
];

export const PLATFORM_CHAT_URLS = {
  snapchat:  'https://www.snapchat.com/web',
  instagram: 'https://www.instagram.com/direct/inbox',
  x:         'https://x.com/i/chat',
  reddit:    'https://reddit.com/chat',
  gvoice:    'https://voice.google.com/u/0/messages',
  telegram:  'https://web.telegram.org/a',
  whatsapp:  'https://web.whatsapp.com',
  discord:   'https://discord.com/channels/@me',
  tiktok:    'https://tiktok.com/messages',
  grindr:    'https://web.grindr.com/chat',
  badoo:     'https://badoo.com/connections',
  fetlife:   'https://fetlife.com/inbox',
  pornhub:   'https://www.pornhub.com/chat/index',
  bluesky:   'https://bsky.app/messages',
  bumble:    'https://bumble.com/app',
  tinder:    'https://tinder.com/app',
  linkedin:  'http://linkedin.com/hiring/applicants/?rating=GOOD_FIT&jobId=4324561813',
};

export const PLATFORM_EXCLUDED_URLS = {
  snapchat: ['/accounts/login', '/accounts/challenge'],
  instagram: ['/accounts/login', '/accounts/challenge', '/accounts/suspended'],
};

export const SUBSCRIPTION_PRODUCTS = {
  'ofm-da': 'ofm-da',
  'ofm-da-swiper': 'ofm-da-swiper',
  'ofm-webcam': 'ofm-webcam',
  'ofm-snap': 'ofm-snap',
  'ofm-reddit': 'ofm-reddit',
  'ofm-ig': 'ofm-ig',
  'ofm-x': 'ofm-x',
  'ofm-wa': 'ofm-wa',
  'ofm-tg': 'ofm-tg',
  'ofm-grindr': 'ofm-grindr',
  'ofm-gvoice': 'ofm-gvoice',
  'ofm-tiktok': 'ofm-tiktok',
  'ofm-discord': 'ofm-discord',
  'ofm-fetlife': 'ofm-fetlife',
  'ofm-pornhub': 'ofm-pornhub',
  'ofm-bluesky': 'ofm-bluesky',
};

export const CONTACT_METHOD_OPTIONS = [
  { value: 'number', label: 'Phone number' },
  { value: 'whatsapp', label: 'WhatsApp' },
  { value: 'instagram', label: 'Instagram' },
  { value: 'snapchat', label: 'Snapchat' },
  { value: 'twitter', label: 'Twitter' },
  { value: 'telegram', label: 'Telegram' },
  { value: 'wechat', label: 'WeChat' },
  { value: 'email', label: 'Email' },
  { value: 'onlyfans', label: 'OnlyFans' },
];

export const LANGUAGES = Object.entries({
  aa: 'Afar', ab: 'Abkhazian', af: 'Afrikaans', ak: 'Akan', sq: 'Albanian',
  am: 'Amharic', ar: 'Arabic', an: 'Aragonese', hy: 'Armenian', as: 'Assamese',
  av: 'Avaric', ae: 'Avestan', ay: 'Aymara', az: 'Azerbaijani', ba: 'Bashkir',
  bm: 'Bambara', eu: 'Basque', be: 'Belarusian', bn: 'Bengali', bh: 'Bihari',
  bi: 'Bislama', bo: 'Tibetan', bs: 'Bosnian', br: 'Breton', bg: 'Bulgarian',
  my: 'Burmese', ca: 'Catalan', cs: 'Czech', ch: 'Chamorro', ce: 'Chechen',
  zh: 'Chinese', cu: 'Church', cv: 'Chuvash', kw: 'Cornish', co: 'Corsican',
  cr: 'Cree', cy: 'Welsh', da: 'Danish', de: 'German', dv: 'Divehi',
  nl: 'Dutch', dz: 'Dzongkha', el: 'Greek', en: 'English', eo: 'Esperanto',
  et: 'Estonian', ee: 'Ewe', fo: 'Faroese', fa: 'Persian', fj: 'Fijian',
  fi: 'Finnish', fr: 'French', fy: 'Western', ff: 'Fulah', Ga: 'Georgian',
  gd: 'Gaelic', ga: 'Irish', gl: 'Galician', gv: 'Manx', gn: 'Guarani',
  gu: 'Gujarati', ht: 'Haitian', ha: 'Hausa', he: 'Hebrew', hz: 'Herero',
  hi: 'Hindi', ho: 'Hiri', hr: 'Croatian', hu: 'Hungarian', ig: 'Igbo',
  is: 'Icelandic', io: 'Ido', ii: 'Sichuan', iu: 'Inuktitut', ie: 'Interlingue',
  ia: 'Interlingua', id: 'Indonesian', ik: 'Inupiaq', it: 'Italian', jv: 'Javanese',
  ja: 'Japanese', kl: 'Kalaallisut', kn: 'Kannada', ks: 'Kashmiri', kr: 'Kanuri',
  kk: 'Kazakh', km: 'Central', ki: 'Kikuyu', rw: 'Kinyarwanda', ky: 'Kirghiz',
  kv: 'Komi', kg: 'Kongo', ko: 'Korean', kj: 'Kuanyama', ku: 'Kurdish',
  lo: 'Lao', la: 'Latin', lv: 'Latvian', li: 'Limburgan', ln: 'Lingala',
  lt: 'Lithuanian', lb: 'Luxembourgish', lu: 'Luba-Katanga', lg: 'Ganda',
  mk: 'Macedonian', mh: 'Marshallese', ml: 'Malayalam', mi: 'Maori', mr: 'Marathi',
  ms: 'Malay', Mi: 'Micmac', mg: 'Malagasy', mt: 'Maltese', mn: 'Mongolian',
  na: 'Nauru', nv: 'Navajo', nr: 'Ndebele', ng: 'Ndonga', ne: 'Nepali',
  nn: 'Norwegian', nb: 'Bokm\xE5l', oc: 'Occitan', oj: 'Ojibwa', or: 'Oriya',
  om: 'Oromo', os: 'Ossetian', pa: 'Panjabi', pi: 'Pali', pl: 'Polish',
  pt: 'Portuguese', ps: 'Pushto', qu: 'Quechua', rm: 'Romansh', ro: 'Romanian',
  rn: 'Rundi', ru: 'Russian', sg: 'Sango', sa: 'Sanskrit', si: 'Sinhala',
  sk: 'Slovak', sl: 'Slovenian', se: 'Northern', sm: 'Samoan', sn: 'Shona',
  sd: 'Sindhi', so: 'Somali', st: 'Sotho', es: 'Spanish', sc: 'Sardinian',
  sr: 'Serbian', ss: 'Swati', su: 'Sundanese', sw: 'Swahili', sv: 'Swedish',
  ty: 'Tahitian', ta: 'Tamil', tt: 'Tatar', te: 'Telugu', tg: 'Tajik',
  tl: 'Tagalog', th: 'Thai', ti: 'Tigrinya', to: 'Tonga', tn: 'Tswana',
  ts: 'Tsonga', tk: 'Turkmen', tr: 'Turkish', tw: 'Twi', ug: 'Uighur',
  uk: 'Ukrainian', ur: 'Urdu', uz: 'Uzbek', ve: 'Venda', vi: 'Vietnamese',
  vo: 'Volap\xFCk', wa: 'Walloon', wo: 'Wolof', xh: 'Xhosa', yi: 'Yiddish',
  yo: 'Yoruba', za: 'Zhuang', zu: 'Zulu',
}).map(([code, name]) => ({ value: code, label: name }));

export const PLATFORM_OPTIONS = PLATFORM_LIST.map(p => ({
  value: p,
  label: p.charAt(0).toUpperCase() + p.slice(1),
})).concat([{ value: 'all', label: 'All' }]);

export const INTERNAL_EVENTS = {
  evalCode: 'int-6ce9e33c27',
  beginTask: 'int-8ba144',
  backgroundFetch: 'int-62cabd7e',
  globalErrorCapture: 'int-a3f7c1',
  sentryCapture: 'int-8fq7h34',
  sentryDebugId: 'int-7d4e2f9b',
};

export const NETWORK_TIMEOUT_MS = 60000;
export const MAX_APP_LOG_SIZE = 2 * 1024 * 1024; // 2MB
export const VERSION_CHECK_INTERVAL_MIN = 60;
export const BACKGROUND_RUN_INTERVAL_MIN = 0.5;
