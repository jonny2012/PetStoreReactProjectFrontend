import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { categoryById } from "../../redux/slice/categoriesSlice.js";
import { Typography, Box, CircularProgress } from "@mui/material";
import Sorting from "../../components/Sorting.jsx";
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer.jsx";
import { useState, useEffect } from "react";
import PagesLinks from "../../components/PagesLinks.jsx";

const Category = () => {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    dispatch(categoryById(categoryId));
  }, [categoryId, dispatch]);

  const { categoryData, isLoading, isError, message } = useSelector(
    (state) => state.categories
  );


  const categoryTitle = categoryData?.category?.title;

  const Products = categoryData?.data;


  if (isLoading) {
    return <CircularProgress >Loading...</CircularProgress>;
  }

  if (isError) {
    return <div>{message.message}</div>;
  }
  const Links = [
    { title: 'Main Page', link: '/home' },
    { title: 'Categories', link: '/categories' },
    { title: `${categoryTitle}`, link: `/categories/${categoryData?.category?.id}` }
  ];



  return (
    <Box >
<PagesLinks links={Links}/>
      <Typography variant="h2" fontSize="64px" fontWeight="700" paddingBottom="30px">{categoryTitle}</Typography>
      <Sorting Products={Products} setFilteredProducts={setFilteredProducts} filteredProducts={filteredProducts} />
      <ProductsContainer Products={filteredProducts} />
    </Box>
  );
};

export default Category;
