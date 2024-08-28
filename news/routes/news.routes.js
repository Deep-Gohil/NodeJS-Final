const { Router } = require("express");
const { createNews } = require("../controllers/news.controller");

const newsRoute = Router();

newsRoute.post("/", createNews);

module.exports = newsRoute; 
