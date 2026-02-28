import { logWarning, logError } from './utils';

let deafStrikes = 0;

export async function watchForChromiumDeafBug() {
  const isDeaf = await new Promise((resolve) => {
    let eventFired = true;

    const listener = () => { eventFired = false; };

    chrome.storage.local.onChanged.addListener(listener);
    chrome.storage.local.set({ testEventDispatching: Math.random() }, () => {
      const error = chrome.runtime.lastError;
      if (error) {
        logError('storage.local.set failed - possibly storage full (not Chrome issue 40834197)', { error });
      }
    });

    setTimeout(() => {
      chrome.storage.local.onChanged.removeListener(listener);
      resolve(eventFired);
    }, 5000);
  });

  if (isDeaf) {
    deafStrikes += 1;
    logWarning('Chromium Issue 40834197 detected', { DEAF_STRIKES: deafStrikes });
    if (deafStrikes >= 3) {
      logError('Chromium Issue 40834197 MAX_DEAF_STRIKES reached, reloading extension');
      chrome.runtime.reload();
    }
  } else {
    deafStrikes = 0;
  }

  setTimeout(watchForChromiumDeafBug, 10000);
}

export async function checkBrowserVersion() {
  const result = await chrome.storage.local.get({ keyThatWillNeverExist: 8008 });
  if (result?.keyThatWillNeverExist !== 8008) {
    console.error('BROWSER VERSION IS TOO OLD, PLEASE UPDATE');
    return false;
  }
  return true;
}
