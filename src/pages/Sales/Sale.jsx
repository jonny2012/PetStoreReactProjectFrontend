import { useEffect , useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {  Typography,Box, CircularProgress} from "@mui/material";
import { allSales } from "../../redux/slice/SalesSlice";
import Sorting from "../../components/Sorting";
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";
import { useTheme } from "@emotion/react";
import {useMediaQuery} from "@mui/material";

const Sales = () => {
  const dispatch = useDispatch();
  const [sortedProducts, setSortedProducts] = useState([])
  const theme = useTheme()
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { data, isLoading, isError, message } = useSelector(
    (state) => state.sales
  );

  useEffect(() => {
 
    dispatch(allSales());
 
}, [dispatch]);

const Products = data



  if (isLoading) {
    return <CircularProgress style={{margin:"0 auto"}} >Loading...</CircularProgress>;
  }
  if (isError) {
    return <div>{message.message}</div>;
  }

 const checkbox = false

  return (


    <Box >

    <Typography variant="h2" fontSize={isMobile ? "30px":"64px" && isTablet ? "42px":"64px"} paddingBottom="40px" fontWeight="700">Discounted Items</Typography>
    <Sorting Products={Products} setFilteredProducts={setSortedProducts}  filteredProducts={sortedProducts}/>
    <ProductsContainer 
     Products={sortedProducts}
    />

  </Box> 


  )
}
export default Sales