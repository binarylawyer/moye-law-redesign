import { createRoot } from 'react-dom/client'
import App from './App.tsx'

// Critical CSS first - needed for initial render
import './fonts.css'
import './index.css'

// Measure performance
if (process.env.NODE_ENV === 'production') {
  // Create a performance mark for React initialization
  performance.mark('react-init-start');
}

// Defer non-critical CSS loading
const loadNonCriticalCSS = () => {
  // Mark when the app is hydrated
  document.body.classList.add('loaded');
  
  // Then load non-critical CSS files
  import('./markdown-content.css');
  import('./styles/mondrian.css');
  import('./styles/animations.css');
};

// Initialize the app with priority scheduling
const startHydration = () => {
  const root = createRoot(document.getElementById("root")!);
  
  // In development, render synchronously
  if (process.env.NODE_ENV !== 'production') {
    root.render(<App />);
    return;
  }
  
  // In production, use requestIdleCallback for better user experience
  const renderApp = () => {
    // Record when React starts rendering
    performance.mark('react-render-start');
    
    root.render(<App />);
    
    // Record metrics after React completes rendering
    performance.mark('react-render-complete');
    performance.measure('react-rendering', 'react-render-start', 'react-render-complete');
    performance.measure('total-to-hydration', 'react-init-start', 'react-render-complete');
    
    // Remove the initial shell header after React has rendered
    setTimeout(() => {
      const initialHeader = document.getElementById('initial-header');
      if (initialHeader) {
        initialHeader.classList.add('hidden');
      }
    }, 0);
  };
  
  // Use requestIdleCallback if available, otherwise use setTimeout
  if ('requestIdleCallback' in window) {
    // @ts-ignore - TypeScript doesn't have proper types for requestIdleCallback
    window.requestIdleCallback(renderApp, { timeout: 2000 });
  } else {
    // Fallback to setTimeout for browsers without requestIdleCallback
    setTimeout(renderApp, 20);
  }
};

// Start hydration process
startHydration();

// Once the page is fully loaded, load remaining CSS
if (document.readyState === 'complete') {
  loadNonCriticalCSS();
} else {
  window.addEventListener('load', loadNonCriticalCSS);
}
