const express = require('express');
const router = express.Router();
const {registerUser} = require('../controllers/userController.js');

//Router to register user and email send
router.post('/register', registerUser);

// Export the router
module.exports = router;