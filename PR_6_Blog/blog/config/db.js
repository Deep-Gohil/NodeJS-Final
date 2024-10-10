const mongoose = require("mongoose")

const connectToDatabase = async()=>{
    await mongoose.connect("mongodb+srv://deep888gohil:PR-6-BLOG@cluster0.o9wcr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("Connected to MongoDB")
}

module.exports = connectToDatabase