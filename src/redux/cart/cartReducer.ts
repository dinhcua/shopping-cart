import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartType";
import { cartItemType } from "../../App";
import { Action } from "./cartAction";
const initialState = [] as cartItemType[];

const cartReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const isItemInCart = state.find((item) => item.id === action.payload.id);
      if (isItemInCart) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }

      return [...state, { ...action.payload, amount: 1 }];
    case REMOVE_FROM_CART:
      return state.reduce((ack, item) => {
        if (item.id === action.payload) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as cartItemType[]);

    default:
      return state;
  }
};

export default cartReducer;
