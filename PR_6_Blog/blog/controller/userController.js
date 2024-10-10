const User = require("../models/user.schema")

const getAllUser = async (req, res) => {
    let data = await User.find()
    res.send(data)
}

const getUser = async(req,res) =>{
    let {id} = req.params
    let data = await User.findById(id)
    res.send(data)
}

const createUser = async (req, res) =>{
    let {username,email,password,role} = req.body
    let user = await User.findOne({email:email})
    if(user){
        return res.send({msg:"User Already Exist"})
    }
    else{
        let data = await User.create(req.body)
        res.send(data)
    }

}
const Login = async(req, res) =>{
    let {username,email,password,role} = req.body
    let user = await User.findOne({email:email})

    if(!user){
        return res.send({msg:"User Not Found"})
    }

    if(user.password !== password){
        return res.send({msg:"Incorrect Password"})
    }

    return res.cookies("id",user.id).send({msg:"Login Success"});
    // return res.send({msg:"Login Success"})
}
const updateUser = async (req, res) =>{
    let {id} = req.params
    let data = await User.findByIdAndUpdate(id,req.body)
    res.send(data)
}

const deleteUser = async (req, res) =>{
    let {id} = req.params
    let data = await User.findByIdAndDelete(id)
    res.send(data)
}

module.exports = {getAllUser,getUser,createUser,updateUser,deleteUser,Login}