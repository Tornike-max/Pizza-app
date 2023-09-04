import { configureStore } from "@reduxjs/toolkit";
import detailsSlice from "./features/details/detailsSlice";
import cartSlice from "./features/cart/cartSlice";
import userSlice from "./features/user/userSlice";

const store = configureStore({
  reducer: {
    detail: detailsSlice,
    cart: cartSlice,
    user: userSlice,
  },
});

export default store;
