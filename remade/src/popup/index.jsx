import React from 'react';
import { createRoot } from 'react-dom/client';
import LoadingScreen from './LoadingScreen';
import './popup-iframe.css';

const POPUP_IFRAME_URL = chrome.runtime.getURL('popup-app.html');

function initPopup() {
  if (document.getElementsByTagName('iframe').length === 0) {
    const iframe = document.createElement('iframe');
    iframe.src = POPUP_IFRAME_URL;
    iframe.className = 'root-popup-iframe';
    document.body.appendChild(iframe);
  }

  const loadingDiv = document.createElement('div');
  loadingDiv.className = 'root-popup-loading';
  document.body.appendChild(loadingDiv);

  createRoot(loadingDiv).render(<LoadingScreen />);

  window.addEventListener('message', (event) => {
    if (event.data.action === 'popupFinishedLoading') {
      setTimeout(() => loadingDiv.remove(), 50);
    }
  });

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.target === 'popup') {
      document.getElementsByTagName('iframe')[0].contentWindow.postMessage(message, '*');
    }
  });
}

initPopup();
