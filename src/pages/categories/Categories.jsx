import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allCategories } from "../../redux/slice/categoriesSlice.js";
import { Box, Typography, CircularProgress} from "@mui/material";
import { Link } from "react-router-dom";
import PagesLinks from "../../components/PagesLinks.jsx";


const Categories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allCategories());
  }, [dispatch]);

  const { categories, isLoading, isError, message } = useSelector(
    (state) => state.categories );


  const categoryTitle = categories?.category?.title

  const categoryProducts = categories

  if (isLoading) {
    return <CircularProgress >Loading...</CircularProgress>;
  }

  if (isError) {
    return <div>{message.message}</div>;
  }
  const Links = [
    { title: 'Main Page', link: '/home' },
    { title: 'Categories', link: '/categories' }
  ];

  return (
    <Box display="flex" flexDirection="column">
      <PagesLinks links={Links} />
    <Box sx={{ width: "100vw", maxWidth: "100%" }}>
      <Box sx={{
        maxWidth: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        
      }}>
        <Typography fontWeight="700" fontSize="64px" marginLeft="40px" variant="h2">Categories</Typography>
      </Box>
      <Box sx={{

        display: "flex",
        flexDirection: "row",
        justifyContent:"center",
        flexWrap: "wrap",
        padding: "40px 20px",
        columnGap: "30px",
        rowGap:"60px",


      }} >
        {categoryProducts &&
          categoryProducts.map((product) => (
            
            <Link key={product.id} style={{textDecoration:"none", color:"#000", ":hover":{color:"#fff"}}} to={`/categories/${product.id}`}> <Box  sx={{
              textAlign:"center",
              "&:hover":{
                transform:"scale(1.05)",
                transition:"0.3s ease-in-out"
              }
              
            }} key={product.id}>

              <Box>
                <img src={`http://localhost:3333${product.image}`}
                  style={{
                    
                    width: "312px",
                    height: "392px",
                    borderRadius: "5px",
                    imageRendering: "auto",
                    marginBottom:"15px"
                  }} alt="img" />
              </Box>
              <Typography sx={{fontSize:"20px", fontWeight:"500"}}>{product.title}</Typography>
            </Box>
            </Link>
          ))}
      </Box>
    </Box>
</Box>

  )
}
export default Categories