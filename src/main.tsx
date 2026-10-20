import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const root = document.getElementById('root');
if (!root) {
  throw new Error('Could not find the application root element.');
}

const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Cloudflare Pages serves prerendered HTML in production. Hydrate that existing
// markup instead of clearing it and recreating the entire page in the browser.
// During Vite development index.html contains an empty #root, so use createRoot.
if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
