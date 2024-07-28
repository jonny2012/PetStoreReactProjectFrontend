import { useDispatch, useSelector } from "react-redux";
import { useState, useMemo } from "react";
import { Typography, Box, Stack, TextField, Button, Dialog, DialogActions, DialogContent, } from "@mui/material";
import { sendOrder } from "../../redux/slice/cartSlice";

const OrderDetails = ({ ProductsList }) => {

  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.cart)
  const [open, setOpen] = useState(false);


  const totalPrice = useMemo(() => {
    return ProductsList.reduce((acc, item) => {
      const price = item.discont_price ? item.discont_price : item.price
      return acc + parseFloat(price) * item.quantity
    }, 0).toFixed(2)
  }, [ProductsList])

  const totalItems = useMemo(() => {
    return ProductsList.reduce((acc, item) => acc + item.quantity, 0);
  }, [ProductsList])

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submittedData, setSubmittedData] = useState();



  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  }

  const handleConfirmOrder = (e) => {
    e.preventDefault();
      setSubmittedData({ name, email, phone });
      setName('');
      setEmail('');
      setPhone('');
      const clientData = { name, email, phone };
      dispatch(sendOrder(cartItems, clientData)),

      console.log(cartItems);
      handleClickOpen();
    }

  return (
    <>
      {ProductsList.length > 0 && (
        <Box sx={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          width: "550px",
          gap: '20px',
          alignSelf: 'flex-start',
          backgroundColor: 'rgba(241, 243, 244, 1)'
        }}>
          <Stack spacing={2} >
            <Typography variant='h3' sx={{ fontWeight: '700' }}>Order Details</Typography>
            <Typography variant='h5' sx={{ color: "#8B8B8B" }}>{totalItems} items </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant='h5' sx={{ color: "#8B8B8B" }}>Total  </Typography>
              <Typography variant='h3' sx={{ fontWeight: '700' }}>$ {totalPrice} </Typography>
            </Box>

            <form >
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
                <TextField
                  label="Name"
                  fullWidth
                  margin="normal"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  label="Phone Number"
                  fullWidth
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <TextField
                  label="Enter Your Email"
                  fullWidth
                  margin="normal"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button onClick={handleConfirmOrder} variant="contained" padding="16px" sx={{ width: "100%" }}>Order</Button>
              </Box>
            </form>

          </Stack>
        </Box>
      )}
      <Dialog
        open={open}

      >
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'rgba(13, 80, 255, 1)' }}>
          <Typography variant="h4" sx={{ backgroundColor: 'rgba(13, 80, 255, 1)', color: 'rgba(255, 255, 255, 1)' }} >{"Congratulations!"}</Typography>
          <DialogActions sx={{ backgroundColor: 'rgba(13, 80, 255, 1)' }}>
            <Button sx={{ color: 'rgba(255, 255, 255, 1)' }} onClick={handleClose}>x</Button>
          </DialogActions>
        </Box>
        <DialogContent sx={{ backgroundColor: 'rgba(13, 80, 255, 1)' }}>
          <Typography sx={{ color: 'rgba(255, 255, 255, 1)' }}>
            Your order has been successfully placed on the website.
            A manager will contact you shortly to confirm your order.
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  )
}
export default OrderDetails