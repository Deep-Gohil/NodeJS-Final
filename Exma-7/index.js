const express = require('express');
const connectToDatabase = require('./config/db');
const userRouter = require('./routes/userRoute');
const PORT = 8090;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/user/",userRouter);





app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:8090`);
    connectToDatabase()
})