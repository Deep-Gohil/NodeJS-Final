const mongoose = require('mongoose')

const connectToDatabase = async () =>{
    mongoose.connect("mongodb://localhost:27017/User")
    console.log("Connected to database Successfully");
}

module.exports = connectToDatabase;