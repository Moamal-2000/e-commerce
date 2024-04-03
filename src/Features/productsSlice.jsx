import { createSlice } from "@reduxjs/toolkit";

const productsDataLocal = localStorage.getItem("productsSliceData");

const initialState = productsDataLocal
  ? JSON.parse(productsDataLocal)
  : {
      favoritesProducts: [],
      searchProducts: [],
      cartProducts: [],
      wishList: [],
      saveBillingInfoToLocal: false,
      loadingSearchProducts: true,
    };

const productsSlice = createSlice({
  initialState,
  name: "productsSlice",
  reducers: {
    updateState: (state, { payload: { key, value } }) => {
      state[key] = value;
    },
    addToArray: (state, { payload: { key, value } }) => {
      state[key].push(value);
    },
    removeById: (state, { payload: { key, id } }) => {
      const updatedState = state[key].filter((product) => product.id !== id);
      state[key] = updatedState;
    },
    setEmptyArrays: (state, { payload: { keys } }) => {
      for (let i = 0; i < keys.length; i++) state[keys[i]] = [];
    },
  },
});

export const { updateState, addToArray, removeById, setEmptyArrays } =
  productsSlice.actions;
export default productsSlice.reducer;
