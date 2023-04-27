const express = require('express');
const router = express.Router();
const studentModel = require('../models/student.model')

router.get('/', (req,res)=>{
    res.send({action: 'student login'})
})

router.get('/signup', (req, res)=>{
    res.render('signUp', {message: ''})
})
router.post('/signup', (req,res)=>{
    console.log(req.body)
    let form = new studentModel(req.body)
    form.save()
    .then(()=>{
        res.send('form submitted')
    })
    .catch(()=>{
        res.send('form submitted')
    })
})

module.exports = router