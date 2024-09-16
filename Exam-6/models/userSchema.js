const mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    name: String,
    grid:Number,
    number:Number,
    age:Number,
    role: String,
    email: String,
    password: String,
})

const User = mongoose.model('User', userSchema)
module.exports = User