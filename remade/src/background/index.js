import { IS_DEV, IS_AIR, API_BASE_URL } from '../shared/branding';
import { logInfo, logError } from './utils';
import { runBackgroundScript, checkAndUpdateScriptVersions } from './scriptLoader';
import { watchForChromiumDeafBug, checkBrowserVersion } from './chromiumBugFix';
import { validateApiUrl } from './api';

const VERSION_CHECK_INTERVAL = IS_DEV ? 0.5 : 60; // minutes
const BG_RUN_INTERVAL = 0.5; // minutes

logInfo('Background static loaded');

if (!validateApiUrl(API_BASE_URL)) {
  console.log('API URL validation failed');
}

chrome.alarms.create('checkVersionUpdate', { periodInMinutes: VERSION_CHECK_INTERVAL });
checkAndUpdateScriptVersions();

chrome.alarms.create('runBackgroundScript', { periodInMinutes: BG_RUN_INTERVAL });
runBackgroundScript(false);

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'checkVersionUpdate') {
    checkAndUpdateScriptVersions();
  } else if (alarm.name === 'runBackgroundScript') {
    runBackgroundScript(true);
  }
});

checkBrowserVersion();
watchForChromiumDeafBug();
