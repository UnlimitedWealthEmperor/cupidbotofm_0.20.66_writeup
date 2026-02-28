export const IS_INTERNAL = false;
export const IS_OFM = !IS_INTERNAL && true;
export const IS_DEV_SENTRY_TEST = false;
export const DEV_SENTRY_TEST_KEY = '__devSentryTest';

export const [BRAND_KEY] = 'cupidbotofm'.split('@');
export const BRAND_TYPE = IS_INTERNAL ? 'internal' : 'external';

export const BRAND_CONFIG = {
  name: 'CupidBot OFM',
  description: '#1 bot for OFM funneling',
  icon: 'cupidbotofm.png',
  title: 'CupidBotOFM.ai',
  subtitle: null,
  url: 'https://cupidbotofm.ai',
  email: 'admin@cupidbot.ai',
  telegramURL: 'https://t.me/cupidbotg',
  stripePortal: 'https://billing.stripe.com/p/login/5kA8wx1uwgWQgHmfYY',
  telegramBotUsername: 'CupidBotAdminBot',
};

export const PLATFORMS = (IS_INTERNAL
  ? ['snapchat','discord','gvoice','bumble','tiktok','grindr','tinder','instagram','messenger','whatsapp','reddit','pornhub','linkedin','badoo','telegram','fetlife','x','bluesky']
  : ['snapchat','gvoice','discord','pornhub','tiktok','fetlife','grindr','reddit','whatsapp','x','badoo','telegram','instagram','bumble','bluesky','messenger']
).reduce((map, p) => { map[p] = p; return map; }, {});

export const PLATFORM_LIST = Object.values(PLATFORMS);

export const SOCIAL_PLATFORMS = [
  PLATFORMS.snapchat, PLATFORMS.reddit, PLATFORMS.instagram, PLATFORMS.x,
  PLATFORMS.whatsapp, PLATFORMS.telegram, PLATFORMS.grindr, PLATFORMS.gvoice,
  PLATFORMS.tiktok, PLATFORMS.discord, PLATFORMS.fetlife, PLATFORMS.pornhub,
  PLATFORMS.bluesky,
].filter(Boolean);

export const STORY_PLATFORMS = [PLATFORMS.snapchat, PLATFORMS.instagram].filter(Boolean);

export const SOCIAL_PLATFORM_SET = new Set(SOCIAL_PLATFORMS);

export const CONTACT_TYPES = [
  { value: 'number', label: 'Phone number' },
  { value: 'whatsapp', label: 'WhatsApp' },
  { value: 'instagram', label: 'Instagram' },
  { value: 'snapchat', label: 'Snapchat' },
  { value: 'twitter', label: 'Twitter' },
  { value: 'telegram', label: 'Telegram' },
  { value: 'wechat', label: 'WeChat' },
  { value: 'email', label: 'Email' },
  { value: 'onlyfans', label: 'OnlyFans' },
].filter(Boolean);

export const LANGUAGES = {
  aa:'Afar',ab:'Abkhazian',af:'Afrikaans',ak:'Akan',sq:'Albanian',am:'Amharic',ar:'Arabic',
  an:'Aragonese',hy:'Armenian',as:'Assamese',av:'Avaric',ae:'Avestan',ay:'Aymara',az:'Azerbaijani',
  ba:'Bashkir',bm:'Bambara',eu:'Basque',be:'Belarusian',bn:'Bengali',bh:'Bihari',bi:'Bislama',
  bo:'Tibetan',bs:'Bosnian',br:'Breton',bg:'Bulgarian',my:'Burmese',ca:'Catalan',cs:'Czech',
  ch:'Chamorro',ce:'Chechen',zh:'Chinese',cu:'Church',cv:'Chuvash',kw:'Cornish',co:'Corsican',
  cr:'Cree',cy:'Welsh',da:'Danish',de:'German',dv:'Divehi',nl:'Dutch',dz:'Dzongkha',el:'Greek',
  en:'English',eo:'Esperanto',et:'Estonian',ee:'Ewe',fo:'Faroese',fa:'Persian',fj:'Fijian',
  fi:'Finnish',fr:'French',fy:'Western',ff:'Fulah',Ga:'Georgian',gd:'Gaelic',ga:'Irish',
  gl:'Galician',gv:'Manx',gn:'Guarani',gu:'Gujarati',ht:'Haitian',ha:'Hausa',he:'Hebrew',
  hz:'Herero',hi:'Hindi',ho:'Hiri',hr:'Croatian',hu:'Hungarian',ig:'Igbo',is:'Icelandic',
  io:'Ido',ii:'Sichuan',iu:'Inuktitut',ie:'Interlingue',ia:'Interlingua',id:'Indonesian',
  ik:'Inupiaq',it:'Italian',jv:'Javanese',ja:'Japanese',kl:'Kalaallisut',kn:'Kannada',
  ks:'Kashmiri',kr:'Kanuri',kk:'Kazakh',km:'Central',ki:'Kikuyu',rw:'Kinyarwanda',ky:'Kirghiz',
  kv:'Komi',kg:'Kongo',ko:'Korean',kj:'Kuanyama',ku:'Kurdish',lo:'Lao',la:'Latin',lv:'Latvian',
  li:'Limburgan',ln:'Lingala',lt:'Lithuanian',lb:'Luxembourgish',lu:'Luba-Katanga',lg:'Ganda',
  mk:'Macedonian',mh:'Marshallese',ml:'Malayalam',mi:'Maori',mr:'Marathi',ms:'Malay',Mi:'Micmac',
  mg:'Malagasy',mt:'Maltese',mn:'Mongolian',na:'Nauru',nv:'Navajo',nr:'Ndebele',ng:'Ndonga',
  ne:'Nepali',nn:'Norwegian',nb:'Bokmål',oc:'Occitan',oj:'Ojibwa',or:'Oriya',om:'Oromo',
  os:'Ossetian',pa:'Panjabi',pi:'Pali',pl:'Polish',pt:'Portuguese',ps:'Pushto',qu:'Quechua',
  rm:'Romansh',ro:'Romanian',rn:'Rundi',ru:'Russian',sg:'Sango',sa:'Sanskrit',si:'Sinhala',
  sk:'Slovak',sl:'Slovenian',se:'Northern',sm:'Samoan',sn:'Shona',sd:'Sindhi',so:'Somali',
  st:'Sotho',es:'Spanish',sc:'Sardinian',sr:'Serbian',ss:'Swati',su:'Sundanese',sw:'Swahili',
  sv:'Swedish',ty:'Tahitian',ta:'Tamil',tt:'Tatar',te:'Telugu',tg:'Tajik',tl:'Tagalog',th:'Thai',
  ti:'Tigrinya',to:'Tonga',tn:'Tswana',ts:'Tsonga',tk:'Turkmen',tr:'Turkish',tw:'Twi',ug:'Uighur',
  uk:'Ukrainian',ur:'Urdu',uz:'Uzbek',ve:'Venda',vi:'Vietnamese',vo:'Volapük',wa:'Walloon',
  wo:'Wolof',xh:'Xhosa',yi:'Yiddish',yo:'Yoruba',za:'Zhuang',zu:'Zulu',
};

export const LANGUAGE_OPTIONS = Object.entries(LANGUAGES).map(([value, label]) => ({ value, label }));

export const INTERNAL_PREFIX = 'int';
export const ERROR_MARKER = '$int-3db5d2';

export const EVENTS = {
  evalCode: 'int-6ce9e33c27',
  beginTask: 'int-8ba144',
  backgroundFetch: 'int-62cabd7e',
  globalErrorCapture: 'int-a3f7c1',
  sentryCapture: 'int-8fq7h34',
  sentryDebugId: 'int-7d4e2f9b',
};

export const SENTRY_LEVELS = {
  fatal: 'fatal',
  error: 'error',
  warning: 'warning',
  log: 'log',
  info: 'info',
  debug: 'debug',
};

export const SENTRY_CONTEXTS = {
  bg: 'bg',
  ui: 'ui',
  pre: 'pre',
  loop: 'loop',
  sdk: 'sdk',
  sdk_global: 'sdk_global',
};

export const STORAGE_KEYS = {
  currentContentScript: 'currentContentScript',
  pendingContentScript: 'pendingContentScript',
  currentPopupScript: 'currentPopupScript',
  pendingPopupScript: 'pendingPopupScript',
  currentInjectedScript: 'currentInjectedScript',
  pendingInjectedScript: 'pendingInjectedScript',
};

export const SENTRY_ASYNC_BOUNDARY = '\n\n[SENTRY_ASYNC_BOUNDARY_SCHEDULED_AT]\n';
