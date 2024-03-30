import { createSlice } from "@reduxjs/toolkit";

const initialStateLocal = localStorage.getItem("userSliceData");

const initialState = initialStateLocal
  ? JSON.parse(initialStateLocal)
  : {
      loginInfo: {
        username: "",
        emailOrPhone: "",
        password: "",
        isSignIn: true,
      },
      usersData: [
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
      state.usersData = payload;
      state.loginInfo.isSignIn = true;
    },
    setLoginData: (state, { payload }) => {
      state.loginInfo = { ...payload };
      state.loginInfo.isSignIn = true;
    },
    signOut: (state, _) => {
      state.loginInfo = {
        username: "Guest",
        emailOrPhone: "",
        password: "",
      };
      state.loginInfo.isSignIn = false;
    },
    updateUserData: ({ loginInfo }, { payload }) => {
      Object.assign(loginInfo, payload.updatedUserData);
    },
  },
});

export const { newSignUp, setLoginData, signOut, updateUserData } =
  userSlice.actions;
export default userSlice.reducer;
