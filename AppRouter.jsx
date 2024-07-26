import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./src/pages/Layout";
import Category from "./src/pages/category/CategoryProducts";
import Header from "./src/components/header/Header";
import Categories from "./src/pages/categories/Categories";
import Sales from "./src/pages/Sales/Sale";
import AllProducts from "./src/pages/Products/AllProducts";
import ProductPage from "./src/pages/ProductPage/ProductPage";
import Footer from "./src/components/footer/Footer";
import Basket from "./src/pages/shoppingBasket/Basket";
import { useState } from "react";




const AppRouter = () => {
  const [data, setData] = useState({
    image: "",
    title:"",
    price: null,
    discont_price:null,
    discont_percent:""

  })

  return (

    <BrowserRouter>
    <Header/>

      <Routes>
        <Route path="/home" element={<Layout />}/>   
          <Route path="/categories" element={<Categories/>} />
          <Route path="/categories/:categoryId" element={<Category/>} />
          <Route path="/products/all" element={<AllProducts/>} />
          <Route path="/sales/all" element={<Sales />} />
          <Route path="*" element={<div>Not Found</div>} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/shoppingbasket" element={<Basket/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default AppRouter;
