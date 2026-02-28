/**
 * Crash detection and recovery - periodic health checks and duplicate tab cleanup.
 */

import { PLATFORM_CONFIGS } from './platforms.js';
import { getAppTabs, clearAndRestartTabs } from './tabManager.js';

const CRASH_CHECK_INTERVAL_MS = 30000;
const HEALTH_CHECK_TIMEOUT_MS = 5000;
let crashDetectionInterval = null;

/**
 * Sends a crash-check ping to the content script and awaits response.
 * @param {number} tabId
 * @returns {Promise<boolean>} True if tab responded healthy
 */
export async function checkTabHealth(tabId) {
  return new Promise((resolve) => {
    const timeout = setTimeout(() => resolve(false), HEALTH_CHECK_TIMEOUT_MS);
    chrome.tabs.sendMessage(tabId, { type: 'crashCheck' }, (response) => {
      clearTimeout(timeout);
      resolve(chrome.runtime.lastError == null && response?.healthy === true);
    });
  });
}

/**
 * Finds duplicate tabs for the same app and removes extras.
 * @returns {Promise<number>} Number of duplicate tabs closed
 */
export async function detectDuplicateTabs() {
  let closed = 0;
  for (const app of Object.keys(PLATFORM_CONFIGS)) {
    const tabs = await getAppTabs(app);
    if (tabs.length > 1) {
      const [keep, ...duplicates] = tabs;
      for (const tab of duplicates) {
        try {
          await chrome.tabs.remove(tab.id);
          closed++;
        } catch {
          // Ignore
        }
      }
    }
  }
  return closed;
}

/**
 * Restarts a crashed app by clearing its tabs and opening a fresh one.
 * @param {string} app
 * @returns {Promise<chrome.tabs.Tab>}
 */
export async function restartCrashed(app) {
  return clearAndRestartTabs(app);
}

/**
 * Runs the main crash detection loop - checks all platform tabs for health.
 */
export async function runCrashDetection() {
  for (const app of Object.keys(PLATFORM_CONFIGS)) {
    const tabs = await getAppTabs(app);
    const healthy = await Promise.all(tabs.map((t) => checkTabHealth(t.id)));
    const allUnhealthy = tabs.length > 0 && healthy.every((h) => !h);

    if (allUnhealthy) {
      try {
        await restartCrashed(app);
      } catch (e) {
        console.warn(`Crash recovery failed for ${app}:`, e);
      }
    }
  }

  await detectDuplicateTabs();
}

/**
 * Starts the periodic crash detection loop.
 */
export function runCrashDetectionLoop() {
  if (crashDetectionInterval) return;

  runCrashDetection();
  crashDetectionInterval = setInterval(runCrashDetection, CRASH_CHECK_INTERVAL_MS);
}

/**
 * Stops the crash detection loop.
 */
export function stopCrashDetectionLoop() {
  if (crashDetectionInterval) {
    clearInterval(crashDetectionInterval);
    crashDetectionInterval = null;
  }
}
