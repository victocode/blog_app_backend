// user route

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// User registration
router.post('/register', UserController.registerUser);

// User login
router.post('/login', UserController.loginUser);

module.exports = router;