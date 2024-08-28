const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    title:String,
    content:String,
    image:String,
})

const NEWS = mongoose.model('NEWS', newsSchema);

module.exports = NEWS