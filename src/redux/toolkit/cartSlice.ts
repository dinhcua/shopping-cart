import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<cartItemType>) => {
      const isItemInCart = state.value.find(
        (item) => item.id === action.payload.id
      );
      if (isItemInCart) {
        state.value = state.value.map((item) =>
          item.id === action.payload.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      } else {
        state.value = [...state.value, { ...action.payload, amount: 1 }];
      }
    },
    removeFromCart: (state, action) => {
      state.value = state.value.reduce((ack, item) => {
        if (item.id === action.payload) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as cartItemType[]);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
