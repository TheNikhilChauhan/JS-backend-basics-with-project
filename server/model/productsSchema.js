import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  title: { type: String, unique: true, required: true },
  description: String,
  price: { type: Number, min: [0, " min price can't be 0"] },
  discountPercentage: {
    type: Number,
    min: [0, "discount can't be 0 "],
    max: [100, " discount can't be 100"],
  },
  rating: {
    type: Number,
    min: [0, "wrong min rating"],
    max: [6, "rating must be between 1-5"],
  },
  brand: String,
  category: { type: String, required: true },
  thumbnail: { type: String, required: true },
  images: [String],
});

const Product = mongoose.model("product", productSchema);
export default Product;
