const { Router } = require("express");
const { createNews, getNews, updateNewsById, deleteNewsById, getNewsById } = require("../controllers/news.controller");
const newsRoute = Router();

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
    },
    {
        title: "Tech: Apple releases new iPhone 15 Pro Max",
        content: "Apple has released the new iPhone 15 Pro Max, offering a powerful and versatile smartphone with improved battery life and higher-resolution cameras.",
        image: "https://www.techinsights.com/wp-content/uploads/2022/04/apple-iphone-15-pro-max-review-1.jpg"
    },
    {
        title: "Business: Amazon launches new Prime Day",
        content: "Amazon has launched a new Prime Day, offering free shipping on orders over $100 and exclusive discounts on prime-eligible items.",
        image: "https://www.techinsights.com/wp-content/uploads/2022/04/amazon-prime-day-review-1.jpg"
    }
]


newsRoute.get("/", getNews); 
newsRoute.get("/:id", getNewsById)
newsRoute.post("/", createNews);
newsRoute.patch("/:id", updateNewsById); 
newsRoute.delete("/:id", deleteNewsById); 

module.exports = newsRoute;
