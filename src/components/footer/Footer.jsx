import { Box, Typography, Link} from "@mui/material"




const Footer = () => {

    const inbox_styles = {
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        backgroundColor: "#F1F3F4",
        borderRadius: "10px",
        padding: "32px"
    }
    const box_style = { fontSize: "2.5em", fontWeight: "600", color: "#282828" }
    return (
        <Box sx={{
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            padding:"4px 0 40px 40px"
        }}>
            <Typography fontWeight="700" fontSize="64px" variant="h2">Contact</Typography>
            <Box sx={{
                width: "100vw",
                display: "flex",
                flexDirection: "row",

                gap: "32px",
                flexWrap: "wrap"
            }}>
                <Box sx={inbox_styles} width="56vw" >
                    <Typography variant="p" color="#8B8B8B">Phone</Typography>
                    <Typography sx={box_style}>+4930915-88492</Typography>
                </Box>
                <Box width="30vw" sx={inbox_styles}>
                    <Typography variant="p" color="#282828">Socials</Typography>
                    <Box sx={{display:"flex",  gap:"10px",flexDirection:"row"}} >
                    <Link href="https://instagram.com"><Box ><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.5 3H12.5C7.27546 3 3 7.27361 3 12.5V31.5C3 36.7245 7.27546 41 12.5 41H31.5C36.7245 41 41 36.7245 41 31.5V12.5C41 7.27361 36.7245 3 31.5 3ZM22 29.9164C17.6271 29.9164 14.0832 26.3709 14.0832 22C14.0832 17.6271 17.6271 14.0832 22 14.0832C26.3709 14.0832 29.9168 17.6271 29.9168 22C29.9168 26.3709 26.3709 29.9164 22 29.9164ZM32.2918 14.0832C30.9789 14.0832 29.9168 13.0196 29.9168 11.7082C29.9168 10.3967 30.9789 9.33318 32.2918 9.33318C33.6047 9.33318 34.6668 10.3967 34.6668 11.7082C34.6668 13.0196 33.6047 14.0832 32.2918 14.0832Z" fill="#282828" />
                        </svg>
                        
                        </Box>
                        </Link>
                        <Link href="https://web.whatsapp.com/"> <Box ><svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.2793 3C11.8027 3 3.2793 11.5228 3.2793 22C3.2793 25.6862 4.3363 29.24 6.34268 32.3263L3.38197 39.2348C3.17786 39.7098 3.28424 40.2628 3.65039 40.6289C3.89284 40.8714 4.21693 41 4.54596 41C4.71419 41 4.88428 40.9666 5.04508 40.8973L11.9536 37.936C15.0393 39.9436 18.5931 41 22.2793 41C32.7565 41 41.2793 32.4772 41.2793 22C41.2793 11.5228 32.7565 3 22.2793 3ZM32.0316 28.8009C32.0316 28.8009 30.452 30.8271 29.3103 31.3008C26.4083 32.502 22.3115 31.3008 17.6443 26.635C12.9785 21.9678 11.7767 17.871 12.9785 14.969C13.4522 13.826 15.4784 12.2477 15.4784 12.2477C16.0276 11.8197 16.8811 11.8729 17.3734 12.3652L19.6656 14.6573C20.1579 15.1496 20.1579 15.9561 19.6656 16.4484L18.227 17.8858C18.227 17.8858 17.6443 19.6349 21.1437 23.1355C24.6432 26.635 26.3935 26.0523 26.3935 26.0523L27.8309 24.6137C28.3232 24.1214 29.1297 24.1214 29.622 24.6137L31.9141 26.9059C32.4064 27.3982 32.4596 28.2505 32.0316 28.8009Z" fill="#282828" />
                        </svg>
                    
                        </Box></Link>
                    </Box>
                </Box>
                <Box width="56vw" sx={inbox_styles}>
                    <Typography variant="p" color="#282828">Address</Typography>
                    <Typography sx={box_style}>Wallstraẞe 9-13, 10179 Berlin, Deutschland</Typography>
                </Box>
                <Box width="30vw" sx={inbox_styles}>
                    <Typography variant="p" color="#282828">Working Hours</Typography>
                    <Typography sx={box_style}>24 hours a day</Typography>
                </Box>

            </Box>
            <Box style={{ width: "99vw" }}>
                <iframe width="90%" height="600"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Wallstra%E1%BA%9Ee%209-13,%2010179%20Berlin,%20Germany+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    <a href="https://www.gps.ie/">gps tracker sport</a></iframe>
            </Box>


        </Box>

    )
}
export default Footer