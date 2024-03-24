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
    addToArray: (state, { payload: { key, value } }) => {
      state[key].push(value);
    },
    removeById: (state, { payload: { key, id } }) => {
      const updatedCartProducts = state[key].filter(
        (product) => product.id !== id
      );
      state[key] = updatedCartProducts;
    },
  },
});

export const { updateState, addToArray, removeById } = productsSlice.actions;
export default productsSlice.reducer;
