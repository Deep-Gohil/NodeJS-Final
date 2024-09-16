const { Router } = require("express")
const { getUser, createUser } = require("../controllers/userController")

const userRoute = Router()


userRoute.get("/",getUser)
userRoute.post("/",createUser)


module.exports = userRoute;