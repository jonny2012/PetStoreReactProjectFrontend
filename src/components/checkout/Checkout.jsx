import { Box,Typography,Button } from "@mui/material"
import img from "/checkout_img.jpg"
import { Link } from "react-router-dom"

const Checkout = ()=>{


    return (
        <Box sx={{
           width: "100vw",
            maxWidth: "100%",
          height:"800px",
          marginTop:"-40px",
            background:  `url(${img}) no-repeat  border-box`,
            backgroundSize: "100vw 100%"

            
      
        }}>
            <Box sx={{padding: "100px 0 200px 40px", maxwidth:"900px"}}>
        <Typography variant="h1" color="#fff" fontSize="5vw" fontWeight="700">Amazing Discounts <br/> on Pets Products</Typography>
        <Link to="/sales/all"><Button variant="contained" style={{
                         outline:"none",
                         padding: "16px 56px 16px 56px"}}>Check out</Button></Link>
                         </Box>
        </Box>
    )
}
export default Checkout