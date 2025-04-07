require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer'); // Import nodemailer
const fs = require('fs'); // For file operations
const path = require('path'); // For file path handling

const app = express();
const port = process.env.PORT || 3001; // Use a port different from your frontend dev server

// --- File Storage Setup ---
// Create a 'data' directory if it doesn't exist
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
  console.log('Created data directory for storing submissions');
}

// Path to the CSV file
const submissionsFile = path.join(dataDir, 'form_submissions.csv');

// Create/check the CSV file and add headers if it's new
if (!fs.existsSync(submissionsFile)) {
  const headers = 'Timestamp,Name,Email,Phone,Service Interest,Communication Preference,Message,Confidentiality\n';
  fs.writeFileSync(submissionsFile, headers);
  console.log('Created new submissions CSV file');
}
// --- End File Storage Setup ---

// --- Nodemailer Setup --- 
// Ensure these environment variables are set in your .env file
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '587'), // Default to 587 if not set
  secure: parseInt(process.env.EMAIL_PORT || '587') === 465, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, 
  },
});

// Verify transporter configuration (optional, good for debugging)
transporter.verify((error, success) => {
  if (error) {
    console.error('Error configuring email transporter:', error);
  } else {
    console.log('Email transporter configured successfully. Ready to send emails.');
  }
});
// --- End Nodemailer Setup ---

// Middleware
app.use(cors()); // Allow requests from your frontend origin
app.use(express.json()); // Parse JSON request bodies

// API Endpoint for Contact Form
app.post('/api/contact', async (req, res) => { // Make the handler async
  console.log('Contact form submission received:');
  const formData = req.body;
  console.log(formData);

  // --- Save to CSV File ---
  try {
    const timestamp = new Date().toISOString();
    
    // Format message by replacing commas and new lines (to prevent CSV issues)
    const sanitizedMessage = formData.message.replace(/,/g, ';').replace(/\n/g, ' ');
    
    // Format CSV row
    const csvRow = `"${timestamp}","${formData.name}","${formData.email}","${formData.phone || ''}","${formData.serviceInterest}","${formData.communicationPreference}","${sanitizedMessage}","${formData.confidentiality}"\n`;
    
    // Append to CSV file
    fs.appendFileSync(submissionsFile, csvRow);
    console.log('Saved submission to CSV file');
  } catch (fileError) {
    console.error('Error saving to CSV file:', fileError);
    // Continue with email even if file save fails
  }
  // --- End Save to CSV File ---

  // --- Send Email --- 
  const mailOptions = {
    from: `"Moye Law Website" <${process.env.EMAIL_USER}>`, // sender address
    to: process.env.EMAIL_TO, // list of receivers from .env
    subject: 'New Contact Form Submission', // Subject line
    text: `You received a new contact form submission:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Service Interest: ${formData.serviceInterest}
Communication Preference: ${formData.communicationPreference}
Message: 
${formData.message}

Confidentiality Agreed: ${formData.confidentiality}`, // plain text body
    // You can also add an html property for a richer email format
    // html: "<b>Hello world?</b>", 
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    // Send a success response AFTER email is sent (or attempted)
    res.status(200).json({ message: 'Form data received and email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    // Send an error response if email fails
    // Consider still returning 200 to the user if the primary goal is just receiving the data server-side,
    // but logging the email error is crucial.
    // For now, let's return a 500 to indicate the email part failed.
    res.status(500).json({ message: 'Form data received, but failed to send email notification.' });
  } 
  // --- End Send Email ---

});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
  console.log(`Submissions are being saved to: ${submissionsFile}`);
}); 