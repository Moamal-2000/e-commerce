import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginInfo: {
    userName: "Lily Watson",
    emailOrPhone: "lily.wastons@gmail.com",
    password: "random-password1234",
  },
};

const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    setLoginData: (state, { payload }) => {
      Object.assign(state.loginInfo, payload);
    },
  },
});

export const { setLoginData } = userSlice.actions;
export default userSlice.reducer;
