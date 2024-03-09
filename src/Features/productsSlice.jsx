import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";
import { redJoystick, wiredKeyboard } from "../Assets/Images/Images";

const initialState = {
  favoritesProducts: [],
  cartProducts: [
    {
      shortName: "HI Gamepad",
      name: "HAVIT HV-G92 Gamepad",
      price: 160,
      discount: 40,
      afterDiscount: 120,
      addedDate: "2024/2/2",
      img: redJoystick,
      rate: 5,
      votes: 88,
      sold: 105,
      id: uuid(),
    },
    {
      shortName: "AK-9000 Keyboard",
      name: "AK-900 Wired Keyboard",
      price: 1160,
      discount: 35,
      afterDiscount: 960,
      addedDate: "2024/3/7",
      img: wiredKeyboard,
      rate: 4,
      votes: 75,
      sold: 210,
      id: uuid(),
    },
  ],
  wishList: [],
  totalOrdersPrice: 0,
};

const productsSlice = createSlice({
  initialState,
  name: "productsSlice",
  reducers: {
    addProduct: (state, action) => {
      return { ...state };
    },
    updateState: (state, { payload }) => {
      const { key, value } = payload;
      return { ...state, [key]: value };
    },
  },
});

export const { addProduct, updateState } = productsSlice.actions;
export default productsSlice.reducer;
