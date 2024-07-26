import { Box, Typography, Input, Button } from "@mui/material"
import discount_img from "./../../assets/Icons/discount_img.png"

const Discount = () => {

    const input_size = { padding: "16px 32px", color: "#fff", border: "1px solid #fff" }
    const button_style = { padding: "16px 32px", backgroundColor: "#fff", color: "#000", fontSize: "20px", fontWeight: "600", "&:hover": { backgroundColor: "#000", color: "#fff" } }

    return (
        <Box sx={{
            padding: "40px 0",
            width:"100vw",
            backgroundColor: "#2451C6",
            boxSizing:"border-box"
        }}>
            <Typography variant="h2"
                textAlign="center"
                fontSize="64px"
                fontWeight="700"
                marginBottom="20px"
                color="#fff"> 5% off on the first order</Typography>
            <Box sx={{
                display: "flex",
                justifyContent:"center",
                gap:"20px"



            }}>
                <img src={discount_img} alt="discountimg" />
                <form style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "530px",
                    gap: "16px",
                    justifyContent:"center"

                }} 
                onClick={(e)=> e.preventDefault()}
                >
                    <Input sx={input_size} disableUnderline required type="text" placeholder="Name" />
                    <Input sx={input_size} disableUnderline required type="text" placeholder="Phone" />
                    <Input sx={input_size} disableUnderline required type="text" placeholder="Email" />
                    <Button sx={button_style} variant="contained" type="submit">Get a Discount</Button>
                </form>
            </Box>

        </Box>
    )
}
export default Discount