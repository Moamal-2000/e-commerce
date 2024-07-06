import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOverlayActive: false,
  isMobileMenuActive: false,
  isProfileMenuActive: false,
  isSectionsMenuActive: false,
  isZoomInPreviewActive: false,
  previewImg: null,
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
  },
});

export const { updateGlobalState, multiUpdateGlobalState } =
  globalSlice.actions;
export default globalSlice.reducer;
