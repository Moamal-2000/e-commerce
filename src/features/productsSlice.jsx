import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addedProducts: 0,
  addedFavorites: 0,
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
