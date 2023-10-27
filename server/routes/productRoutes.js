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
  .get("/", getAllProducts)
  .get("/:id", getSingleProduct)
  //create api - POST- /products
  .post("/", createProduct)
  //update api - PUT - /products/:id
  .put("/:id", replaceProduct)
  //PATCH - doesn't overwirte only update specific part
  .patch("/:id", updateProduct)
  // Delete - DELETE
  .delete("/:id", deleteProduct);
