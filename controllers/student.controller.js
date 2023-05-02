const studentModel = require('../models/student.model')

const getStudent =(req, res)=>{
    res.send({action: 'student login'})
}

const studentSignup = (req, res)=>{
    res.render('signUp', {message: ''})
}

const studentSignupPost = (req,res)=>{
    console.log(req.body)
    let form = new studentModel(req.body)
    form.save()
    .then(()=>{
        res.send('form submitted')
    })
    .catch(()=>{
        res.send('form submit failed')
    })
}

module.exports = {getStudent , studentSignup, studentSignupPost}