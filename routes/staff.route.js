const express = require('express');
const router = express.Router();
const staffModel = require('../models/staff.model')


router.get('/', (req,res)=>{
    res.send({action: 'staff signup'})
})
router.get('/login', (req,res)=>{
    res.send({action: 'staff login'})
})
router.get('/signup', (req,res)=>{
    res.render('staffSignUp' , {message: ''})
})
router.post('/signup', (req,res)=>{
    let form = new staffModel(req.body);
    form.save()
    .then(()=>{
        res.send('form submitted')
    })
    .catch((err)=>{
        console.log(err)
        res.send('form failed')
        console.log(req.body)
    })
})



module.exports = router