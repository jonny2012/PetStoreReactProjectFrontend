import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./src/pages/Layout";
import Category from "./src/pages/Category/CategoryProducts";
import Header from "./src/components/Header/Header";
import Categories from "./src/pages/Categories/Categories";
import Sales from "./src/pages/Sales/Sale";
import AllProducts from "./src/pages/Products/AllProducts";
import ProductPage from "./src/pages/ProductPage/ProductPage";
import Footer from "./src/components/Footer/Footer";
import ProductBasket from "./src/pages/shoppingBasket/ProductsBasket";
import ErrorPage from "./src/pages/ErrorPage/ErrorPage";




const AppRouter = () => {


  return (

    <BrowserRouter>
    <Header/>

      <Routes>
        <Route path="/home" element={<Layout />}/>   
          <Route path="/categories" element={<Categories/>} />
          <Route path="/categories/:categoryId" element={<Category/>} />
          <Route path="/products/all" element={<AllProducts/>} />
          <Route path="/sales/all" element={<Sales />} />
          <Route path="*" element={<ErrorPage/>} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/shoppingbasket" element={<ProductBasket/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default AppRouter;
