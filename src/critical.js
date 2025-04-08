/**
 * Critical Path JavaScript
 * 
 * This file contains the minimal JavaScript needed for initial rendering.
 * It runs before the main bundle to ensure fast LCP.
 */

// Preload the logo immediately
const preloadLogo = () => {
  const logoImg = new Image();
  logoImg.src = '/logos/moye-logo.webp';
  logoImg.fetchPriority = 'high';
};

// Mark the start of performance measurement
const markStartTime = () => {
  if (window.performance && window.performance.mark) {
    window.performance.mark('critical-start');
  }
};

// Optimize the loading of fonts
const optimizeFonts = () => {
  // Add font preload links to speed up font loading
  const fontPreloads = [
    { href: '/fonts/montserrat-v25-latin-regular.woff2', type: 'font/woff2' },
    { href: '/fonts/inter-v12-latin-regular.woff2', type: 'font/woff2' }
  ];

  fontPreloads.forEach(font => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.href = font.href;
    link.type = font.type;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

// Handle analytics loading properly
const setupAnalytics = () => {
  // Set up a queue for analytics commands
  window.gtag = window.gtag || function() {
    (window.dataLayer = window.dataLayer || []).push(arguments);
  };
  
  // Record initial timestamp
  window.gtag('js', new Date());
  
  // Create script but don't load immediately
  const createAnalyticsScript = () => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-LCB4ZJ4848';
    return script;
  };

  // The proper time to load analytics is after the page is visible
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(() => {
      document.head.appendChild(createAnalyticsScript());
      window.gtag('config', 'G-LCB4ZJ4848', { 'send_page_view': false });
    }, { timeout: 5000 });
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(() => {
      document.head.appendChild(createAnalyticsScript());
      window.gtag('config', 'G-LCB4ZJ4848', { 'send_page_view': false });
    }, 3000);
  }
};

// Detect network conditions to adjust loading strategy
const adaptToNetworkConditions = () => {
  // Check if the Connection API is available
  if ('connection' in navigator) {
    const connection = navigator.connection;
    
    // If on slow connection, add a class to body to load lower-quality images
    if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
      document.documentElement.classList.add('slow-connection');
    }
    
    // Save the network type for later use
    window.networkType = connection.effectiveType;
  }
};

// Enable early features before full JS loads
const enableEarlyFeatures = () => {
  // Add a class to body to indicate JS is available
  document.documentElement.classList.add('js');
  
  // Show any elements that should be revealed immediately
  setTimeout(() => {
    document.documentElement.classList.add('initial-render-complete');
    document.documentElement.classList.add('js-loaded');
  }, 100);
};

// Execute all critical functions
(function execute() {
  markStartTime();
  preloadLogo();
  optimizeFonts();
  adaptToNetworkConditions();
  
  // Run analytics setup with delay
  setTimeout(setupAnalytics, 2000);
  
  // Run on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enableEarlyFeatures);
  } else {
    enableEarlyFeatures();
  }
})(); 