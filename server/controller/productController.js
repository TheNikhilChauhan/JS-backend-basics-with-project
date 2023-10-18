import data from "../data.json" assert { type: "json" };
const products = data.products;

const createProduct = (req, res) => {
  console.log(req.body);
  const product = products.push(req.body);
  res.status(201).json(product);
};

const getAllProducts = (req, res) => {
  res.json(products);
};

const getSingleProduct = (req, res) => {
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);
  if (product) {
    console.log(product);
  }
  res.json(product);
};

const replaceProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);

  const updateProduct = products.splice(productIndex, 1, {
    ...req.body,
    id: id,
  });
  res.status(201).json(updateProduct);
};

const updateProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  const updateProduct = products.splice(productIndex, 1, {
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
