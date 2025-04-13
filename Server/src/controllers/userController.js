// Server\src\controllers\userController.js
const { sendEmail } = require("../services/emailService");

// Handles user registration and message sending
const registerUser = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Call sendEmail with user data
    await sendEmail({ name, email, message });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:1");
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = { registerUser };