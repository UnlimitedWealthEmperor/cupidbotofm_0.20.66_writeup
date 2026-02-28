/**
 * Tab management - queries, creates, restarts platform tabs.
 */

import { PLATFORM_CONFIGS } from './platforms.js';

/**
 * Queries tabs matching the platform's app domain.
 * @param {string} app - Platform identifier
 * @returns {Promise<chrome.tabs.Tab[]>}
 */
export async function getAppTabs(app) {
  const config = PLATFORM_CONFIGS[app];
  if (!config) return [];

  const tabs = await chrome.tabs.query({
    url: [`*://${config.appDomain}/*`, `*://*.${config.appDomain}/*`],
  });

  return tabs.filter((tab) => {
    if (!tab.url) return false;
    const url = new URL(tab.url);
    const pathMatches =
      config.excluded.length === 0 ||
      !config.excluded.some((excl) => url.pathname.startsWith(excl));
    return pathMatches;
  });
}

/**
 * Creates a new tab for the app or navigates an existing one to the restart URL.
 * @param {string} app
 * @returns {Promise<chrome.tabs.Tab>}
 */
export async function createOrRestartTab(app) {
  const config = PLATFORM_CONFIGS[app];
  if (!config) throw new Error(`Unknown app: ${app}`);

  const tabs = await getAppTabs(app);
  if (tabs.length > 0) {
    const tab = tabs[0];
    await chrome.tabs.update(tab.id, { url: config.restartURL, active: true });
    return tab;
  }

  return chrome.tabs.create({ url: config.restartURL });
}

/**
 * Closes all tabs for an app and opens a fresh one.
 * @param {string} app
 * @returns {Promise<chrome.tabs.Tab>}
 */
export async function clearAndRestartTabs(app) {
  const tabs = await getAppTabs(app);
  for (const tab of tabs) {
    try {
      await chrome.tabs.remove(tab.id);
    } catch {
      // Tab may already be closed
    }
  }
  return createOrRestartTab(app);
}

/**
 * Checks for crashed tabs and restarts the app if needed.
 * @returns {Promise<boolean>} True if any app was restarted
 */
export async function restartCrashedApps() {
  const apps = Object.keys(PLATFORM_CONFIGS);
  let anyRestarted = false;

  for (const app of apps) {
    const tabs = await getAppTabs(app);
    const allCrashed =
      tabs.length > 0 && tabs.every((t) => t.status === 'unloaded' || t.id == null);
    if (allCrashed) {
      try {
        await clearAndRestartTabs(app);
        anyRestarted = true;
      } catch (e) {
        console.warn(`Failed to restart ${app}:`, e);
      }
    }
  }
  return anyRestarted;
}
