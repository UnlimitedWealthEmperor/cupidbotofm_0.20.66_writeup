import { IS_AIR } from '../shared/branding';
import { isExtensionContext, isInPopupIframe } from './platformDetect';
import { setupCrashCheck, setupMessageBridge } from './messaging';
import {
  loadAndInjectPopupScripts,
  loadAndInjectContentScriptDynamic,
  loadAndInjectInjectedScript,
} from './scriptInjection';

async function injectWorkerScript() {
  const scriptId = 'int-worker-script';
  if (document.getElementById(scriptId)) return;

  const scriptEl = document.createElement('script');
  scriptEl.src = chrome.runtime.getURL('r.js');
  scriptEl.id = scriptId;
  (document.head || document.documentElement).appendChild(scriptEl);

  await new Promise((resolve) => {
    scriptEl.onload = () => resolve(1);
    scriptEl.onerror = () => resolve(1);
  });
}

setupCrashCheck();

(async function initializeContentScript() {
  if (!isExtensionContext()) return;

  await injectWorkerScript();
  setupMessageBridge();

  await loadAndInjectInjectedScript(IS_AIR);
  await loadAndInjectContentScriptDynamic(IS_AIR);
  await loadAndInjectPopupScripts(IS_AIR);
})();
