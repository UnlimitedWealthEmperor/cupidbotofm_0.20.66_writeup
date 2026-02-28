import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

function initOptions() {
  const container = document.createElement('div');
  document.body.appendChild(container);
  if (!container) throw new Error('Can not find AppContainer');
  createRoot(container).render(<App />);
}

initOptions();
