const User = require("../models/userSchema")

const getUser = async(req,res) =>{
    let data = await User.find()
    res.send(data)
}

const createUser = async(req,res) =>{
    let data = await User.create(req.body,{new:true})
    console.log(data);
    res.send(data)
}

module.exports = {getUser, createUser}