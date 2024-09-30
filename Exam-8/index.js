const express = require('express');
const connectToDatabase = require('./config/db');
const userRouter = require('./router/userRouter');
const productRouter = require('./router/productRouter');
const PORT = 8090
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

// Define routes

app.get("/",(req,res)=>{
    res.send("Default Get Route")
})

app.use("/user",userRouter)
app.use("/products",productRouter)


app.listen(PORT,()=>{
    console.log("listening on port http://localhost:8090");
    connectToDatabase()
})