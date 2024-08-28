const NEWS = require("../models/news");

const createNews = async (req, res) => {
    try {
        console.log(req.body);
        let data = await NEWS.create(req.body);
        res.send(data);
    } catch (error) {
        res.status(500).send({ message: "Error creating news", error });
    }
}

const getNews = async (req, res) => {
    try {
        let data = await NEWS.find();  res.send(data);
    } catch (error) {
        res.status(500).send({ message: "Error fetching news", error });
    }
}

const deleteNews = async (req, res) => {
    try {
        let { id } = req.params;
        let data = await NEWS.findByIdAndDelete(id);  res.send(data);
    } catch (error) {
        res.status(500).send({ message: "Error deleting news", error });
    }
}

const updateNews = async (req, res) => {
    try {
        let { id } = req.params;
        let data = await NEWS.findByIdAndUpdate(id, req.body, { new: true });   res.send(data);
    } catch (error) {
        res.status(500).send({ message: "Error updating news", error });
    }
}

module.exports = { createNews, getNews, deleteNews, updateNews };
