const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    image:String,
    price: Number,
    quantity: Number,
    category: String,
    created_at: { type: Date, default: Date.now }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;