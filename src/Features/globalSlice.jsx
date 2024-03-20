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
    toggleState: (state, action) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
    updateState: (state, { payload }) => {
      return {
        ...state,
        [payload.key]: payload.value,
      };
    },
  },
});

export const { toggleState, updateState } = globalSlice.actions;
export default globalSlice.reducer;
