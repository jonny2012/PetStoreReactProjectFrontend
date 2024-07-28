import { Box, Typography, Button, Input } from "@mui/material"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import OrderDetails from "../../components/OrderDetails/OrderDetails"
import { cartRemove } from "../../redux/slice/cartSlice"
import { useTheme } from "@emotion/react"
import { useMediaQuery } from "@mui/material"
import CartItemMobile from "./BasketItem"

const ProductBasket = () => {
  const ProductsList = useSelector((state) => state.cart.cart)
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)

  const incrementQuantity = () => {
    cart
      ? dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
      : setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (item.quantity > 1) {
      cart
        ? dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
        : setQuantity(quantity - 1);
    } else {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }
  }


  const deleteItem = (id) => {
    dispatch(cartRemove(id))
    updateCount()
  }

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}      >
        <Typography variant="h2" fontWeight="700" padding="40px">Shopping Cart</Typography>
      </Box>
      <Box marginBottom="80px" display="flex" flexDirection={isTablet ? "column" : "row"} width="98vw">

        <Box sx={ProductsList.length ? {
          display: 'flex',
          flexDirection: 'column',
          height: "auto",
          width: "1000px",
          overflowY: "scroll",
          gap: '16px'
        } : null}>

          {ProductsList.length === 0 ? (
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '30px',
              paddingLeft: "40px"
            }}>
              <Typography>Looks like you have no items in your basket currently.</Typography>
              <Link to="/products/all"><Button variant="contained" sx={{ padding: "8px 14px" }}  >Continue shopping</Button></Link>
            </Box>
          ) : (
            ProductsList.map((product) => (
              isSmallScreen ? <CartItemMobile
                item={product}


              /> :
                <Box key={product.id}

                  width="90%"
                  height="200px"
                  display="flex"
                  gap="40px"
                  margin="40px"
                  position="relative"
                  border="1px solid #ddd">
                  <Button
                    onClick={() => deleteItem(product.id)}
                    sx={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      color: "#000"
                    }}>X</Button>
                  <Box width="200px" >
                    <img style={{ width: "200px", height: "200px" }} src={`http://localhost:3333${product.image}`} alt="" />
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", padding: "32px 32px 32px 0" }}>

                    <Typography variant="h5">{product.title}</Typography>
                    <Box>
                      <Box sx={{ width: "50%", display: "flex", flexDirection: "row", gap: "32px" }}>
                        <Box sx={{ display: "flex", gap: "30px" }}>
                          <Box width="210px" display="flex">
                            <Button onClick={decrementQuantity} sx={{
                              padding: "17px",
                              border: "1px solid #ddd"
                            }}>
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19" stroke="#8B8B8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </Button> <Typography sx={{
                              paddingLeft: "30px",
                              fontSize: "20px",
                              fontWeight: "500",
                              border: "1px solid #ddd"
                            }} disableUnderline aria-disabled width="96px" height="58px" >{quantity ? quantity : product.quantity}</Typography><Button onClick={incrementQuantity} sx={{ border: "1px solid #ddd" }} ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5 12H19" stroke="#8B8B8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M12 5V19" stroke="#8B8B8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            </Button>
                          </Box>
                          <Typography variant="h3" fontSize="64px" alignSelf="center" fontWeight="700">{product.discont_price ? `$${product.discont_price}` : null}</Typography>
                          <Typography variant="h5" alignSelf="flex-end" sx={product.discont_price ? { textDecorationLine: "line-through", alignSelf: "flex-end", fontSize: "40px", lineHeight: "40px", color: "#8B8B8B" } : { fontSize: "64px", fontWeight: "600" }} >${product.price}</Typography>

                        </Box>

                      </Box>
                    </Box>
                  </Box>
                </Box>

            )))}
        </Box>
        <OrderDetails ProductsList={ProductsList} />
      </Box>
    </>
  )
}
export default ProductBasket