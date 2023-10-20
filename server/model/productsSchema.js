import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  discountPercentage: Number,
  rating: Number,
  brand: String,
  category: String,
  thumbnail: String,
  images: [String],
});

const Product = mongoose.model("product", productSchema);
export default Product;
