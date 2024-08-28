const express = require('express');
const newsRoute = require('./routes/newsRoute');
const cors = require('cors');
const PORT = 8080; 

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Start...");
});

app.use("/news", newsRoute);
app.get("/news",news)

app.listen(PORT, () => {
    console.log("listening on port " + PORT);
});
