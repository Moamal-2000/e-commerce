import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "../Features/globalSlice";
import productsSlice from "../Features/productsSlice";
import userSlice from "../Features/userSlice";

export const store = configureStore({
  reducer: {
    global: globalSlice,
    user: userSlice,
    products: productsSlice,
  },
});
