import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./slice/categoriesSlice";


export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    // products: dummy,
    // cart: dummy
  },
})