const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/userController.js");
const {
  downloadResume,
} = require("../controllers/resumeDownloadController.js");

//Router to register user and email send
router.post("/register", registerUser);
router.get("/resume", downloadResume);

// Export the router
module.exports = router;