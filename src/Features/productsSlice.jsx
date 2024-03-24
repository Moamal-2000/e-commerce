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
    removeFromCart: (state, { payload: { id } }) => {
      const updatedCartProducts = state.cartProducts.filter(
        (product) => product.id !== id
      );
      return {
        ...state,
        cartProducts: updatedCartProducts,
      };
    },
    addToArray: (state, { payload: { key, value } }) => {
      state[key].push(value);
    },
  },
});

export const { updateState, removeFromCart, addToArray } =
  productsSlice.actions;
export default productsSlice.reducer;
