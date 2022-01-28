import { createSlice } from "@reduxjs/toolkit";
interface cartItemType {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const initialState = {
  value: [] as cartItemType[],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.value.push(...action.payload);
    },
  },
});

export const { getProducts } = productsSlice.actions;

export default productsSlice.reducer;
