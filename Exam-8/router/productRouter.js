const { Router } = require("express")
const { getAllProducts, getProduct, createProduct, updateProduct, deleteProduct } = require("../controller/productController")

const productRouter = Router()

productRouter.get("/all",getAllProducts)
productRouter.get("/:id",getProduct)
productRouter.post("/",createProduct)
productRouter.patch("/;id",updateProduct)
productRouter.delete("/:id",deleteProduct)

module.exports = productRouter;