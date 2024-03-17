import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOverlayActive: false,
  isMobileMenuActive: false,
  isProfileMenuActive: false,
  isSectionsMenuActive: false,
};

const globalSlice = createSlice({
  initialState,
  name: "globalSlice",
  reducers: {
    toggleState: (state, action) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
  },
});

export const { toggleState } = globalSlice.actions;
export default globalSlice.reducer;
