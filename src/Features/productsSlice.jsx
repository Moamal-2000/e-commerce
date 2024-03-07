import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoritesProducts: [],
  cartProducts: [],
  wishList: [],
};

const productsSlice = createSlice({
  initialState,
  name: "productsSlice",
  reducers: {
    addProduct: (state, action) => {
      return {...state};
    },
  },
});

export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;
