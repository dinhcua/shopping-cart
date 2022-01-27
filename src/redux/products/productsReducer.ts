import { cartItemType } from "./../../App";
import { GET_PRODUCTS } from "./productsType";
import { Action } from "./productsAction";
const initialState = {
  loading: true,
  products: [] as cartItemType[],
  error: "",
};

const productsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { loading: false, error: "", products: action.payload };
    default:
      return state;
  }
};

export default productsReducer;
