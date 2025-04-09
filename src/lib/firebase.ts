import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// Track form step completion in analytics
export const trackFormStep = (stepNumber: number, personaType: string | null = null) => {
  try {
    logEvent(analytics, 'form_step_complete', {
      step_number: stepNumber,
      persona_type: personaType || 'not_selected'
    });
  } catch (error) {
    console.error("Error tracking form step:", error);
  }
};

// Track form submission in analytics
export const trackFormSubmission = (personaType: string, incentiveRequested: boolean) => {
  try {
    logEvent(analytics, 'form_submission', {
      persona_type: personaType,
      incentive_requested: incentiveRequested
    });
  } catch (error) {
    console.error("Error tracking form submission:", error);
  }
};

export { db, analytics }; 