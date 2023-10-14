import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  isOverlayActive: false,
  isMobileMenuActive: false,
}

const globalSlice = createSlice({
  initialState,
  name: "globalSlice",
  reducers: {
    toggleOverlay: (state, action) => {
      return {...state, isOverlayActive: action.payload};
    },
    toggleMobileMenu: (state, action) => {
      return {...state, isMobileMenuActive: action.payload};
    },
  }
});

// function handleReducers() {
//   return {
//     toggleOverlay: (state) => {
//       return state;
//     },
//   };
// }

export const { toggleOverlay, toggleMobileMenu } = globalSlice.actions;
export default globalSlice.reducer;
