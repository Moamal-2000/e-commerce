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
    updateState: (state, { payload }) => {
      const { key, value } = payload;
      return { ...state, [key]: value };
    },
    addToCart: ({ cartProducts }, { payload: { product } }) => {
      cartProducts.push(product);
    },

    removeFromCart: (state, { payload: { id } }) => {
      const updatedCartProducts = state.cartProducts.filter(product => product.id !== id)
      return {
        ...state,
        cartProducts: updatedCartProducts
      }
    },
  },
});

export const { updateState, addToCart, removeFromCart } = productsSlice.actions;
export default productsSlice.reducer;
