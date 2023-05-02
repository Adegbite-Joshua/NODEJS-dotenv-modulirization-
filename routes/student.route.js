const express = require('express');
const {getStudent, studentSignup, studentSignupPost} = require('../controllers/student.controller');
const router = express.Router();

router.get('/', getStudent)

router.get('/signup', studentSignup)
router.post('/signup', studentSignupPost)

module.exports = router