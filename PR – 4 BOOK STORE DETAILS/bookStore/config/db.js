const mongoose = require('mongoose')

const connectToDatabase = async() =>{
    await mongoose.connect("mongodb+srv://deep:exam-8@cluster0.bxcc8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("Connected to database successfully ");
}

module.exports= connectToDatabase