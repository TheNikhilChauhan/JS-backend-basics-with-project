import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const [product, setProduct] = useState({});

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    addProduct(product);
  };

  const addProduct = async (product) => {
    const res = await axios.post("/products", product);
    if (res.data) {
      alert("Product Saved Successfully!");
    }
  };

  return (
    <div className=" w-full text-black flex justify-center align-middle p-2 ">
      <form className="form-horizontal font-bold " onSubmit={handleSubmit}>
        <fieldset>
          {/* Form Name */}
          <legend className=" text-2xl text-white pb-5"> Add Product</legend>
          {/* Text input*/}
          <div className="form-group pb-3">
            <label
              className="col-md-4 control-label text-white "
              htmlFor="title"
            >
              Title
            </label>
            <div className="col-md-4 pb-3 pt-2">
              <input
                id="title"
                name="title"
                type="text"
                placeholder="title"
                className="form-control input-md pl-2 pt-1 "
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group pb-4">
            <label
              className="col-md-4 control-label text-white pb-3"
              htmlFor="thumbnail"
            >
              Thumbnail
            </label>
            <div className="col-md-4 pb-3 pt-2">
              <input
                id="thumbnail"
                name="thumbnail"
                type="text"
                placeholder="thumbnail"
                className="form-control input-md pl-2 pt-1"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group pb-3">
            <label
              className="col-md-4 control-label text-white"
              htmlFor="price"
            >
              Price
            </label>
            <div className="col-md-4 pb-3 pt-2">
              <input
                id="price"
                name="price"
                type="number"
                placeholder="price"
                className="form-control input-md pl-2 pt-1"
                onChange={handleChange}
              />
            </div>
          </div>
          {/* Select Basic */}
          <div className="form-group pb-3">
            <label
              className="col-md-4 control-label text-white"
              htmlFor="category"
            >
              Category
            </label>
            <div className="col-md-4 pb-3 pt-2">
              <select
                id="category"
                name="category"
                className="form-control text-black"
                onChange={handleChange}
              >
                <option value="">Choose</option>
                <option value="smartphone">SmartPhone</option>
                <option value="laptops">Laptops</option>
              </select>
            </div>
          </div>
          {/* Select Basic */}
          <div className="form-group pb-3">
            <label
              className="col-md-4 control-label text-white"
              htmlFor="brand"
            >
              Brand
            </label>
            <div className="col-md-4 pb-3 pt-2">
              <select
                id="brand"
                name="brand"
                className="form-control text-black"
                onChange={handleChange}
              >
                <option value="">Choose</option>
                <option value="apple">Apple</option>
                <option value="samsung">SamSung</option>
              </select>
            </div>
          </div>
          {/* Text input*/}
          <div className="form-group pb-3">
            <label
              className="col-md-4 control-label text-white"
              htmlFor="discountPercentage"
            >
              Discount
            </label>
            <div className="col-md-4 pb-3 pt-2">
              <input
                id="discountPercentage"
                name="discountPercentage"
                type="number"
                placeholder="discountPercentage"
                className="form-control input-md pl-2 pt-1"
                onChange={handleChange}
              />
              <span className="help-block pb-3 text-white">help</span>
            </div>
          </div>
          {/* Button */}
          <div className="form-group pb-3">
            <div className="col-md-4 pb-3 pt-2">
              <button
                id="singlebutton"
                name="singlebutton"
                className="btn btn-primary border-solid: bg-blue-600 p-2 rounded-lg hover:bg-blue-500 "
              >
                Add
              </button>
              <button
                id="singlebutton"
                name="singlebutton"
                className="btn btn-primary ml-5 border-solid: bg-blue-600 p-2 rounded-lg hover:bg-blue-500 "
              >
                <Link to="/">Back to Products</Link>
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default AddProduct;
