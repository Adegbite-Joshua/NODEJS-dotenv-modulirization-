const express = require('express');
const { getStaff, staffLogin, staffSignup, staffSignupPost } = require('../controllers/staff.controller');
const router = express.Router();
const staffModel = require('../models/staff.model')

router.get('/', getStaff)
router.get('/login', staffLogin)
router.get('/signup', staffSignup)
router.post('/signup', staffSignupPost)



module.exports = router