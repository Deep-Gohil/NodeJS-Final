const User = require("../model/userSchema")

const getUsers = async (req, res) =>{
    let data = await User.find()
    res.send(data)
}

const createUser = async (req, res) => {
    let data = await User.create(req.body,{new:true})
    res.send(data)
}

const getUser = async (req, res) => {
    let {id} = req.params
    let data = await User.findById(id)
    res.send(data)
}

module.exports = {getUsers, createUser, getUser}