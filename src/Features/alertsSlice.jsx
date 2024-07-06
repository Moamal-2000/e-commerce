import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberOfShowedAlerts: 0,
  isToastAlertActive: false,
  toastAlertText: "",
  toastAlertState: "error",

  isToastConfirmActive: false,
  toastConfirmText: "Are you sure?",
  toastConfirmState: "warning",
};

const alertsSlice = createSlice({
  initialState,
  name: "alertsSlice",
  reducers: {
    showAlert: (state, { payload: { alertText, alertState } }) => {
      state.toastAlertText = alertText;
      state.toastAlertState = alertState;
      state.isToastAlertActive = true;
      // state.numberOfShowedAlerts = ++state.numberOfShowedAlerts;
    },
  },
});

export const {showAlert} = alertsSlice.actions;
export default alertsSlice.reducer;
