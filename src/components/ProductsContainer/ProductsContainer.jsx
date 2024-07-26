import { Box, Typography, Button, CircularProgress } from "@mui/material";
import style from "../../pages/category/category.module.css"
import { Link } from "react-router-dom";


const ProductsContainer = ({ Products, isLoading, isError }) => {

  if (isLoading) {
    return <CircularProgress >Loading...</CircularProgress>;
  }
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <Box sx={{
      width: "100vw",
      display: "flex",
      flexWrap: "wrap",
      gap: "32px",
      justifyContent:"flex-start",
      paddingLeft:"20px",
      paddingBottom:"40px"

    }}>
      {Products &&
        Products.map((cart) => (
          <Link className="nodefault"  style={{ textDecoration: "none" }} key={cart.id} to={`/products/${cart.id}`}><Box sx={{
            width: "316px",
            height: "422px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "2px solid #DDDDDD",
            borderRadius: "15px",
            "&:hover": {
              transform: "scale(1.08)",
              transition: "0.3s ease-in-out"
            }

          }} >
            <Box className={style.container} sx={{
              width: "100%",
              height: "284px",
              position: "relative"



            }} >
              <img src={`http://localhost:3333${cart.image}`} style={{ width: "100%", height: "284px", border: "1px solid #DDDDD", borderRadius: "15px 15px 0 0" }} alt={cart.title} ></img>
              <Box sx={cart.discont_price ?
                {
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  color: "#fff",
                  fontSize: "20px",
                  fontWeight: "600",
                  backgroundColor: "#0D50FF",
                  padding: "4px 8px",
                  borderRadius: "5px"
                }
                : null}>
                {cart.discont_price ?
                  `-${Math.floor(((cart.price - cart.discont_price) / cart.price) * 100)}%`
                  : null}
              </Box>
              <Button className={style.btn} sx={{
                position: "absolute",
                bottom: "16px",
                left: "16px",
                padding: "16px 32px",
                width: "284px",
                backgroundColor: "#0D50FF",
                "&:hover": { backgroundColor: "#000" }


              }} variant="contained">Add to cart</Button>
            </Box>
            <Box sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}>
              <Typography sx={{
                fontSize: "20px",
                fontWeight: "500",
                width: "252px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"

              }}>{cart.title}</Typography>
              <Box sx={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                alignSelf: "start",
                padding: "0 32px"

              }}>
                <Typography variant="h3" fontSize="40px" fontWeight="600">{cart.discont_price ? `$${cart.discont_price}` : null}</Typography>
                <Typography variant="h5" fontSize="20px" alignSelf="flex-end" sx={cart.discont_price ? { textDecorationLine: "line-through", color: "#8B8B8B" } : { fontSize: "40px", fontWeight: "600" }} >${cart.price}</Typography>
              </Box>
            </Box>

          </Box>
          </Link>
        ))}
    </Box>
  )
}
export default ProductsContainer