const { Router } = require('express')
const { getUsers, getUser, createUser } = require('../controller/userController')

const userRouter = Router()

userRouter.get('/',getUsers)
userRouter.get('/:id',getUser)
userRouter.post("/",createUser)

module.exports = userRouter