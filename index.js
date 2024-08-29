const express = require('express');
const { news } = require('./controllers/news.controller');
const newsRoute = require('./routes/newsRoute');
// const cors = require('cors');
const PORT = 8090; 

const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));



app.use("/news", newsRoute);
app.get("/",(req,res)=>{
    res.send("start...")
})

app.listen(PORT, () => {
    console.log("listening on port " + PORT);
});
