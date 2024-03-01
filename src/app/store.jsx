import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "../Features/globalSlice";
import userSlice from "../Features/userSlice";
import productsSlice from "../Features/productsSlice";

export const store = configureStore({
  reducer: {
    global: globalSlice,
    user: userSlice,
    products: productsSlice,
  }
})
