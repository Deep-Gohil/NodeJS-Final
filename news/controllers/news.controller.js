const NEWS = require("../models/news");

const createNews = async (req, res) => {
    console.log(req.body);
    
    let data = await NEWS.create(req.body)
    res.send(data)
}

module.exports = {createNews}