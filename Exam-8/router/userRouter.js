const { Router } = require('express');
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controller/userController');

const userRouter = Router()

userRouter.get('/',getUsers)
userRouter.get('/id',getUser)
userRouter.post("/",createUser)
userRouter.patch("/",updateUser)
userRouter.delete("/",deleteUser)

module.exports = userRouter;