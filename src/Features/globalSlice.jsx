import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOverlayActive: false,
  isMobileMenuActive: false,
  isProfileMenuActive: false,
  isSectionsMenuActive: false,
  isZoomInPreviewActive: false,
  loadingProductDetails: false,
  loadingSearchProducts: true,
  loadingProductsPage: true,
  previewImg: null,
};

const globalSlice = createSlice({
  initialState,
  name: "globalSlice",
  reducers: {
    toggleState: (state, action) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
    updateGlobalState: (state, { payload }) => {
      return {
        ...state,
        [payload.key]: payload.value,
      };
    },
  },
});

export const { toggleState, updateGlobalState } = globalSlice.actions;
export default globalSlice.reducer;
