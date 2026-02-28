export const IS_DEV = false;
export const IS_AIR = false;
export const BRAND_ID = 'rusocial';

export const BRAND_CONFIG = {
  name: 'RUSocial',
  description: 'Professional Social Media Services',
  icon: 'rusocial.png',
  title: 'RUSocial',
  subtitle: null,
  url: 'https://rusocial.io/purchase.html',
  email: null,
  telegramURL: 'https://t.me/rusocial_io',
  discordURL: 'https://discord.gg/rusocial',
  stripePortal: 'https://billing.stripe.com/p/login/5kA8wx1uwgWQgHmfYY',
  telegramBotUsername: null,
};

// PATCHED: Point to localhost to prevent any calls to original backend
export const API_BASE_URL = 'http://localhost:9999';

export const POPUP_IFRAME_URL = 'popup-app.html';

// PATCHED: Sentry disabled - no telemetry sent to original developers
export const SENTRY_DSN = null;

export const SENTRY_RELEASE = '0.20.78';

export const BRAND_NAME = BRAND_CONFIG.name;
export const DISCORD_URL = BRAND_CONFIG.discordURL;
export const TELEGRAM_URL = BRAND_CONFIG.telegramURL;
export const WEBSITE_URL = BRAND_CONFIG.url;
export const STRIPE_PORTAL_URL = BRAND_CONFIG.stripePortal;

export const RSA_PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAto2YkWPif1tYcWYrNX+k
SPZhSbqFu+oo52iekXhCFVKAlQdj4VZTE2kyIp4dPeCBqebX5vIyoJIA8o5FMtPo
UNgAYUsSGREp1int4P7FjPSeuzV7KtUw6kCz5VLlb6I5vJkD7bAu0ymU3yg3H9FB
RYkfBqZzUpcGIcKVficlgN15aFFUr5OsT6GeZ9xZdK8BcNqK3kTh7zX5iSLeM5UA
fJxWiWt+hBci3szW+xx2TAbWg8qeh06BNIhDWZhd/O4QF8Pq5ud5UBsa/WtS4O8t
ZZYXtGc3LF1kWgTjYjQo6KEKTgO/lG0qL2ho1MqFsKwbikCU8av9Adw4W7PxAP9E
mwIDAQAB
-----END PUBLIC KEY-----`;
