const mongoose = require('mongoose');

const drugsSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    quantity: Number,
    image: String,
})

const Drugs = mongoose.model('Drugs', drugsSchema)

module.exports = Drugs;