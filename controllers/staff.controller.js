const staffModel = require("../models/staff.model")

const getStaff = (req,res)=>{
    res.send({action: 'staff page'})
}

const staffLogin = (req,res)=>{
    res.send({action: 'staff login'})
}

const staffSignup = (req,res)=>{
    res.render('staffSignUp' , {message: ''})
}

const staffSignupPost = (req,res)=>{
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
}

module.exports = {getStaff, staffLogin, staffSignup, staffSignupPost}