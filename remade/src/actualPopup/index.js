/**
 * Main entry point for actualPopup script.
 * Guards against double injection, initializes Sentry, creates React root, sets up message listeners.
 */
import React from 'react';
import { createRoot } from 'react-dom/client';
import * as Sentry from '@sentry/browser';
import { SENTRY_DSN, SENTRY_RELEASE } from '../shared/branding';
import App from './App';

const MOUNT_ID = 'actual-popup-root';

function initSentry() {
  if (!SENTRY_DSN) return;
  try {
    Sentry.init({
      dsn: SENTRY_DSN,
      release: SENTRY_RELEASE,
      environment: typeof window !== 'undefined' && window.location?.hostname === 'localhost' ? 'development' : 'production',
      integrations: Sentry.browserTracingIntegration(),
      tracesSampleRate: 0.1,
    });
  } catch (e) {
    console.warn('Sentry init failed:', e);
  }
}

function setupMessageListeners() {
  window.addEventListener('message', (event) => {
    const data = event.data;
    if (!data || data.source !== 'parent' || data.target !== 'actualPopup') return;

    // Handle data pushed from parent (e.g. from content script)
    if (data.type === 'pushData' && data.payload) {
      try {
        window.dispatchEvent(
          new CustomEvent('actualPopup-data', { detail: data.payload })
        );
      } catch (e) {
        console.error('actualPopup data handler error:', e);
      }
    }
  });
}

function init() {
  if (document.getElementById(MOUNT_ID)) {
    return;
  }

  const mountEl = document.createElement('div');
  mountEl.id = MOUNT_ID;
  document.body.appendChild(mountEl);

  initSentry();
  setupMessageListeners();

  const root = createRoot(mountEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
