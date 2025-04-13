const express = require('express');
const router = express.Router();
const {registerUser} = require('../controllers/userController.js');
const {downloadCV} = require('../controllers/cvController.js');

//Router to register user and email send
router.post('/register', registerUser);
router.get('/cv', downloadCV );

// Export the router
module.exports = router;