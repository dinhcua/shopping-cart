import { Dispatch } from "redux";
import { cartItemType } from "../../App";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartType";
interface addToCartAction {
  type: "ADD_TO_CART";
  payload: cartItemType;
}

interface removeFromCartAction {
  type: "REMOVE_FROM_CART";
  payload: number;
}

export const addToCart = (item: cartItemType) => {
  return (dispatch: Dispatch<addToCartAction>) => {
    dispatch({
      type: ADD_TO_CART,
      payload: item,
    });
  };
};

export const removeFromCart = (id: number) => {
  return (dispatch: Dispatch<removeFromCartAction>) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: id,
    });
  };
};

export type Action = addToCartAction | removeFromCartAction;
