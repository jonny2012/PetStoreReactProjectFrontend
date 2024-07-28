import { Box, Typography, Button, CircularProgress, useMediaQuery, useTheme } from "@mui/material";
import style from "../../pages/Category/category.module.css"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice/cartSlice";

const ProductsContainer = ({ Products, isLoading, isError }) => {
  const dispatch = useDispatch();

  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (isLoading) {
    return <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
      <CircularProgress />
    </Box>;
  }

  if (isError) {
    return <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
      <Typography color="error">Error loading products</Typography>
    </Box>;
  }

  const handleAddToCart = (product) => (e) => {
    e.preventDefault();
    const item = {
      id: product.id,
      title: product.title,
      price: product.price,
      discont_price: product.discont_price,
      image: product.image,
      quantity: 1,
    }
    dispatch(addToCart(item));
  };

  return (
    <Box sx={{
      width: "100vw",
      display: "flex",
      flexWrap: "wrap",
 
      gap: isMobile ? "32px" : "32px", 
      justifyContent: isMobile ? "center" : "center", 
      paddingLeft: isMobile ? "10px" : "20px", 
      paddingBottom: "40px"
    }}>
      {Products && Products.map((product) => (
        <Link className="nodefault" style={{ textDecoration: "none" }} key={product.id} to={`/products/${product.id}`}>
          <Box sx={{
            width: isMobile ? "60vw" : isTablet ? "45vw" : "316px",
            height: isMobile ? "auto" : "422px", 
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "2px solid #DDDDDD",
            borderRadius: "15px",
            "&:hover": {
              transform: "scale(1.08)",
              transition: "0.3s ease-in-out"
            }
          }}>
            <Box className={style.container} sx={{
              width: "100%",
              height: isMobile ? "auto" : "284px", 
              position: "relative"
            }}>
              <img src={`http://localhost:3333${product.image}`} style={{
                width: "100%",
                height: isMobile ? "auto" : "284px", 
                border: "1px solid #DDDDD",
                borderRadius: "15px 15px 0 0",
                objectFit: "contain" 
              }} alt={product.title} />
              {product.discont_price && (
                <Box sx={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  color: "#fff",
                  fontSize: "20px",
                  fontWeight: "600",
                  backgroundColor: "#0D50FF",
                  padding: "4px 8px",
                  borderRadius: "5px"
                }}>
                  {`-${Math.floor(((product.price - product.discont_price) / product.price) * 100)}%`}
                </Box>
              )}
              <Button className={style.btn} onClick={handleAddToCart(product)} sx={{
                position: "absolute",
                zIndex: 100,
                bottom: "16px",
                left: "10px",
                padding: isMobile ? "12px 24px" : "16px 32px", 
                width: isMobile ? "95%" : "284px", 
                backgroundColor: "#0D50FF",
                "&:hover": { backgroundColor: "#000" }
              }} variant="contained">Add to cart</Button>
            </Box>
            <Box sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "16px" 
            }}>
              <Typography sx={{
                fontSize: isMobile ? "16px" : "20px", 
                fontWeight: "500",
                width: isMobile ? "80%" : "252px", 
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
              }}>{product.title}</Typography>
              <Box sx={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                alignSelf: "start",
                padding: isMobile ? "0 16px" : "0 32px" 
              }}>
                <Typography variant="h3" fontSize="40px" fontWeight="600">{product.discont_price ? `$${product.discont_price}` : null}</Typography>
                <Typography variant="h5" fontSize="20px" alignSelf="flex-end" sx={product.discont_price ? { textDecorationLine: "line-through", color: "#8B8B8B" } : { fontSize: "40px", fontWeight: "600" }} >${product.price}</Typography>
              </Box>
            </Box>
          </Box>
        </Link>
      ))}
    </Box>
  )
}



export default ProductsContainer