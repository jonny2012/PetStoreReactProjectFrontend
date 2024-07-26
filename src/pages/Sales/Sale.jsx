import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Box, CircularProgress } from "@mui/material";
import { allSales } from "../../redux/slice/SalesSlice";
import Sorting from "../../components/Sorting";
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";




const Sales = () => {
  const dispatch = useDispatch();
  const [sortedProducts, setSortedProducts] = useState([])


  const { data, isLoading, isError, message } = useSelector(
    (state) => state.sales
  );

  useEffect(() => {

    dispatch(allSales());

  }, [dispatch]);

  const Products = data



  if (isLoading) {
    return <CircularProgress style={{ margin: "0 auto" }} >Loading...</CircularProgress>;
  }
  if (isError) {
    return <div>{message.message}</div>;
  }

  const checkbox = false

  return (


    <Box >

      <Typography variant="h2" fontSize="64px" paddingBottom="40px" fontWeight="700">Discounted Items</Typography>
      <Sorting Products={Products} setFilteredProducts={setSortedProducts} display_checkbox={checkbox} filteredProducts={sortedProducts} />

      <ProductsContainer

        Products={sortedProducts}
      />

    </Box>


  )
}
export default Sales