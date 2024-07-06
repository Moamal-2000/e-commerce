import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alert: {
    isAlertActive: false,
    alertText: "",
    alertState: "error",
  },

  confirm: {
    isAlertActive: false,
    alertText: "Are you sure?",
    alertState: "warning",
  },
};

const alertsSlice = createSlice({
  initialState,
  name: "alertsSlice",
  reducers: {
    showAlert: (state, { payload: { alertText, alertState, alertType } }) => {
      state[alertType].alertText = alertText;
      state[alertType].alertState = alertState;
      state[alertType].isAlertActive = true;
    },
    updateAlertState: (state, { payload: { key, value, type } }) => {
      state[type][key] = value;
    },
  },
});

export const { showAlert, updateAlertState } = alertsSlice.actions;
export default alertsSlice.reducer;
