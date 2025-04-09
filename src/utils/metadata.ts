/**
 * Captures comprehensive metadata about the current session and user
 * for analytics and attribution purposes
 */
export const captureMetadata = () => {
  // Get UTM parameters from URL
  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get('utm_source');
  const utmMedium = urlParams.get('utm_medium');
  const utmCampaign = urlParams.get('utm_campaign');
  const utmContent = urlParams.get('utm_content');
  const utmTerm = urlParams.get('utm_term');
  
  // Get referrer information
  const referrer = document.referrer || 'direct';
  
  // Get device information
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  // Create session ID if it doesn't exist
  let sessionId = sessionStorage.getItem('session_id');
  if (!sessionId) {
    sessionId = generateSessionId();
    sessionStorage.setItem('session_id', sessionId);
  }
  
  return {
    utm: {
      source: utmSource || 'none',
      medium: utmMedium || 'none',
      campaign: utmCampaign || 'none',
      content: utmContent || 'none',
      term: utmTerm || 'none'
    },
    referrer,
    device: {
      userAgent: navigator.userAgent,
      screenWidth,
      screenHeight,
      isMobile
    },
    session: {
      id: sessionId,
      timestamp: new Date().toISOString(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    },
    page: {
      url: window.location.href,
      path: window.location.pathname
    }
  };
};

/**
 * Generates a random session ID
 */
const generateSessionId = () => {
  return 'xxxx-xxxx-xxxx-xxxx'.replace(/[x]/g, () => {
    return (Math.random() * 16 | 0).toString(16);
  });
}; 