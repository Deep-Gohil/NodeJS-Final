const mongoose = require('mongoose');

const connectToDatabase = async() =>{
    mongoose.connect("mongodb://localhost:27017/users")
    console.log("connected to database Successfully");
}

module.exports = connectToDatabase;