import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "Lily Watson",
}

const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {

  }
})

// export const {} = userSlice.actions
export default userSlice.reducer