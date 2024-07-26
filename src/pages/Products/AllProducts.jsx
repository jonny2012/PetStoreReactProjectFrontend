import { useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography,Box, CircularProgress } from "@mui/material";
import { productsAll } from "../../redux/slice/productsSlice";
import Sorting from "../../components/Sorting";
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";
import { useState } from "react";
import PagesLinks from "../../components/PagesLinks";

const AllProducts = () => {
  const dispatch = useDispatch();

  const [filteredProducts, setFilteredProducts] = useState([]);


  const { productsData, isLoading, isError, message } = useSelector(
    (state) => state.products
  );

  useEffect(() => {

    dispatch(productsAll());

  }, [dispatch]);


  const Products = productsData

  

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{message.message}</div>;
  }

 

  if (isLoading) {
    return <CircularProgress >Loading...</CircularProgress>;
  }
  if (isError) {
    return <div>{message.message}</div>;
  }
  const Links = [
    { title: 'Main Page', link: '/home' },
    { title: 'All Products', link: `/products/all` },
  ];
  const checkbox = true

  const input_styles = { width: "112px", border: "1px solid #DDD", padding: "8px 16px", borderRadius: "10px" }
  return (


    <Box maxWidth="false" >
<PagesLinks links={Links}/>
      <Typography variant="h2" fontSize="64px" paddingLeft="30px" fontWeight="700">All Products</Typography>
 <Sorting  Products={Products} display_checkbox={checkbox} setFilteredProducts={setFilteredProducts} filteredProducts={filteredProducts}/>

      <ProductsContainer Products={filteredProducts} isLoading={isLoading} isError={isError} />
    </Box>


  )
}
export default AllProducts