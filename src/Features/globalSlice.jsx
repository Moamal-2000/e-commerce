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

  numberOfShowedAlerts: 0,
  isToastAlertActive: false,
  toastAlertText: "",
  toastAlertState: "error",

  isToastConfirmActive: false,
  toastConfirmText: "Are you sure?",
  toastConfirmState: "warning",
};

const globalSlice = createSlice({
  initialState,
  name: "globalSlice",
  reducers: {
    multiUpdateGlobalState: (state, { payload }) => {
      Object.assign(state, payload);
    },
    updateGlobalState: (state, { payload: { key, value } }) => {
      state[key] = value;
    },
    showAlert: (state, { payload: { alertText, alertState } }) => {
      state.toastAlertText = alertText;
      state.toastAlertState = alertState;
      state.isToastAlertActive = true;
      state.numberOfShowedAlerts = ++state.numberOfShowedAlerts;
    },
    showConfirm: (state, { payload: { confirmText, confirmState } }) => {
      state.toastConfirmText = confirmText;
      state.toastConfirmState = confirmState;
      state.isToastConfirmActive = true;
    },
  },
});

export const {
  updateGlobalState,
  showAlert,
  showConfirm,
  multiUpdateGlobalState,
} = globalSlice.actions;
export default globalSlice.reducer;
