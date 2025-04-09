# Moye Law Firebase Functions

This directory contains Firebase Cloud Functions for the Moye Law website.

## Functions Included

1. **sendBookIncentive** - Sends a free book via email when a user submits the contact form
2. **notifyTeamOfNewSubmission** - Notifies the appropriate team about new form submissions

## Setup Instructions

### 1. Install Dependencies
```
npm install
```

### 2. Set Email Configuration
Set up the email configuration for sending emails:

```
firebase functions:config:set email.user="your-email@gmail.com" email.password="your-app-password"
```

For Gmail, you'll need to set up an App Password if using 2FA. Follow [Google's instructions](https://support.google.com/accounts/answer/185833?hl=en).

### 3. Deploy Functions
```
npm run deploy
```

## Local Development

To run functions locally:

```
npm run serve
```

## Function Triggers

- Both functions are triggered when a new document is created in the `contactFormSubmissions` collection
- The form data structure should match the structure created by the multi-step form

## Security

- Currently, the Firestore rules allow anyone to create a form submission
- In production, implement Firebase App Check to prevent abuse
- Consider adding rate limiting and additional validation 