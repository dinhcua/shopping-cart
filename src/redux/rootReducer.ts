import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import productsReducer from "./products/productsReducer";
const reducers = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

export default reducers;

export type StateType = ReturnType<typeof reducers>;
