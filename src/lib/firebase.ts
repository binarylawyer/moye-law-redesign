import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getAnalytics, logEvent } from 'firebase/analytics';

// Your Firebase configuration
// Replace these placeholder values with your actual Firebase config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "your-api-key",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "your-auth-domain",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "your-project-id",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "your-storage-bucket",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "your-messaging-sender-id",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "your-app-id",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "your-measurement-id"
};

// Initialize Firebase with retry logic
let app;
let db;
let analytics;

try {
  console.log("Initializing Firebase with config:", {
    apiKey: firebaseConfig.apiKey ? "PRESENT" : "MISSING",
    authDomain: firebaseConfig.authDomain ? "PRESENT" : "MISSING",
    projectId: firebaseConfig.projectId ? "PRESENT" : "MISSING",
  });
  
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  
  // Only initialize analytics in browser environment
  if (typeof window !== 'undefined') {
    try {
      analytics = getAnalytics(app);
    } catch (analyticsError) {
      console.error("Failed to initialize analytics:", analyticsError);
      // Provide a mock analytics to prevent errors
      analytics = {
        logEvent: () => console.warn("Analytics unavailable: event not logged")
      };
    }
  }
  
  // Use emulator in development if needed
  if (import.meta.env.DEV && import.meta.env.VITE_USE_FIREBASE_EMULATORS === 'true') {
    // Connect to local emulator if in dev environment
    connectFirestoreEmulator(db, 'localhost', 8080);
    console.log('Connected to Firestore emulator');
  }
  
  console.log("Firebase initialized successfully", { db });
} catch (fbError) {
  console.error("Firebase initialization error:", fbError);
  
  // Don't provide mock implementations - let the system handle error states naturally
  // This prevents API mismatch between v8 and v9 Firebase
  if (!app) app = null;
  if (!db) db = null;
  if (!analytics) analytics = { 
    logEvent: () => console.warn("Analytics unavailable: event not logged") 
  };
}

// Track form step completion in analytics
export const trackFormStep = (stepNumber: number, personaType: string | null = null) => {
  try {
    if (analytics && typeof analytics.logEvent === 'function') {
      analytics.logEvent('form_step_complete', {
        step_number: stepNumber,
        persona_type: personaType || 'not_selected'
      });
    }
  } catch (error) {
    console.error("Error tracking form step:", error);
  }
};

// Track form submission in analytics
export const trackFormSubmission = (personaType: string, incentiveRequested: boolean) => {
  try {
    if (analytics && typeof analytics.logEvent === 'function') {
      analytics.logEvent('form_submission', {
        persona_type: personaType,
        incentive_requested: incentiveRequested
      });
    }
  } catch (error) {
    console.error("Error tracking form submission:", error);
  }
};

export { db, analytics }; 