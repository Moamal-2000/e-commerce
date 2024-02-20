import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "../features/globalSlice";
import userSlice from "../features/userSlice";
import productsSlice from "../features/productsSlice";

export const store = configureStore({
  reducer: {
    global: globalSlice,
    user: userSlice,
    products: productsSlice,
  }
})
