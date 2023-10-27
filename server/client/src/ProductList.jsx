import Product from "./Product";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/products`);
    console.log(res.data);
    setProducts(res.data);
  };

  const handleClick = async (id) => {
    const res = await axios.delete(
      `${import.meta.env.VITE_API_URL}/products/${id}`
    );
    console.log(res.data);
    if (res.data._id) {
      setProducts(products.filter((p) => p._id !== res.data._id));
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="flex justify-end m-5">
        <button
          id="singlebutton"
          name="singlebutton"
          className="btn btn-primary border-solid: bg-blue-600 p-2 rounded-lg hover:bg-blue-500 text-2xl font-bold text-white flex justify-end align-top text-right"
        >
          <Link to="/add">Add Product</Link>
        </button>
      </div>
      <div className="m-3 pb-4 flex justify-center text-2xl text-white font-bold">
        <h2>Products</h2>
      </div>
      <div className="flex flex-wrap h-240px gap-20 m-3 cursor-pointer ">
        {products.map((product, index) => (
          <ul key={index}>
            <li>
              <Product {...product} handleClick={handleClick}></Product>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default ProductList;
