const express = require('express')
const news = require('./config/news')
const newsRoute = require('./routes/news.routes')
PORT = 8090
let app = express()


app.get('/', (req, res) => {
    res.send(news)
})

app.use("/news", newsRoute)

app.listen(PORT,()=>{
    console.log("listening on port "+PORT);
})