/**
 * RUSocial Script Downloader & Decryptor
 * 
 * Downloads all 4 encrypted scripts from the CupidBot API,
 * decrypts them (AES-256-GCM), and saves them as clean .js files.
 * 
 * Usage:
 *   node scripts/download-scripts.js <accessToken>
 * 
 * Or set the token in accessToken.txt and run:
 *   node scripts/download-scripts.js
 * 
 * Output files saved to: scripts/decrypted/
 *   - actualBackgroundScript.js
 *   - actualContentScript.js
 *   - actualPopupScript.js
 *   - actualInjectedScript.js
 */

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const API_BASE = 'https://cupidbot-382905.uc.r.appspot.com';
const MANIFEST_VERSION = '0.20.66';
const BRAND = 'cupidbotofm';

const SCRIPT_KEYS = [
  'backgroundScript',
  'contentScript',
  'popupScript',
  'injectedScript',
];

const OUTPUT_NAMES = {
  backgroundScript: 'actualBackgroundScript.js',
  contentScript: 'actualContentScript.js',
  popupScript: 'actualPopupScript.js',
  injectedScript: 'actualInjectedScript.js',
};

function httpGet(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return httpGet(res.headers.location).then(resolve).catch(reject);
      }
      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => {
        const body = Buffer.concat(chunks);
        resolve({ status: res.statusCode, body, headers: res.headers });
      });
      res.on('error', reject);
    }).on('error', reject);
  });
}

function httpGetJSON(url) {
  return httpGet(url).then(({ status, body }) => {
    if (status !== 200) throw new Error(`HTTP ${status}: ${body.toString().slice(0, 200)}`);
    return JSON.parse(body.toString());
  });
}

function deriveKey(url) {
  return url
    .split('')
    .filter((_, i) => i % 3 === 0)
    .slice(0, 32)
    .join('');
}

function arrayBufferToBase64(buffer) {
  return buffer.toString('base64');
}

async function decryptScript(scriptText, url) {
  const keyStr = deriveKey(url);
  const raw = Buffer.from(scriptText, 'base64');

  const iv = raw.subarray(0, 12);
  const authTag = raw.subarray(12, 28);
  const ciphertext = raw.subarray(28);

  const decipher = crypto.createDecipheriv('aes-256-gcm', Buffer.from(keyStr, 'utf8'), iv);
  decipher.setAuthTag(authTag);

  let decrypted = decipher.update(ciphertext);
  decrypted = Buffer.concat([decrypted, decipher.final()]);

  return decrypted.toString('utf8');
}

async function main() {
  let accessToken = process.argv[2];

  if (!accessToken) {
    const tokenFile = path.join(__dirname, '..', 'public', 'accessToken.txt');
    if (fs.existsSync(tokenFile)) {
      accessToken = fs.readFileSync(tokenFile, 'utf8').trim();
    }
  }

  if (!accessToken || accessToken === 'YOUR_TOKEN_HERE') {
    console.error('');
    console.error('  Usage: node scripts/download-scripts.js <accessToken>');
    console.error('');
    console.error('  To get your access token:');
    console.error('  1. Install the original CupidBot extension');
    console.error('  2. Open DevTools on the background service worker');
    console.error('  3. Run: (await chrome.storage.local.get("state")).state.accessToken');
    console.error('  4. Copy that token and pass it as the argument');
    console.error('');
    process.exit(1);
  }

  const outDir = path.join(__dirname, 'decrypted');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  console.log('');
  console.log('=== RUSocial Script Downloader ===');
  console.log('');

  // Step 1: Fetch latest script versions
  const params = new URLSearchParams({
    manifestVersion: MANIFEST_VERSION,
    accessToken: accessToken,
    isOF: 'true',
    brand: BRAND,
    isDev: 'false',
    app: '',
  });

  const apiUrl = `${API_BASE}/api/getLatestScriptVersions?${params}`;
  console.log('[1/3] Fetching script version info...');

  let versions;
  try {
    versions = await httpGetJSON(apiUrl);
  } catch (err) {
    console.error('Failed to fetch script versions:', err.message);
    console.error('');
    console.error('Make sure your access token is valid.');
    process.exit(1);
  }

  console.log('      Got versions for:', Object.keys(versions).join(', '));

  // Step 2: Download each encrypted script
  console.log('[2/3] Downloading encrypted scripts...');

  const downloaded = {};

  for (const key of SCRIPT_KEYS) {
    const info = versions[key];
    if (!info || !info.url) {
      console.log(`      [SKIP] ${key} - no URL in response`);
      continue;
    }

    console.log(`      Downloading ${key} v${info.version}...`);

    try {
      const resp = await httpGet(info.url);
      if (resp.status !== 200) {
        console.error(`      [ERROR] ${key}: HTTP ${resp.status}`);
        continue;
      }

      downloaded[key] = {
        scriptText: arrayBufferToBase64(resp.body),
        url: info.url,
        version: info.version,
      };

      console.log(`      [OK] ${key} (${(resp.body.length / 1024).toFixed(1)} KB encrypted)`);
    } catch (err) {
      console.error(`      [ERROR] ${key}: ${err.message}`);
    }
  }

  // Step 3: Decrypt and save
  console.log('[3/3] Decrypting and saving...');

  let successCount = 0;

  for (const key of SCRIPT_KEYS) {
    if (!downloaded[key]) continue;

    const { scriptText, url, version } = downloaded[key];
    const outFile = path.join(outDir, OUTPUT_NAMES[key]);

    try {
      const decrypted = await decryptScript(scriptText, url);

      const header = [
        `// ${OUTPUT_NAMES[key]}`,
        `// Version: ${version}`,
        `// Downloaded: ${new Date().toISOString()}`,
        `// Decrypted from: ${url.slice(0, 80)}...`,
        '',
      ].join('\n');

      fs.writeFileSync(outFile, header + decrypted, 'utf8');

      const lines = decrypted.split('\n').length;
      const sizeKB = (Buffer.byteLength(decrypted) / 1024).toFixed(1);
      console.log(`      [OK] ${OUTPUT_NAMES[key]} (${lines} lines, ${sizeKB} KB)`);
      successCount++;
    } catch (err) {
      console.error(`      [ERROR] ${key}: Decryption failed - ${err.message}`);

      const rawFile = path.join(outDir, OUTPUT_NAMES[key].replace('.js', '.encrypted.b64'));
      fs.writeFileSync(rawFile, scriptText, 'utf8');
      console.error(`      Saved raw encrypted data to ${path.basename(rawFile)}`);
    }
  }

  console.log('');
  console.log(`=== Done! ${successCount}/${SCRIPT_KEYS.length} scripts decrypted ===`);
  console.log(`Output: ${outDir}`);
  console.log('');

  if (successCount > 0) {
    console.log('Next steps:');
    console.log('  1. Review the decrypted scripts in scripts/decrypted/');
    console.log('  2. Copy them to public/ to bundle them statically');
    console.log('  3. Disable AIR mode in src/shared/branding.js (set IS_AIR = false)');
    console.log('');
  }
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
