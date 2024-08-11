import { createSlice } from "@reduxjs/toolkit";

const localStorageData = localStorage.getItem("storageSliceData");

const initialState = localStorageData
  ? JSON.parse(localStorageData)
  : {
      showWhatDoIDoIcon: true,
    };

export const storageSlice = createSlice({
  initialState,
  name: "storageSliceData",
  reducers: {
    updateStorageState: (state, { payload: { key, value } }) => {
      state[key] = value;
    },
  },
});

export const { updateStorageState } = storageSlice.actions;
export default storageSlice.reducer;
