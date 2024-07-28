import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./slice/categoriesSlice";
import salesSlice from "./slice/SalesSlice";
import productSlice from "./slice/productsSlice";
import cartSlice from "./slice/cartSlice";



export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    sales: salesSlice,
    products: productSlice,
    cart: cartSlice
  },
})