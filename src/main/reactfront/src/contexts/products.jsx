import React, { useReducer, createContext, useState } from "react";
import axios from "axios";
import API from '../api.js';

const initialState = {
  products: null,
  isLoading: false,
  isLoaded: false
};

export const ProductsStateContext = createContext();
export const ProductsDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_REQUEST":
      return {
        ...state,
        isLoading: true,
        isLoaded: false
      };
    case "GET_PRODUCTS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        products: action.payload.products
      };
    case "GET_PRODUCTS_FAILURE":
      return {
        ...state,
        products: null,
        isLoading: false,
        isLoaded: false
      };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ProductsDispatchContext.Provider value={dispatch}>
      <ProductsStateContext.Provider value={state}>
        {children}
      </ProductsStateContext.Provider>
    </ProductsDispatchContext.Provider>
  );
};
/*
json 으로 상품 가져오는 곳
*/
export const getProducts = (dispatch) => {
  dispatch({
    type: "GET_PRODUCTS_REQUEST"
  });

  const url =
    "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json";
  axios
    .get(url)
    .then((response) => {
      //console.log("response" + JSON.stringify(response.data));
      dispatch({
        type: "GET_PRODUCTS_SUCCESS",
        payload: {
          products: response.data
        }
      });
    })
    .catch((error) => {
      console.error(error);
      dispatch({
        type: "GET_PRODUCTS_FAILURE"
      });
    });
};



export default ProductsProvider;
