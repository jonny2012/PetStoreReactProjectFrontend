import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allCategories } from "../../redux/slice/categoriesSlice.js";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react"
import { useMediaQuery } from "@mui/material"

const MainCategories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allCategories());
  }, [dispatch]);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const { categories, isLoading, isError, message } = useSelector(
    (state) => state.categories
  );


  const categoryTitle = categories?.category?.title


  const categoryProducts = categories?.slice(0,5)


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{message.message}</div>;
  }

  return (

    <Box sx={{  maxWidth: "100%",  padding:" 80px 40px" }}>
      <Box sx={{
        maxWidth: "100%",
        paddingBottom:"40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        <Typography variant="h2" fontSize={isTablet? "28px":"64"} fontWeight="700" >Categories</Typography>

        <Link style={{marginRight:"40px"}} to="/categories" >All categories</Link>
      </Box>
      <Box sx={{
        width: "100%",
        paddingTop:"10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        columnGap: "30px",
        rowGap:"60px",


      }} >
        {categoryProducts &&
          categoryProducts.map((product) => (
           <Link key={product.id} style={{textDecoration:"none", color:"#000", ":hover":{color:"#0D50FF"}}} to={`/categories/${product.id}`}><Box sx={{
              textAlign:"center",
              "&:hover":{transform:"scale(1.05)",
                transition:"0.3s ease-in-out"
      }
            }} key={product.id}>

              <Box>
                <img src={`http://localhost:3333${product.image}`}
                  style={{
                    width: "316px",
                    height: "392px",
                    borderRadius: "5px",
                    imageRendering: "auto"
                  }} alt="img" />
              </Box>
              <Typography sx={{fontSize:"20px", fontWeight:"500"}}>{product.title}</Typography>
            </Box>
            </Link>
          ))}
      </Box>
    </Box>


  )
}
export default MainCategories