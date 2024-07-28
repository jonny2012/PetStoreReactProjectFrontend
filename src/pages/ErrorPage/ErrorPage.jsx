import { Box, Button, Container, Typography } from "@mui/material"
import image from "../../assets/Icons/404.png"
import { Link } from "react-router-dom"


const ErrorPage = ()=>{


    return (
<Container sx={{display:"flex", justifyContent:"center", flexDirection:"column",  height:"80vh"}}>
    <Box sx={{display:"flex", justifyContent:"center"}}>
        <img  style={{width:"700px", height:"300px"}} src={image} alt="" />

    </Box>
    <Box sx={{display:"flex", flexDirection:"column", alignItems:"center", gap:"30px" }}>
        <Typography variant="h2" fontWeight="700">Page Not Found</Typography>
        <Typography width="580px" fontSize="20px" textAlign="center" variant="p">We’re sorry, the page you requested could not be found.
        Please go back to the homepage.</Typography>
        <Link to="/home"><Button variant="contained" >Go Home</Button></Link>
    </Box>

</Container>

    )
}
export default ErrorPage