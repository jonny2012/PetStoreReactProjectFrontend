import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./src/pages/Layout";
import Category from "./src/pages/category/Category";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<div>Home</div>} />
          <Route path="categories" element={<div>Catigories</div>} />
          <Route path="categories/:categoryId" element={<Category />} />
          <Route path="products/:productId" element={<div>Products</div>} />
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
