const { Router } = require("express")
const { getBook, getBooks, deleteBook, createBook, updateBook } = require("../controller/bookController")
const isAuth = require("../middleware/book")

const bookRouter = Router()

bookRouter.get("/book/:id", getBook)
bookRouter.get("/", getBooks)
bookRouter.delete("/delete/:id",deleteBook)
bookRouter.post("/addbooks",isAuth ,createBook)
bookRouter.patch("/update/:id",updateBook)

module.exports = bookRouter;