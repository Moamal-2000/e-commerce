import { createSlice } from "@reduxjs/toolkit";

const userDataLocal = localStorage.getItem("usersData");

const initialState = {
  loginInfo: {
    username: "Lily Watson",
    emailOrPhone: "lily.wastons@gmail.com",
    password: "random-password1234",
  },
  usersData: userDataLocal
    ? JSON.parse(userDataLocal)
    : [
        {
          username: "Lily Watson",
          emailOrPhone: "lily.wastons@gmail.com",
          password: "random-password1234",
        },
      ],
};

const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    newSignUp: (state, { payload }) => {
      state.usersData = [ ...state.usersData, {...payload} ];
      window.localStorage.setItem("usersData", JSON.stringify(state.usersData));
    },
    setLoginData: (state, { payload }) => {
      state.loginInfo = { ...state.loginInfo, ...payload };
      state.usersData = [...state.usersData, payload];
      window.localStorage.setItem("usersData", JSON.stringify(state.usersData));
    },
  },
});

export const { newSignUp, setLoginData } = userSlice.actions;
export default userSlice.reducer;
