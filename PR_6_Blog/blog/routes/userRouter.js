const { Router } = require("express")
const { getAllUser, getUser, createUser, updateUser, deleteUser, Login } = require("../controller/userController")

const userRouter = Router()

userRouter.get("/all",getAllUser)
userRouter.get("/:id",getUser)
userRouter.post("/signup",createUser)
userRouter.post("/login",Login)
userRouter.patch("/",updateUser)
userRouter.delete("/",deleteUser)

module.exports = userRouter;