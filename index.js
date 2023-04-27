const express = require('express');
const app = express();
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
require('dotenv').config();
const PORT = process.env.PORT || process.env.PORT2
const URIS = process.env.URI
app.use(bodyparser.urlencoded({extended:true}))

// app.use('view engine', 'ejs')
const studentModel = require('./models/student.model')
const studentRouter = require('./routes/student.route')
const staffRouter = require('./routes/staff.route')

app.use('/student', studentRouter)
app.use('/staff', staffRouter)
mongoose.connect(URIS)
.then((result)=>{
    console.log('mongoose has connected')
})
.catch((err)=>{
    // console.log(err)
    'Error connecting'
})

app.set('view engine', 'ejs');
app.listen(PORT, ()=>{
    console.log(`app listening ON ${PORT}`)
})
app.get('/', (req,res)=>{
    res.send({ade: 'hello'})
})