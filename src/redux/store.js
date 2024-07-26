import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./slice/categoriesSlice";
import salesSlice from "./slice/SalesSlice";
import productSlice from "./slice/productsSlice";


export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    sales: salesSlice,
    products: productSlice
    // cart: dummy
  },
})