/**
 * RUSocial Offline Patcher
 * 
 * After running download-scripts.js, run this to:
 * 1. Copy decrypted scripts into public/ so webpack bundles them
 * 2. Patch branding.js to set IS_AIR = false (disables auto-download)
 * 3. Add decrypted scripts to web_accessible_resources in manifest
 * 
 * Usage:
 *   node scripts/go-offline.js
 * 
 * After running, do: npm run build
 * The built extension in dist/ will work fully offline.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DECRYPTED_DIR = path.join(__dirname, 'decrypted');
const PUBLIC_DIR = path.join(ROOT, 'public');
const BRANDING_FILE = path.join(ROOT, 'src', 'shared', 'branding.js');

const SCRIPT_FILES = [
  'actualBackgroundScript.js',
  'actualContentScript.js',
  'actualPopupScript.js',
  'actualInjectedScript.js',
];

function main() {
  console.log('');
  console.log('=== RUSocial Offline Patcher ===');
  console.log('');

  // Check decrypted scripts exist
  const found = [];
  const missing = [];

  for (const file of SCRIPT_FILES) {
    const src = path.join(DECRYPTED_DIR, file);
    if (fs.existsSync(src)) {
      found.push(file);
    } else {
      missing.push(file);
    }
  }

  if (found.length === 0) {
    console.error('No decrypted scripts found in scripts/decrypted/');
    console.error('Run download-scripts.js first:');
    console.error('  node scripts/download-scripts.js <accessToken>');
    process.exit(1);
  }

  if (missing.length > 0) {
    console.warn(`Warning: Missing scripts: ${missing.join(', ')}`);
    console.warn('Continuing with available scripts...');
  }

  // Step 1: Copy scripts to public/
  console.log('[1/3] Copying decrypted scripts to public/...');
  for (const file of found) {
    const src = path.join(DECRYPTED_DIR, file);
    const dst = path.join(PUBLIC_DIR, file);
    fs.copyFileSync(src, dst);
    const size = (fs.statSync(dst).size / 1024).toFixed(1);
    console.log(`      ${file} (${size} KB)`);
  }

  // Step 2: Patch branding.js to disable AIR
  console.log('[2/3] Patching branding.js (IS_AIR = false)...');
  let branding = fs.readFileSync(BRANDING_FILE, 'utf8');

  if (branding.includes('export const IS_AIR = !IS_DEV && true;')) {
    branding = branding.replace(
      'export const IS_AIR = !IS_DEV && true;',
      'export const IS_AIR = false; // Patched by go-offline.js'
    );
    fs.writeFileSync(BRANDING_FILE, branding, 'utf8');
    console.log('      IS_AIR set to false');
  } else if (branding.includes('IS_AIR = false')) {
    console.log('      Already patched (IS_AIR is already false)');
  } else {
    console.warn('      Could not find IS_AIR line - patch manually in src/shared/branding.js');
  }

  // Step 3: Update manifest to include scripts in web_accessible_resources
  console.log('[3/3] Updating manifest.json...');
  const manifestPath = path.join(PUBLIC_DIR, 'manifest.json');
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

  const resources = manifest.web_accessible_resources?.[0]?.resources || [];
  let added = 0;
  for (const file of found) {
    if (!resources.includes(file)) {
      resources.push(file);
      added++;
    }
  }

  if (added > 0) {
    if (manifest.web_accessible_resources?.[0]) {
      manifest.web_accessible_resources[0].resources = resources;
    }
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 4), 'utf8');
    console.log(`      Added ${added} scripts to web_accessible_resources`);
  } else {
    console.log('      Scripts already in manifest');
  }

  console.log('');
  console.log('=== Offline patch complete! ===');
  console.log('');
  console.log('Now rebuild the extension:');
  console.log('  npm run build');
  console.log('');
  console.log('The dist/ folder will contain a fully offline extension.');
  console.log('No scripts will be downloaded from the server at runtime.');
  console.log('');
}

main();
