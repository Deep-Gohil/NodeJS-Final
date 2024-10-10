const {Router} = require("express");
const { getAllBlogs, getBlog, createBlog, updateBlog, deleteBlog } = require("../controller/blogController");

const blogRouter = Router();

blogRouter.get("/all",getAllBlogs)
blogRouter.get("singleBlog/:id",getBlog)
blogRouter.post("/create",createBlog)
blogRouter.patch("/update/:id",updateBlog)
blogRouter.delete("/delete/:id",deleteBlog)

module.exports = blogRouter;