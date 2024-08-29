const NEWS = require("../models/news");
let news = [
    {
        title: "Breaking News: Iran has announced new sanctions",
        content: "Iran has issued new sanctions on multiple countries and companies, including China, Russia, and North Korea. These measures aim to deter potential terrorist attacks and protect the interests of its citizens.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQea_ShG5F0XaVu-O5ZTQO1hoW4HuQ7DE_H6g&s"
    },
    {
        title: "Sports: Manchester United win FA Cup final against Real Madrid",
        content: "Manchester United have won their FA Cup final against Real Madrid, earning them a place in the Premier League table.",
        image: "https://media.cnn.com/api/v1/images/stellar/prod/230603125223-05-fa-cup-final-man-city-man-united-0603.jpg?c=original"
    },
    {
        title: "Politics: Trump calls for immediate shutdown of US-China relations",
        content: "Trump has called for an immediate shutdown of US-China relations, citing concerns about the ongoing trade dispute and the potential for further conflict.",
        image: "https://www.britannica.com/place/Mount-Rushmore/History/Mount-Rushmore-and-United-States-History"
    }
]

const createNews = async (req, res) => {
    console.log("Received request body:", req.body);

    if (!req.body) {
        return res.status(400).json({ message: "Request body is missing." });
    }

    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ message: "Title and content are required." });
    }

    let data = req.body;
    news.push(data);
    res.status(201).json(data);
};
const getNews = async (req, res) => {
    res.json(news)
}

const getNewsById = async (req, res) => {
    let id = req.params.id
    res.json(news[id])
}

const deleteNewsById = async (req, res) => {
    let id = req.params.id
    news.splice(id, 1)
    res.json(news)
}

const updateNewsById = async (req, res) => {
    let id = req.params.id
    let data = req.body
    news[id] = data
    res.json(news)
}



module.exports = { createNews, getNews, deleteNewsById, getNewsById,updateNewsById ,news};
