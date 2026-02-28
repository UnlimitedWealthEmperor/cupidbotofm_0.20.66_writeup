/**
 * Encryption utilities for script decryption and Sentry data protection.
 */

/**
 * Decrypts script content using AES-256-GCM.
 * @param {Object} encryptedData - Object with scriptText (base64) and url (key derivation)
 * @param {string} key - Optional key override; if not provided, derived from url
 * @returns {Promise<string>} Decrypted script content
 */
export async function decryptScript(encryptedData, key) {
  const keyStr =
    key ||
    encryptedData.url
      .split('')
      .filter((_, i) => i % 3 === 0)
      .slice(0, 32)
      .join('');

  const raw = Uint8Array.from(atob(encryptedData.scriptText), (c) => c.charCodeAt(0));
  const iv = raw.subarray(0, 12);
  const authTag = raw.subarray(12, 28);
  const ciphertext = raw.subarray(28);

  const combined = new Uint8Array(ciphertext.length + authTag.length);
  combined.set(ciphertext, 0);
  combined.set(authTag, ciphertext.length);

  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(keyStr),
    { name: 'AES-GCM' },
    false,
    ['decrypt']
  );

  const decrypted = await crypto.subtle.decrypt(
    { name: 'AES-GCM', iv, tagLength: 128 },
    cryptoKey,
    combined
  );
  return new TextDecoder().decode(decrypted);
}

/**
 * Encrypts sensitive data for Sentry using RSA-OAEP.
 * @param {Object|string} data - Data to encrypt (will be JSON stringified if object)
 * @param {string} publicKey - PEM-formatted RSA public key
 * @returns {Promise<string>} Base64-encoded encrypted data
 */
export async function encryptForSentry(data, publicKey) {
  const dataStr = typeof data === 'string' ? data : JSON.stringify(data);

  const pemContents = publicKey
    .replace(/-----BEGIN PUBLIC KEY-----/, '')
    .replace(/-----END PUBLIC KEY-----/, '')
    .replace(/\s/g, '');

  const binaryKey = Uint8Array.from(atob(pemContents), (c) => c.charCodeAt(0));
  const cryptoKey = await crypto.subtle.importKey(
    'spki',
    binaryKey.buffer,
    { name: 'RSA-OAEP', hash: 'SHA-256' },
    false,
    ['encrypt']
  );

  const encoded = new TextEncoder().encode(dataStr);
  const encrypted = await crypto.subtle.encrypt(
    { name: 'RSA-OAEP' },
    cryptoKey,
    encoded
  );

  return btoa(String.fromCharCode(...new Uint8Array(encrypted)));
}
