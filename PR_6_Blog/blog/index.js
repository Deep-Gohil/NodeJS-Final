const express = require("express");
const connectToDatabase = require("./config/db");
const userRouter = require("./routes/userRouter");
const blogRouter = require("./routes/blogRouter");
const PORT = 8090
const app = express()
app.use(express.urlencoded({ extended:true }));
app.use(express.json());



app.use("/user",userRouter);
app.use("/blog",blogRouter);

app.get("/",(req,res)=>{
    res.render("signup")
})





app.listen(PORT,()=>{
    console.log("Server Listning On Port https://localhost:8090");
    connectToDatabase();
})