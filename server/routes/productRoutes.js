import express from "express";
import {
  getAllProducts,
  getSingleProduct,
  createProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
} from "../controller/productController.js";

const productRouter = express.Router();

export default productRouter
  .get("/products", getAllProducts)
  .get("/products/:id", getSingleProduct)
  //create api - POST- /products
  .post("/products", createProduct)
  //update api - PUT - /products/:id
  .put("/products/:id", replaceProduct)
  //PATCH - doesn't overwirte only update specific part
  .patch("/products/:id", updateProduct)
  // Delete - DELETE
  .delete("/products/:id", deleteProduct);
