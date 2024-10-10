const express = require('express');
const connectToDatabase = require('./config/db');
const bookRouter = require('./routes/bookRoute');
const app = express()


app.get("/",(req,res)=>{
    res.send("welcome to the book store")
})

app.use("/books",bookRouter)







app.listen(8090,()=>{
    console.log("listening on port http://localhost:8090");
    connectToDatabase()
})