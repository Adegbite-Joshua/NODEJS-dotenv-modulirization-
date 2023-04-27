const express = require('express');
const router = express.Router();


router.get('/', (req,res)=>{
    res.send({action: 'staff signup'})
})
router.get('/login', (req,res)=>{
    res.send({action: 'staff login'})
})


module.exports = router