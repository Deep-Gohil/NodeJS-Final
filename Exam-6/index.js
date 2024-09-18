const express = require('express');
const connectToDatabase = require('./config/db');
const User = require('./models/userSchema');
const userRoute = require('./routes/userRoutes');
const app = express();
app.use(express.urlencoded({ extended: true }));
const PORT = 8090;
app.use(express.json())
const cors = require('cors')
app.use(cors());
app.use("/user",userRoute)

app.listen(PORT,()=>{
    console.log("listening on port http://localhost:8090");
    connectToDatabase();
})