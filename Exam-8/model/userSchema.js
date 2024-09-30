const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
    },
    email:String,
    password:String
})

let User = mongoose.model('User',userSchema);
module.exports = User;