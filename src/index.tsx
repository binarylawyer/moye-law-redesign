import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Import only the critical components for initial render
import CriticalAppShell from './CriticalAppShell';

// Preload the logo for faster LCP
const preloadLogo = () => {
  const logoImg = new Image();
  logoImg.src = '/logos/moye-logo.webp';
  logoImg.fetchPriority = 'high';
  document.head.appendChild(logoImg);
  logoImg.style.display = 'none';
};

// Lazy load the full App component
const App = lazy(() => import('./App'));

// Run preload before rendering
preloadLogo();

// Add performance marker for debugging
performance.mark('app-init-start');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// First render just the critical shell
root.render(
  <React.StrictMode>
    <CriticalAppShell />
  </React.StrictMode>
);

// After the initial render, load the full app
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    // Add performance marker
    performance.mark('full-app-load-start');
    
    root.render(
      <React.StrictMode>
        <Suspense fallback={<CriticalAppShell />}>
          <App />
        </Suspense>
      </React.StrictMode>
    );
    
    // Measure performance
    performance.mark('full-app-load-end');
    performance.measure('Full App Load Time', 'full-app-load-start', 'full-app-load-end');
  }, 0); // Priority to initial content, load immediately after DOMContentLoaded
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 