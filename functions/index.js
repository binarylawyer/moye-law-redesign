const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const validator = require('validator');

// Initialize Firebase Admin SDK
admin.initializeApp();
const db = admin.firestore();

// --- Constants for Persona Strings ---
const PERSONA_TECH = "Protect My Startup's Future";
const PERSONA_CAREGIVER = "Plan Care for My Aging Parent";
const PERSONA_BUILDER = "Build My Multi-Generational Legacy";

// --- Configuration Validation ---
const assertValidConfig = () => {
  const config = functions.config();

  // Required email settings
  const requiredEmailKeys = ['user', 'password', 'default_from'];
  requiredEmailKeys.forEach(key => {
    if (!config.email?.[key]) {
      throw new Error(`Missing email.${key} in Firebase config`);
    }
    // Validate email format only for keys that are expected to be emails
    if (key === 'user' || key === 'default_from') {
      // Extract just the email part if it's in "Display Name <email>" format
      let emailToValidate = config.email[key];
      const matches = emailToValidate.match(/<([^>]+)>/);
      if (matches && matches[1]) {
        // If in format "Name <email>", extract just the email part
        emailToValidate = matches[1];
      }
      
      if (!validator.isEmail(emailToValidate)) {
        throw new Error(`Invalid email format for email.${key}: ${config.email[key]}`);
      }
    }
  });

  // Team notification addresses
  const teams = {
    [PERSONA_TECH]: 'tech_innovator_team',
    [PERSONA_CAREGIVER]: 'executive_caregiver_team',
    [PERSONA_BUILDER]: 'wealth_patriarch_team'
  };

  Object.keys(teams).forEach(personaKey => {
    const configKey = teams[personaKey];
    const email = config.notifications?.[configKey];
    if (!email) {
      console.warn(`Missing notification email config notifications.${configKey} for persona: "${personaKey}". Skipping validation for this team.`);
    } else {
      // Extract just the email part if it's in "Display Name <email>" format
      let emailToValidate = email;
      const matches = emailToValidate.match(/<([^>]+)>/);
      if (matches && matches[1]) {
        // If in format "Name <email>", extract just the email part
        emailToValidate = matches[1];
      }
      
      if (!validator.isEmail(emailToValidate)) {
        throw new Error(`Invalid email format for notifications.${configKey}: ${email}`);
      }
    }
  });

  // Security checks (optional but recommended)
  if (process.env.FUNCTIONS_EMULATOR !== 'true' &&
      config.email.user?.includes('dev')) {
    console.warn('Warning: Potentially using development credentials in a non-emulator environment!');
  }
};

// Validate configuration immediately on function load
try {
  assertValidConfig();
  functions.logger.info("Firebase Functions configuration validated successfully.");
} catch (error) {
  functions.logger.error("❌ Invalid Firebase Functions configuration:", error.message);
}

/**
 * Cloud Function that sends a book incentive email when a new form submission is created
 * Triggered by new document creation in the contactFormSubmissions collection
 */
exports.sendBookIncentive = functions.firestore
  .document('contactFormSubmissions/{docId}')
  .onCreate(async (snap, context) => {
    const docId = context.params.docId;
    const formData = snap.data();
    
    // Debug: Log entire document contents
    console.log("DOCUMENT CONTENTS:", JSON.stringify(formData, null, 2));
    functions.logger.info(`Processing incentive request for docId: ${docId}`, {structuredData: true});

    // Re-validate config at runtime
    try {
      assertValidConfig();
    } catch (error) {
      functions.logger.error("Runtime Configuration Error in sendBookIncentive:", error.message, {docId});
      await db.collection("contactFormSubmissions").doc(docId).update({
        reward_delivery_status: "Failed - Config Error",
        last_updated: admin.firestore.FieldValue.serverTimestamp(),
      });
      return null;
    }

    // More robust checking for incentive_requested field
    const incentiveRequested = 
      formData.incentive_requested === true || 
      formData.incentive_requested === 'true' ||
      (formData.contact_info && formData.contact_info.incentive_requested === true) ||
      (formData.contact_info && formData.contact_info.incentive_requested === 'true');
    
    if (!incentiveRequested) {
      functions.logger.info(`Incentive not requested for ${docId}. incentive_requested=${formData.incentive_requested}, contact_info.incentive_requested=${formData.contact_info?.incentive_requested}. Skipping email.`, {structuredData: true});
      await db.collection("contactFormSubmissions").doc(docId).update({
        reward_delivery_status: "Not Requested",
        last_updated: admin.firestore.FieldValue.serverTimestamp(),
      });
      return null;
    }

    // Configure nodemailer transporter using Firebase function config
    const config = functions.config();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: config.email.user,
        pass: config.email.password,
      },
    });

    let mailSubject = "Your Guide from Moye Law";
    let mailHtmlBody = `<p>Dear ${formData.contact_info.name},</p><p>Thank you for reaching out to Moye Law. Please find your requested guide attached.</p><p>We look forward to connecting with you soon.</p><p>Sincerely,<br>The Moye Law Team</p>`;
    let bookFilename = "MoyeLaw_General_Guide.pdf"; // Default

    // --- Select Book Based on Persona ---
    switch (formData.persona) {
      case PERSONA_TECH:
        mailSubject = "Your Tech Founder's Estate Planning Guide";
        mailHtmlBody = `<p>Dear ${formData.contact_info.name},</p><p>Thank you for your interest. Attached is the Tech Founder's Guide to Estate Planning you requested.</p><p>Learn how Moye Law helps innovators like you protect their digital assets and secure their legacy.</p><p>Best regards,<br>The Moye Law Team</p>`;
        bookFilename = "MoyeLaw_Tech_Founders_Guide.pdf";
        break;
      case PERSONA_CAREGIVER:
        mailSubject = "Your Guide to Estate Planning and Elder Law";
        mailHtmlBody = `<p>Dear ${formData.contact_info.name},</p><p>Thank you for contacting us. Please find the Guide to Balancing Estate Planning and Elder Care attached.</p><p>Moye Law provides compassionate guidance for families navigating these important decisions.</p><p>Warmly,<br>The Moye Law Team</p>`;
        bookFilename = "MoyeLaw_Caregiver_Guide.pdf";
        break;
      case PERSONA_BUILDER:
        mailSubject = "Your Guide to Multi-Generational Wealth Preservation";
        mailHtmlBody = `<p>Dear ${formData.contact_info.name},</p><p>Thank you for reaching out. Attached is your requested Guide to Building and Preserving Multi-Generational Wealth.</p><p>Discover how Moye Law offers sophisticated strategies for high-net-worth families.</p><p>Sincerely,<br>The Moye Law Team</p>`;
        bookFilename = "MoyeLaw_Legacy_Builder_Guide.pdf";
        break;
      default:
        functions.logger.warn(`Unknown persona "${formData.persona}" for docId: ${docId}. Sending default guide.`, {structuredData: true});
        // Use default subject/body/filename
        break;
    }

    // --- Get PDF from Cloud Storage ---
    let pdfAttachment = null;
    const bucket = admin.storage().bucket(); // Get default bucket
    const filePath = `ebooks/${bookFilename}`; // Assumes PDFs are in 'ebooks' folder

    try {
      const file = bucket.file(filePath);
      const [exists] = await file.exists();

      if (!exists) {
        functions.logger.error(`Attachment file not found in Cloud Storage: ${filePath}`, {docId});
        throw new Error(`File not found: ${filePath}`);
      }

      const [buffer] = await file.download();
      functions.logger.info(`Successfully downloaded ${bookFilename} from Cloud Storage. Size: ${buffer.length} bytes.`, {docId});

      pdfAttachment = {
        filename: bookFilename,
        content: buffer,
        contentType: 'application/pdf',
      };

    } catch (storageError) {
      functions.logger.error(`Failed to retrieve PDF attachment ${bookFilename} from Cloud Storage for docId ${docId}:`, storageError, {structuredData: true});
      await db.collection("contactFormSubmissions").doc(docId).update({
        reward_delivery_status: "Failed - Attachment Error",
        last_updated: admin.firestore.FieldValue.serverTimestamp(),
      });
      return null;
    }

    // --- Send Email with Attachment ---
    const mailOptions = {
      from: `Moye Law <${config.email.default_from}>`,
      to: formData.contact_info.email,
      subject: mailSubject,
      html: mailHtmlBody,
      attachments: pdfAttachment ? [pdfAttachment] : [],
    };

    try {
      await transporter.sendMail(mailOptions);
      functions.logger.info(`Successfully sent incentive email with attachment ${bookFilename} to ${formData.contact_info.email} for docId: ${docId}`, {structuredData: true});

      await db.collection("contactFormSubmissions").doc(docId).update({
        reward_delivery_status: "Sent",
        last_updated: admin.firestore.FieldValue.serverTimestamp(),
      });
      functions.logger.info(`Successfully marked incentive as Sent for docId: ${docId}`, {structuredData: true});

    } catch (emailError) {
      functions.logger.error(`Failed to send incentive email for docId ${docId} to ${formData.contact_info.email}:`, emailError, {structuredData: true});
      await db.collection("contactFormSubmissions").doc(docId).update({
        reward_delivery_status: "Failed",
        last_updated: admin.firestore.FieldValue.serverTimestamp(),
      });
    }
    return null;
  });

/**
 * Cloud Function to notify the team about new form submissions
 * Triggered by new document creation in the contactFormSubmissions collection
 */
exports.notifyTeamOfNewSubmission = functions.firestore
  .document('contactFormSubmissions/{docId}')
  .onCreate(async (snap, context) => {
    const docId = context.params.docId;
    const formData = snap.data();
    const submissionTime = formData.timestamp.toDate().toLocaleString("en-US", { timeZone: "America/New_York" });
    
    functions.logger.info(`Processing team notification for docId: ${docId}`, {structuredData: true});

    // Re-validate config at runtime
    try {
      assertValidConfig();
    } catch (error) {
      functions.logger.error("Runtime Configuration Error in notifyTeamOfNewSubmission:", error.message, {docId});
      return null;
    }

    const config = functions.config();
    let teamEmail = config.notifications?.default_team || config.email.user; // Fallback email
    let personaName = "Unknown/Default";

    // --- Determine Correct Team Email Based on Persona ---
    const teamConfigKeys = {
      [PERSONA_TECH]: 'tech_innovator_team',
      [PERSONA_CAREGIVER]: 'executive_caregiver_team',
      [PERSONA_BUILDER]: 'wealth_patriarch_team'
    };

    const configKey = teamConfigKeys[formData.persona];
    if (configKey && config.notifications?.[configKey]) {
      teamEmail = config.notifications[configKey];
      personaName = formData.persona;
    } else {
      functions.logger.warn(`No specific team email configured for persona "${formData.persona}" or config key "notifications.${configKey}" not found. Sending to default/fallback: ${teamEmail}`, {docId});
      personaName = formData.persona || "Unknown Persona";
    }

    // --- Prepare Email Content ---
    const notificationSubject = `New Contact Form Submission: ${personaName} (${formData.contact_info.name})`;
    
    let notificationHtmlBody = `
      <h2>New Moye Law Contact Form Submission</h2>
      <p><strong>Received:</strong> ${submissionTime} (ET)</p>
      <p><strong>Document ID:</strong> ${docId}</p>
      <hr>
      <h3>Contact Information</h3>
      <ul>
        <li><strong>Name:</strong> ${formData.contact_info.name || 'N/A'}</li>
        <li><strong>Email:</strong> ${formData.contact_info.email || 'N/A'}</li>
        <li><strong>Phone:</strong> ${formData.contact_info.phone || 'N/A'}</li>
        <li><strong>Referral Source:</strong> ${formData.contact_info.referral_source || 'N/A'}</li>
      </ul>
      <h3>Persona & Needs</h3>
      <ul>
        <li><strong>Selected Persona:</strong> ${personaName}</li>
        <li><strong>Incentive Requested:</strong> ${formData.incentive_requested ? 'Yes' : 'No'}</li>
      </ul>
    `;

    // Attempt to include step2_data details safely
    if (formData.step2_data && typeof formData.step2_data === 'object') {
      notificationHtmlBody += `<h3>Persona-Specific Details</h3><ul>`;
      for (const [key, value] of Object.entries(formData.step2_data)) {
        // Simple sanitization: replace potential HTML tags
        const sanitizedValue = String(value).replace(/</g, "&lt;").replace(/>/g, "&gt;");
        notificationHtmlBody += `<li><strong>${key.replace(/_/g, ' ')}:</strong> ${sanitizedValue || 'N/A'}</li>`;
      }
      notificationHtmlBody += `</ul>`;
    } else {
      notificationHtmlBody += `<p>No additional persona-specific details provided or data is malformed.</p>`;
    }

    notificationHtmlBody += `<hr><p>Please follow up accordingly.</p>`;

    // Configure nodemailer using the same config
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: config.email.user,
        pass: config.email.password,
      },
    });

    const mailOptions = {
      from: `Moye Law Notifications <${config.email.default_from}>`,
      to: teamEmail,
      subject: notificationSubject,
      html: notificationHtmlBody,
    };

    try {
      await transporter.sendMail(mailOptions);
      functions.logger.info(`Successfully sent team notification for docId ${docId} to ${teamEmail}`, {structuredData: true});
    } catch (error) {
      functions.logger.error(`Failed to send team notification email for docId ${docId} to ${teamEmail}:`, error, {structuredData: true});
    }

    return null;
  }); 