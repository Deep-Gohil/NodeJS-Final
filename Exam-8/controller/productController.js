const Product = require("../model/productSchema")

const getAllProducts = async (req, res) =>{
    let data = await Product.find()
    res.send(data)
}

const getProduct = async (req, res) => {
    let { id } = req.params
    let data = await Product.findById(id)
    res.send(data)
}

const createProduct = async (req, res) => {
    let { name,image,price,quantity,category } = req.body
    let data = new Product.create(name,image,price,quantity,category)
    res.send(data)
}

const updateProduct = async (req, res) => {
    let {id} = req.params
    let { name, image, price, quantity, category } = req.body
    let data = await Product.findByIdAndUpdate(id, { name, image, price, quantity, category }, { new: true })
    res.send(data)
}

const deleteProduct = async (req, res) => {
    let {id} = req.params;
    let data = await Product.findByIdAndDelete(id)
    res.send(data)
}

module.exports = { getAllProducts, getProduct, createProduct, updateProduct, deleteProduct }