const mongoose = require('mongoose');

const connectToDatabase = async() =>{
    mongoose.connect("mongodb+srv://deep:exam-8@cluster0.bxcc8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/users")
    console.log("connected to database Successfully");
}

module.exports = connectToDatabase;