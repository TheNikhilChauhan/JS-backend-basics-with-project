import Product from "./Product";
import { useEffect, useState } from "react";

import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await axios.get(`http://localhost:8080/api/v1/products`);
    console.log(res.data);
    setProducts(res.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {products.map((product, index) => (
        <Product {...product} key={index}></Product>
      ))}
    </>
  );
};

export default ProductList;
