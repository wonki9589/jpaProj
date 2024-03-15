import React, { useEffect, useContext } from "react";
import ProductCard from "../components/Product";
import API from '../api.js';

import {
  ProductsStateContext,
  ProductsDispatchContext,
  getProducts
} from "../contexts/products";
import { CommonStateContext } from "../contexts/common";

const Home = () => {
  const { products, isLoading, isLoaded } = useContext(ProductsStateContext);
  const { searchKeyword } = useContext(CommonStateContext);
  const dispatch = useContext(ProductsDispatchContext);

  const productsList =
    products &&
    products.filter((product) => {
      return (
        product.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        !searchKeyword
      );
    });

  const saveDB = () => {
    const data = JSON.stringify(productsList);
    API
     .post('/product',data)
     .then((response) => {
        console.log('success !!!',response.data);
     })
     .catch((error) => {
        if(error.response.status == 500){
            console.log(error.response.data.message);
        }
        console.log('error !!!',error.response);
     })
  }

  useEffect(() => {
    getProducts(dispatch);
    saveDB();

  }, []);

  if (isLoading) {
    return (
      <div className="products-wrapper">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="products-wrapper">
      <div className="products">
        {isLoaded &&
          productsList.map((data) => {
            return <ProductCard key={data.id} data={data} />;
          })}
      </div>
    </div>
  );
};

export default Home;
