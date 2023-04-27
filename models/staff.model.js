const mongoose = require('mongoose')
let staffSchema = {
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
}
let staffModel = mongoose.model('staff', staffSchema)

module.exports = staffModel