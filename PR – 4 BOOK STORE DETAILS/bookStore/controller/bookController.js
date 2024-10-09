const Book = require("../model/bookSchema")

const getBook = async(req,res)=>{
    let {id} = req.params
    let data = await Book.findById(id)
    res.send(data)
}

const deleteBook = async(req,res)=>{
    let {id} = req.params
    let data = await Book.findByIdAndDelete(id)
    res.send(data)
}

const getBooks = async(req,res)=>{
    let data = await Book.find()
    res.send(data)
}

const updateBook = async(req,res)=>{
    let {id} = req.params
    let data = await Book.findByIdAndUpdate(id,req.body,{new:true})
    res.send(data)
}

const createBook = async(req,res)=>{
    let data = await Book.create(req.body)
    res.send(data)
}

module.exports = {getBook,getBooks,createBook,updateBook,deleteBook}