// Server\src\services\emailService.js
const nodemailer = require("nodemailer");
require("dotenv").config();

// Configure SMTP transporter using Gmail as the service
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,  // Sender's email address from environment variable
    pass: process.env.EMAIL_PASS,  // Sender's email password from environment variable
  },
});


const sendEmail = async ({ name, email, message }) => {
  console.log(name, email, message);
  // Email sent to the admin with the user's message
  const fromUser = {
    from: email,  // Sender's email
    to: process.env.EMAIL_USER,  // Admin's email (receiver)
    subject: `${name} message from website`,  // Subject of the email
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4; color: #333;">
        <div style="max-width: 600px; margin: auto; background: #fff; border-radius: 8px; padding: 30px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <h2 style="color: #2196F3;">New Message Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Subject:</strong> New visitor message from your site</p>
          <hr style="margin: 20px 0;">
          <p style="font-size: 1rem;"><strong>Message:</strong></p>
          <div style="display: flex; flex-direction: column; justify-content: center; background-color: #f9f9f9; padding: 15px; border-left: 4px solid #2196F3; white-space: pre-line; font-size: 0.95rem; line-height: 1;">
            <p>${message}</p>
          </div>
          <hr style="margin: 30px 0;">
          <p style="font-size: 0.8rem; color: #888; text-align: center;">This message was sent via the contact form on your website.</p>
        </div>
      </div>
    `,
  };

  // HTML email sent to the user as a confirmation
  const fromAdmin = {
    from: process.env.EMAIL_USER,  // Admin email (sender)
    to: email,  // User's email (receiver)
    subject: "Thank you for your message!",  // Subject of the email
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4; color: #333; width: 100vw;">
        <div style="background: #fff; max-width: 600px; margin: auto; border-radius: 8px; padding: 30px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <h2 style="color: #4CAF50;">Thank You for Reaching Out!</h2>
          <p style="font-size: 1rem;">Dear <strong id="user-name">${name}</strong>,</p>
          <p style="font-size: 0.9rem;">Thank you for visiting my website and for taking the time to leave your valuable message. We truly appreciate your effort and kind words!</p>
          <p style="font-size: 0.9rem;">We carefully read every message and take your feedback seriously. Your support helps us to continue improving and delivering the best experience possible.</p>
          <p style="font-size: 0.9rem;">If you ever have further suggestions or questions, feel free to reply or contact us through the website.</p>
  
          <!-- Website Link Section -->
          <p style="font-size: 0.95rem; margin-top: 20px;">
            Visit my website for more details: <a href="${process.env.FRONTEND_URL}" style="color: #2196F3; text-decoration: none;">${process.env.FRONTEND_URL}</a>
          </p>
  
          <p style="margin-top: 30px; font-size: 0.89rem;">Warm regards,<br><strong style="font-size: 0.89rem;">Tarikul Islam</strong></p>
          <hr style="margin: 20px 0;">
          <p style="font-size: 12px; color: #888; text-align: center;">CREATED WITH CARE - TARIKUL ISLAM</p>
        </div>
      </div>
    `,
  };

  // Try to send both emails (to admin and to user)
  try {
    const info1 = await transporter.sendMail(fromUser);  // Send email to admin
    const info2 = await transporter.sendMail(fromAdmin);  // Send confirmation email to user
    // Optionally log the responses if needed for debugging
    // console.log("Emails sent:", info1.response, info2.response);
    // return res.status(200).json({ message: "Emails sent successfully!" });
  } catch (error) {
    // Handle any error that occurs during email sending
    console.error("Error sending email:", error);
    throw new Error("Email sending failed: " + error.message);
  }
};

// Export the sendEmail function to be used in other parts of the application
module.exports = { sendEmail };
