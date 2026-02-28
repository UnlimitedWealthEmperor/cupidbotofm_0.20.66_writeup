/**
 * Utility functions for actualPopup.
 */

/**
 * Format timestamp for display.
 * @param {number|string|Date} ts - Timestamp (ms) or Date
 * @returns {string}
 */
export function formatTimestamp(ts) {
  if (ts == null) return '';
  const date = typeof ts === 'number' || typeof ts === 'string' ? new Date(ts) : ts;
  if (Number.isNaN(date.getTime())) return '';
  const now = new Date();
  const isToday = date.toDateString() === now.toDateString();
  const isThisYear = date.getFullYear() === now.getFullYear();
  if (isToday) {
    return date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
  }
  if (isThisYear) {
    return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  }
  return date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
}

/**
 * Truncate text with ellipsis.
 * @param {string} text
 * @param {number} maxLen
 * @returns {string}
 */
export function truncateText(text, maxLen = 80) {
  if (text == null || typeof text !== 'string') return '';
  if (text.length <= maxLen) return text;
  return text.slice(0, maxLen - 3).trim() + '...';
}

/**
 * Get icon identifier for platform (for MUI icon mapping).
 * @param {string} platform
 * @returns {string}
 */
export function getPlatformIcon(platform) {
  const icons = {
    snapchat: 'snapchat',
    discord: 'discord',
    instagram: 'instagram',
    telegram: 'telegram',
    whatsapp: 'whatsapp',
    reddit: 'reddit',
    tiktok: 'tiktok',
    grindr: 'grindr',
    bumble: 'bumble',
    tinder: 'tinder',
    x: 'twitter',
    messenger: 'messenger',
    gvoice: 'phone',
    badoo: 'badoo',
    fetlife: 'fetlife',
    pornhub: 'pornhub',
    bluesky: 'bluesky',
    linkedin: 'linkedin',
  };
  return icons[platform] || 'platform';
}

/**
 * Get human-readable display name for platform.
 * @param {string} platform
 * @returns {string}
 */
export function getPlatformDisplayName(platform) {
  const names = {
    snapchat: 'Snapchat',
    discord: 'Discord',
    instagram: 'Instagram',
    telegram: 'Telegram',
    whatsapp: 'WhatsApp',
    reddit: 'Reddit',
    tiktok: 'TikTok',
    grindr: 'Grindr',
    bumble: 'Bumble',
    tinder: 'Tinder',
    x: 'X (Twitter)',
    messenger: 'Messenger',
    gvoice: 'Google Voice',
    badoo: 'Badoo',
    fetlife: 'FetLife',
    pornhub: 'Pornhub',
    bluesky: 'Bluesky',
    linkedin: 'LinkedIn',
  };
  return names[platform] || (platform ? platform.charAt(0).toUpperCase() + platform.slice(1) : '');
}
