

import { Link } from "react-router-dom";

import { Box, Divider, Stack } from "@mui/material";



const PagesLinks = ({ links }) => {
    return (
        <Box sx={{ display: "flex", flexDirection: "row", marginLeft:"30px", alignItems: "center", marginBottom:"40px"}}>
            {links.map((pagelink, index) => (
                <Stack key={index} flexDirection={"row"} alignItems={"center"}>
                    <Link to={pagelink.link}   style={index !== links.length-1 ?{color:"#8B8B8B", borderRadius:"10px",padding:"8px 16px", border:"1px solid #ddd"}:{color:"#000", padding:"10px 16px",borderRadius:"10px", border:"1px solid #ddd", fontWeight:"500"}}>{pagelink.title}
                        </Link> 
                    {index !== links.length - 1 && (
                        <Divider sx={{
                            color: '#ddd',
                            height: '2px',
                            width: '16px'
                          
                        }} />
                        
                    )}
                </Stack>
            ))}

        </Box>
    )
}
export default PagesLinks