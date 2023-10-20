import Product from "../model/productsSchema.js";
import productRoutes from "../routes/productRoutes.js";

const createProduct = async (req, res) => {
  const product = new Product();
  (product.title = "iphone90"), (product.price = 9999);
  await product.save();
  console.log(`product saved successfully`);
  res.status(201).json(product);
};

const getAllProducts = (req, res) => {
  res.json(Product);
};

const getSingleProduct = (req, res) => {
  const id = +req.params.id;
  const product = Product.find((p) => p.id === id);
  if (product) {
    console.log(product);
  }
  res.json(product);
};

const replaceProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = Product.findIndex((p) => p.id === id);

  const updateProduct = Product.splice(productIndex, 1, {
    ...req.body,
    id: id,
  });
  res.status(201).json(updateProduct);
};

const updateProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = Product.findIndex((p) => p.id === id);
  const product = Product[productIndex];
  const updateProduct = Product.splice(productIndex, 1, {
    ...product, //old products
    ...req.body, // updated part of the product, second part will overwrite the first part in patch
  });
  res.status(201).json(updateProduct);
};

const deleteProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1);
  res.json(product);
};

export {
  createProduct,
  getAllProducts,
  getSingleProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
};
