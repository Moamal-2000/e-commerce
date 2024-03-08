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
      return {...state};
    },
    updateState: (state, {payload}) => {
      const {key, value} = payload
      return {...state, [key]: value}
    }
  },
});

export const { addProduct, updateState } = productsSlice.actions;
export default productsSlice.reducer;
