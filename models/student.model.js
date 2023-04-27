const mongoose = require('mongoose')
let studentSchema = {
    firstname: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
}
let studentModel = mongoose.model('users', studentSchema)

module.exports = studentModel