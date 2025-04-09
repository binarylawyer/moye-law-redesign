
# Moye Law Website

## Firebase Setup

To fully set up the Firebase integration for this project, follow these steps:

### 1. Install Firebase CLI

```bash
npm install -g firebase-tools
```

### 2. Login to Firebase

```bash
firebase login
```

### 3. Initialize Project (if not already done)

```bash
firebase init
```

### 4. Configure Email for Cloud Functions

For Gmail integration, set up the email configuration for sending notification emails:

```bash
firebase functions:config:set email.user="your-gmail@gmail.com" email.password="your-app-password"
```

**IMPORTANT**: For Gmail, you must generate an "App Password" if you have 2-Step Verification enabled. Regular Gmail passwords won't work.

To generate an App Password:
1. Go to your Google Account: https://myaccount.google.com/
2. Select "Security"
3. Under "Signing in to Google," select "App passwords" (you need 2-Step Verification enabled)
4. Follow the steps to generate an app password for your app
5. Use this generated password in the Firebase config

### 5. Configure Team Email Addresses (Optional)

```bash
firebase functions:config:set notifications.tech_innovator_team="tech@example.com" notifications.executive_caregiver_team="elder@example.com" notifications.wealth_patriarch_team="wealth@example.com" notifications.default_team="contact@example.com"
```

### 6. Deploy Cloud Functions

```bash
firebase deploy --only functions
```

### 7. Set Up Firebase Environment Variables

Update the `.env` file with your Firebase project details:

```
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=moyelaw-e3158.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=moyelaw-e3158
VITE_FIREBASE_STORAGE_BUCKET=moyelaw-e3158.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
VITE_FIREBASE_MEASUREMENT_ID=your-measurement-id
```

You can find these values in your Firebase Console under Project Settings > General > Your apps > Firebase SDK snippet > Config.

### 8. Deploy Website

```bash
npm run build
firebase deploy --only hosting
```

## Development

```bash
npm run dev
```

## Testing Email Functions Locally

You can test the Firebase functions locally with:

```bash
cd functions
npm run serve
```

This will start the Firebase emulator, allowing you to test function triggers.
