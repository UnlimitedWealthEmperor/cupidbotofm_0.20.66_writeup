import { PLATFORMS } from '../shared/constants';
import { getCurrentApp } from './platformDetect';
import { getStorageValue, setStorageValue } from './storage';
import { API_BASE_URL } from '../shared/branding';

let excludedConversationsCache = null;

async function apiFetchFromContent(endpoint, method, appId, data = {}) {
  return await chrome.runtime.sendMessage({
    action: 'fetch',
    url: `${API_BASE_URL}/api/${endpoint}`,
    options: { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) },
  });
}

export async function getExcludedConversations() {
  const appId = getCurrentApp();

  let needsRefresh = false;
  const lastFetch = await getStorageValue(appId + 'LastExcludedConversationsFetch');
  if (lastFetch && Date.now() - lastFetch > 43200000) needsRefresh = true;

  if (excludedConversationsCache && !needsRefresh) return excludedConversationsCache;

  const cached = await getStorageValue(appId + 'ExcludedConversationIDS');
  if (cached && !needsRefresh) {
    excludedConversationsCache = new Set(cached);
    return excludedConversationsCache;
  }

  await setStorageValue(appId + 'LastExcludedConversationsFetch', Date.now());

  try {
    const result = await apiFetchFromContent('getExcludedConversations', 'GET', appId);
    if (result?.excludedAccountIDS) {
      await setStorageValue(appId + 'ExcludedConversationIDS', result.excludedAccountIDS);
      excludedConversationsCache = new Set(result.excludedAccountIDS);
      return excludedConversationsCache;
    }
  } catch (err) {
    return new Set();
  }

  return new Set();
}

export async function toggleExcludeConversation(recipientID) {
  const appId = getCurrentApp();
  const excludedSet = await getExcludedConversations();
  const isExcluded = !excludedSet.has(recipientID);

  if (isExcluded) excludedSet.add(recipientID);
  else excludedSet.delete(recipientID);

  await setStorageValue(appId + 'ExcludedConversationIDS', Array.from(excludedSet));
  await renderExcludeButtons();

  apiFetchFromContent('updateExcludedConversation', 'POST', appId, { recipientID, isExcluded })
    .catch((err) => console.log('ERROR: updateExcludedConversation failed', err));
}

export async function isConvertedAccount(recipientID) {
  const appId = getCurrentApp();
  const converted = await getStorageValue(appId + 'ConvertedAccounts', []);
  return converted?.includes(recipientID) ?? false;
}

export async function checkIntervention(recipientID, messages = []) {
  const appId = getCurrentApp();
  const interventions = await getStorageValue(appId + 'Interventions', {});
  const intervention = interventions[recipientID];

  if (!intervention || intervention.permanent) return { hasIntervention: false };

  if (!intervention.lastMessageID && messages.length === 0) return { hasIntervention: false };

  if (intervention.lastMessageID && messages.length > 0) {
    if (intervention.lastMessageID === messages[messages.length - 1].id) {
      const settings = await getStorageValue(appId + 'Settings', {});
      if (intervention.conversionAttempts != null &&
          intervention.conversionAttempts < (settings.maxConversionAttempts || 3)) {
        delete interventions[recipientID];
        await setStorageValue(appId + 'Interventions', interventions);
        return { hasIntervention: false };
      }
      return { hasIntervention: true, category: intervention.category };
    }
    delete interventions[recipientID];
    await setStorageValue(appId + 'Interventions', interventions);
    return { hasIntervention: false };
  }

  return { hasIntervention: false };
}

async function getConversationElements(appId, timeout = 0) {
  if (appId === PLATFORMS.bumble) {
    if (timeout) await waitForElement('.contact', timeout);
    return document.getElementsByClassName('contact');
  }
  if (appId === PLATFORMS.tinder) {
    if (timeout) await waitForElement('.messageListItem', timeout);
    return document.getElementsByClassName('messageListItem');
  }
  return [];
}

function waitForElement(selector, timeout) {
  return new Promise((resolve) => {
    const el = document.querySelector(selector);
    if (el) return resolve(el);

    const observer = new MutationObserver(() => {
      const found = document.querySelector(selector);
      if (found) { observer.disconnect(); resolve(found); }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    if (timeout) setTimeout(() => { observer.disconnect(); resolve(null); }, timeout);
  });
}

async function getRecipientID(element) {
  const appId = getCurrentApp();
  if (appId === PLATFORMS.bumble) {
    const link = element.querySelector('a');
    return link?.href?.split('/').pop() ?? null;
  }
  if (appId === PLATFORMS.tinder) {
    const link = element.querySelector('a');
    return link?.href?.split('/').pop() ?? null;
  }
  return null;
}

export async function renderExcludeButtons() {
  const appId = getCurrentApp();
  if (!appId) return;

  const settings = await getStorageValue(appId + 'Settings', {});
  if (!settings.excludeConversations) {
    const btns = document.getElementsByClassName('wingman-exclude-btn');
    while (btns.length > 0) btns[0].remove();
    return;
  }

  const excludedSet = await getExcludedConversations();
  if (!excludedSet) return;

  const createButton = (recipientID) => {
    const isExcl = excludedSet.has(recipientID);
    const btn = document.createElement('button');
    btn.textContent = isExcl ? 'Include' : 'Exclude';
    btn.className = 'wingman-exclude-btn';
    btn.style.backgroundColor = isExcl ? '#d491eb' : '#9500cf';
    btn.style.color = 'white';
    btn.style.marginLeft = '4px';
    btn.style.padding = '4px';
    btn.onclick = () => toggleExcludeConversation(recipientID);
    return btn;
  };

  const elements = await getConversationElements(appId, 30000);
  if (!elements?.length) return;

  for (const el of elements) {
    el.classList.remove('is-selected');
    const recipientID = await getRecipientID(el);
    if (!recipientID) continue;
    const { hasIntervention } = await checkIntervention(recipientID, []);
    const isConverted = await isConvertedAccount(recipientID);

    if (el.getElementsByClassName('wingman-exclude-btn').length === 0 && !isConverted && !hasIntervention) {
      el.appendChild(createButton(recipientID));
    }
  }

  const allEls = await getConversationElements(appId);
  for (const el of allEls) {
    while (el.getElementsByClassName('wingman-exclude-btn').length > 1) {
      el.getElementsByClassName('wingman-exclude-btn')[0].remove();
    }
  }
}
