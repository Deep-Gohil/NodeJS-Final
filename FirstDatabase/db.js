const mongoose = require('mongoose');

const connectToDatabase = async() =>{
    await mongoose.connect("mongodb://localhost:27017/User")
    console.log("Connected to database !");
}

module.exports = connectToDatabase;