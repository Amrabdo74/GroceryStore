import { configureStore } from "@reduxjs/toolkit";
import prodectsSlice from "./slices/prodects-slice";
import cartSlice from "./slices/cartSlice";
import cartNav from "./slices/cartNav";
export const store = configureStore({
  reducer:{
    prodects:prodectsSlice,
    cart : cartSlice,
    carNav:cartNav
  }
});
