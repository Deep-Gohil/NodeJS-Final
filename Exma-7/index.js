const express = require('express');
const connectToDatabase = require('./config/db');
const userRouter = require('./routes/userRoute');
const drugRouter = require('./routes/drugRoute');
const PORT = 8090;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/user/",userRouter);
app.use("/drugs",drugRouter)




app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:8090`);
    connectToDatabase()
})