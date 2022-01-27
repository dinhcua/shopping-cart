import { cartItemType } from "./../../App";
import { Dispatch } from "react";
import { GET_PRODUCTS } from "./productsType";
import axios from "axios";
interface getProductsAction {
  type: "GET_PRODUCTS";
  payload: cartItemType[];
}
export const getProducts = (products: cartItemType[]) => {
  return (dispatch: Dispatch<getProductsAction>) => {
    dispatch({
      type: GET_PRODUCTS,
      payload: products,
    });
  };
};

export const fetchAllProducts = () => {
  return function (dispatch: any) {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const products = response.data;
        console.log(products);

        dispatch(getProducts(products));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export type Action = getProductsAction;
