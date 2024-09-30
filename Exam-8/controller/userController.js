const User = require("../model/userSchema")

const getUsers = async (req, res) => {
    let data = await User.findOne()
    res.res(data)
}

const getUser = async (req, res) => {
    let { id } = req.params
    let data = await User.findById(id)
    res.send(data)
}

const createUser = async (req, res) => {
    let { name, email, password } = req.body
    let data = new User({ name, email, password })
    res.send(data)
}

const updateUser = async (req, res) => {
    let { id } = req.params
    let { name, email, password } = req.body
    let data = await User.findByIdAndUpdate(id, { name, email, password }, { new: true })
    res.send(data)
}

const deleteUser = async (req, res) => {
    let { id } = req.params
    let data = await User.findByIdAndDelete(id)
    res.send(data)
}

module.exports = {getUsers,getUser,createUser,updateUser,deleteUser}