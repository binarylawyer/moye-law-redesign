const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

// Initialize Firebase Admin SDK
admin.initializeApp();

/**
 * Cloud Function that sends a book incentive email when a new form submission is created
 * Triggered by new document creation in the contactFormSubmissions collection
 */
exports.sendBookIncentive = functions.firestore
  .document('contactFormSubmissions/{formId}')
  .onCreate(async (snap, context) => {
    const formData = snap.data();
    const formId = context.params.formId;
    
    // Only send if incentive was requested and there's a valid email
    if (!formData.incentive_requested || !formData.contact_info.email) {
      return admin.firestore().collection('contactFormSubmissions').doc(formId).update({
        reward_delivery_status: "Not Requested",
      });
    }
    
    try {
      // Set up email transporter (you would configure with your SMTP settings)
      // For production, you should set these values in Firebase Functions config
      const transporter = nodemailer.createTransport({
        // For Gmail, you might use:
        service: 'gmail',
        auth: {
          user: functions.config().email ? functions.config().email.user : 'your-email@gmail.com',
          pass: functions.config().email ? functions.config().email.password : 'your-app-password'
        }
        
        // Or for a custom SMTP server:
        /*
        host: functions.config().smtp.host,
        port: functions.config().smtp.port,
        secure: true,
        auth: {
          user: functions.config().smtp.user,
          pass: functions.config().smtp.password
        }
        */
      });
      
      // Determine which book PDF to send based on persona
      let bookFilename = '';
      let emailSubject = '';
      let emailBody = '';
      
      switch(formData.persona) {
        case "Protect My Startup's Future":
          bookFilename = 'tech-founders-estate-guide.pdf';
          emailSubject = 'Your Tech Founder Estate Planning Guide';
          emailBody = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #0A2342;">Your Tech Founder Estate Planning Guide</h2>
              <p>Dear ${formData.contact_info.name},</p>
              <p>Thank you for your interest in protecting your startup's future. Attached is your free book on estate planning strategies specifically designed for tech entrepreneurs and founders.</p>
              <p>Here's what you'll learn:</p>
              <ul>
                <li>How to protect your intellectual property in your estate plan</li>
                <li>Strategies for digital asset succession planning</li>
                <li>Tax optimization techniques for startup equity</li>
                <li>Common pitfalls tech founders face in estate planning</li>
              </ul>
              <p>A member of our team will reach out within one business day to schedule a personalized consultation.</p>
              <p>Best regards,<br>Christopher Moye<br>Moye Law</p>
            </div>
          `;
          break;
          
        case "Plan Care for My Aging Parent":
          bookFilename = 'elder-care-planning-guide.pdf';
          emailSubject = 'Your Elder Care Planning Guide';
          emailBody = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #0A2342;">Your Elder Care Planning Guide</h2>
              <p>Dear ${formData.contact_info.name},</p>
              <p>Thank you for your interest in planning care for your aging parent. Attached is your free book on elder care planning strategies.</p>
              <p>Here's what you'll learn:</p>
              <ul>
                <li>Medicaid planning essentials</li>
                <li>Long-term care options and financing</li>
                <li>Healthcare decision-making documents</li>
                <li>Balancing caregiving with your career</li>
              </ul>
              <p>A member of our elder law team will reach out within one business day to schedule a personalized consultation.</p>
              <p>Best regards,<br>Christopher Moye<br>Moye Law</p>
            </div>
          `;
          break;
          
        case "Manage Multi-Generational Wealth":
          bookFilename = 'wealth-preservation-guide.pdf';
          emailSubject = 'Your Wealth Preservation Guide';
          emailBody = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #0A2342;">Your Wealth Preservation Guide</h2>
              <p>Dear ${formData.contact_info.name},</p>
              <p>Thank you for your interest in multi-generational wealth preservation. Attached is your free book on sophisticated estate planning strategies for significant wealth.</p>
              <p>Here's what you'll learn:</p>
              <ul>
                <li>Advanced trust strategies for wealth preservation</li>
                <li>Tax minimization techniques across generations</li>
                <li>Family governance structures</li>
                <li>Asset protection from creditors and lawsuits</li>
              </ul>
              <p>A member of our wealth preservation team will reach out within one business day to schedule a personalized consultation.</p>
              <p>Best regards,<br>Christopher Moye<br>Moye Law</p>
            </div>
          `;
          break;
          
        default:
          bookFilename = 'general-estate-planning-guide.pdf';
          emailSubject = 'Your Estate Planning Guide';
          emailBody = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #0A2342;">Your Estate Planning Guide</h2>
              <p>Dear ${formData.contact_info.name},</p>
              <p>Thank you for your interest in estate planning. Attached is your free book on effective estate planning strategies.</p>
              <p>A member of our team will reach out within one business day to schedule a personalized consultation.</p>
              <p>Best regards,<br>Christopher Moye<br>Moye Law</p>
            </div>
          `;
      }
      
      // In a production environment, you would store these PDFs in Firebase Storage
      // or another file storage service and generate download URLs
      
      // For this example, we'll skip the actual attachment since we don't have the files
      // In production, you would uncomment this code and use actual file paths
      /*
      // Send email with PDF attachment
      await transporter.sendMail({
        from: '"Moye Law" <contact@moye.law>',
        to: formData.contact_info.email,
        subject: emailSubject,
        html: emailBody,
        attachments: [
          {
            filename: 'Moye-Law-Estate-Planning-Guide.pdf',
            path: `./assets/books/${bookFilename}`,
            contentType: 'application/pdf'
          }
        ]
      });
      */
      
      // For demonstration purposes, send email without attachment
      await transporter.sendMail({
        from: '"Moye Law" <contact@example.com>',
        to: formData.contact_info.email,
        subject: emailSubject,
        html: emailBody,
      });
      
      // Update document to show incentive was sent
      return admin.firestore().collection('contactFormSubmissions').doc(formId).update({
        reward_delivery_status: "Sent",
        reward_delivery_date: admin.firestore.FieldValue.serverTimestamp()
      });
      
    } catch (error) {
      console.error('Error sending incentive email:', error);
      
      // Update document to show delivery failed
      return admin.firestore().collection('contactFormSubmissions').doc(formId).update({
        reward_delivery_status: "Failed",
        reward_delivery_error: error.message
      });
    }
  });

/**
 * Cloud Function to notify the team about new form submissions
 * Triggered by new document creation in the contactFormSubmissions collection
 */
exports.notifyTeamOfNewSubmission = functions.firestore
  .document('contactFormSubmissions/{formId}')
  .onCreate(async (snap, context) => {
    const formData = snap.data();
    const formId = context.params.formId;
    
    try {
      // Setup email transport (same as above)
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: functions.config().email ? functions.config().email.user : 'your-email@gmail.com',
          pass: functions.config().email ? functions.config().email.password : 'your-app-password'
        }
      });
      
      // Determine which team to notify based on persona
      let teamEmail = 'team@example.com'; // Default team email
      
      switch(formData.persona) {
        case "Protect My Startup's Future":
          teamEmail = 'tech-team@example.com';
          break;
        case "Plan Care for My Aging Parent":
          teamEmail = 'elder-law-team@example.com';
          break;
        case "Manage Multi-Generational Wealth":
          teamEmail = 'wealth-team@example.com';
          break;
      }
      
      // Send notification email to appropriate team
      await transporter.sendMail({
        from: '"Moye Law Form System" <noreply@example.com>',
        to: teamEmail,
        subject: `New ${formData.persona} Lead Submission`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0A2342;">New Lead Submission</h2>
            <p><strong>Persona:</strong> ${formData.persona}</p>
            <p><strong>Name:</strong> ${formData.contact_info.name}</p>
            <p><strong>Email:</strong> ${formData.contact_info.email}</p>
            <p><strong>Phone:</strong> ${formData.contact_info.phone}</p>
            <p><strong>Referral Source:</strong> ${formData.contact_info.referral_source || 'Not specified'}</p>
            <p><strong>Incentive Requested:</strong> ${formData.incentive_requested ? 'Yes' : 'No'}</p>
            
            <h3 style="color: #0A2342; margin-top: 20px;">Additional Details</h3>
            <pre>${JSON.stringify(formData.step2_data, null, 2)}</pre>
            
            <p style="margin-top: 20px;">Please follow up with this lead within one business day.</p>
          </div>
        `
      });
      
      return null;
    } catch (error) {
      console.error('Error sending team notification:', error);
      return null;
    }
  }); 