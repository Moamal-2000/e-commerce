import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loadingCategoryPage: false,
  loadingProductDetails: false,
  loadingSearchProducts: true,
  loadingProductsPage: true,
};

const loadingSlice = createSlice({
  initialState,
  name: "loadingSlice",
  reducers: {
    updateLoadingState: (state, { payload: { key, value } }) => {
      state[key] = value;
    },
  },
});

export const { updateLoadingState } = loadingSlice.actions;
export default loadingSlice.reducer;
