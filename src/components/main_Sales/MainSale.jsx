import ProductsContainer from "../ProductsContainer/ProductsContainer";
import { Typography, Box } from "@mui/material"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { allSales } from "../../redux/slice/SalesSlice";
import { Link } from "react-router-dom";

const MainSale = () => {
  const dispatch = useDispatch()
  useEffect(() => {

    dispatch(allSales());

  }, [dispatch]);
  const { data, isLoading, isError, message } = useSelector(
    (state) => state.sales
  );



  const Products = data.slice(0, 5)
  if (Products) {
    [...Products].sort((a, b) => (a.price > b.price) ? 1 : -1)

  }

  return (
    <Box sx={{
      padding: "40px 40px"

    }}>     <Box sx={{
      maxWidth: "100%",
      paddingBottom:"40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }}>
      <Typography variant="h2" fontSize="60px" fontWeight="700" >Sales</Typography>

      <Link style={{marginRight:"40px"}} to="/categories" >All Sales</Link>
    </Box>
      <ProductsContainer Products={Products} isLoading={isLoading} isError={isError} />

    </Box>
  )
}
export default MainSale