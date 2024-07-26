import ProductsContainer from "../ProductsContainer/ProductsContainer";
import { Typography, Box } from "@mui/material"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { allSales } from "../../redux/slice/SalesSlice";

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

    }}> <Typography variant="h2" fontWeight="600" paddingBottom="40px">Sales</Typography>

      <ProductsContainer Products={Products} isLoading={isLoading} isError={isError} />

    </Box>
  )
}
export default MainSale