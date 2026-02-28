import { PLATFORM_CHAT_URLS, PLATFORMS } from '../shared/constants';

const PLATFORM_CONFIGS = Object.entries(PLATFORM_CHAT_URLS).map(([app, url]) => {
  const domain = new URL(url).hostname.replace('www.', '');
  return { app, appDomain: domain, chatUrl: url };
});

export function detectPlatformFromUrl(href) {
  if (!href) return null;
  for (const cfg of PLATFORM_CONFIGS) {
    if (href.includes(cfg.appDomain)) return cfg.app;
  }
  return null;
}

export function getCurrentApp() {
  return detectPlatformFromUrl(window.location.href);
}

export function isInPopupIframe() {
  try {
    const href = window.location.href;
    const isPopupPage = href.includes('popup-app.html') && href.startsWith('chrome-extension://');
    return isPopupPage && window.top !== window;
  } catch {
    return false;
  }
}

export function manifestVersion() {
  try {
    return chrome.runtime.getManifest().version;
  } catch {
    return null;
  }
}

export function isExtensionContext() {
  return manifestVersion() !== null && chrome.runtime.sendMessage.toString().includes('native');
}
