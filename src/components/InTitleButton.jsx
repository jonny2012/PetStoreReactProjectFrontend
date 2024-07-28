import { Link } from "react-router-dom"
import { Box, Button } from "@mui/material"

const InTitleButton = ()=>{


    return (
        <Box sx={{display:"flex", flexDirection:"row",  justifyContent:"center"}}>
            <Box sx={{width:"30vw", height:"2px", backgroundColor:" #8B8B8B"}}></Box>
<Link to="/products/all"><Button>Back to the Store</Button></Link>
</Box>
    )
}
export default InTitleButton