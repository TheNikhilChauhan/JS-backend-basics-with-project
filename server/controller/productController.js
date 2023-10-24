import Product from "../model/productsSchema.js";

const createProduct = async (req, res) => {
  const product = new Product(req.body);
  try {
    const prod = await product.save();
    console.log(`product saved successfully`);
    res.status(201).json(prod);
  } catch (error) {
    console.log(`Error saving product: ${error.message}`);
    res.status(500).json({ error: "Product creation failed" });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const product = await Product.find();
    res.json(product);
  } catch (error) {
    console.log(`Error getting all products: ${error.message}`);
    res.status(500).json({ error: "Getting all Products failed" });
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const getProduct = await Product.findById(id);
    res.status(200).json(getProduct);
  } catch (error) {
    console.log(`Error getting a product: ${error.message}`);
    res.status(500).json({ error: "Getting a Product failed" });
  }
};

const replaceProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const replaceProduct = await Product.findOneAndReplace(
      { _id: id },
      req.body
    );
    res.status(200).json(replaceProduct);
  } catch (error) {
    console.log(`Error replacing a product: ${error.message}`);
    res.status(500).json({ error: "Replacing a Product failed" });
  }
};

const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const replaceProduct = await Product.findOneAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    );
    res.status(200).json(replaceProduct);
  } catch (error) {
    console.log(`Error updating a product: ${error.message}`);
    res.status(500).json({ error: "Updating a Product failed" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteProduct = await Product.findOneAndDelete({ _id: id });
    res.status(200).json(deleteProduct);
  } catch (error) {
    console.log(`Error deleting a product: ${error.message}`);
    res.status(500).json({ error: "Deleting a Product failed" });
  }
};

export {
  createProduct,
  getAllProducts,
  getSingleProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
};
