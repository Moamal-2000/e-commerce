import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOverlayActive: false,
  isMobileMenuActive: false,
  isProfileMenuActive: false,
  loadingCategoryPage: false,
  isSectionsMenuActive: false,
  isZoomInPreviewActive: false,
  loadingProductDetails: false,
  loadingSearchProducts: true,
  loadingProductsPage: true,
  previewImg: null,
  isToastAlertActive: false,
  toastAlertText: "",
  toastAlertState: "error",
};

const globalSlice = createSlice({
  initialState,
  name: "globalSlice",
  reducers: {
    updateGlobalState: (state, { payload: { key, value } }) => {
      state[key] = value;
    },
    showAlert: (state, { payload: { alertText, alertState } }) => {
      state.toastAlertText = alertText;
      state.toastAlertState = alertState;
      state.isToastAlertActive = true;
    },
  },
});

export const { updateGlobalState, showAlert } = globalSlice.actions;
export default globalSlice.reducer;
