import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoritesProducts: [],
  cartProducts: [],
  wishList: [],
  totalOrdersPrice: 0,
};

const productsSlice = createSlice({
  initialState,
  name: "productsSlice",
  reducers: {
    addProduct: (state, action) => {
      return { ...state };
    },
    updateState: (state, { payload }) => {
      const { key, value } = payload;
      return { ...state, [key]: value };
    },
    addToCart: ({ cartProducts }, { payload: { product } }) => {
      cartProducts.push(product);
    },
  },
});

export const { addProduct, updateState, addToCart } = productsSlice.actions;
export default productsSlice.reducer;
