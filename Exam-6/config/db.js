const mongoose = require('mongoose')

const connectToDatabase = async()=>{
    await mongoose.connect('mongodb://localhost:27017/Users');
    console.log("Connected to database successfully !!");
}

module.exports = connectToDatabase;