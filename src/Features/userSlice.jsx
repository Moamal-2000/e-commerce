import { createSlice } from "@reduxjs/toolkit";

const userDataLocal = window.localStorage.getItem("usersData");

const initialState = {
  loginInfo: {
    userName: "Lily Watson",
    emailOrPhone: "lily.wastons@gmail.com",
    password: "random-password1234",
  },
  usersData: [
    {
      userName: "Lily Watson",
      emailOrPhone: "lily.wastons@gmail.com",
      password: "random-password1234",
    },
  ],
};

const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    setLoginData: (state, { payload }) => {
      state.loginInfo = { ...state.loginInfo, ...payload };
      state.usersData = [...state.usersData, payload];
      window.localStorage.setItem("usersData", JSON.stringify(state.usersData));
    },
  },
});

export const { setLoginData } = userSlice.actions;
export default userSlice.reducer;
