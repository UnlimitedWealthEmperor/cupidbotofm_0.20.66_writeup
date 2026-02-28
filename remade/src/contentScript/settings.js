import { getStorageValue, setStorageValue, getState } from './storage';
import { getCurrentApp } from './platformDetect';
import deepEqual from 'deep-equal';

export async function loadSettings(appId) {
  const state = await getState();
  return state?.[appId] ?? {};
}

export async function saveSettings(appId, newSettings) {
  const state = await getState();
  const current = state[appId] || {};
  const merged = { ...current, ...newSettings };

  if (deepEqual(current, merged)) return;

  state[appId] = merged;
  await setStorageValue('state', state);
}

export async function loadPreset(appId, presetID, presetName = null, isReset = false) {
  const response = await chrome.runtime.sendMessage({
    action: 'fetch',
    endpoint: 'setPreset',
    method: 'POST',
    app: appId,
    data: { presetID, presetName, isDashboard: false },
  });

  if (response?.presetData) {
    const current = await loadSettings(appId);
    const merged = { ...current, ...response.presetData };
    merged.preset_id = isReset ? null : response.presetID;
    merged.presetName = isReset ? null : String(response.presetName);
    await saveSettings(appId, merged);
  }
}

export function getTimezone(settings) {
  const custom = settings?.customCityTimezone;
  return custom?.length > 0 ? custom : Intl.DateTimeFormat().resolvedOptions().timeZone;
}

export function copyToClipboard(text) {
  navigator.clipboard.writeText(text).catch(console.error);
}
