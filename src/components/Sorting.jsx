import { Box, Typography, Input, Select, MenuItem, InputLabel, Checkbox } from "@mui/material"
import { useState, useEffect } from "react"
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";



const Sorting = ({ Products, filteredProducts, setFilteredProducts, display_checkbox }) => {
    const [checked, setChecked] = useState(false);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [sortOption, setSortOption] = useState("by default")
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));


    useEffect(() => {
        if (!Products) {
            return;
        }
        const applyPriceFilter = (products) => {
            return products.filter((product) => {
              const price = product.discont_price || product.price;
              if (minPrice && price < minPrice) return false;
              if (maxPrice && price > maxPrice) return false;
              if ( !product.discont_price) return false;
              return true;
            });
          };

        const sortedAndFilteredProducts = () => {
            let filteredProducts = applyPriceFilter(Products);
            if (sortOption === 'newest') {
                return filteredProducts.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            } else if (sortOption === 'high-low') {
                return filteredProducts.slice().sort((a, b) =>{
                    const priceA = a.discont_price?a.discont_price :a.price
                    const priceB = b.discont_price?b.discont_price :a.price
                    return priceB-priceA
                });
            } else if (sortOption === 'low-high') {
                return filteredProducts.slice().sort((a, b) =>{
                    const priceA = a.discont_price?a.discont_price :a.price
                    const priceB = b.discont_price?b.discont_price :a.price
                    return priceA-priceB
                });
            } else {
                return filteredProducts;
            }
        };

        setFilteredProducts(sortedAndFilteredProducts())
    }, [Products, sortOption, minPrice, maxPrice, checked]);

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    const handleCheckCheckbox = (e) => {
        setChecked(e.target.checked)

    }
    const handleMinPriceChange = (event) => {
        setMinPrice(event.target.value);
    };

    const handleMaxPriceChange = (event) => {
        setMaxPrice(event.target.value);
    };

    const input_styles = { width: "112px", border: "1px solid #DDD", padding: "8px 16px", borderRadius: "10px" }
    return (
        <Box
        display= "flex"
        gap= "25px"
        marginBottom="40px"
        paddingLeft= "40px"
         sx={ isMobile?{
            flexDirection:"column",
         justifyContent:"flex-start"
        }:{flexDirection:"row"}}>
            <Box sx={{
                display: "flex",
                gap: "10px",
                alignItems: "center"

            }}>
                <Typography fontSize="20px" fontWeight="500">Price</Typography>
                <Input onChange={handleMinPriceChange} disableUnderline sx={input_styles} placeholder="from" value={minPrice} name="first_input" />
                <Input onChange={handleMaxPriceChange} disableUnderline sx={input_styles} placeholder="to" value={maxPrice} name="second_input" />
            </Box>
            <InputLabel sx={display_checkbox ? { fontSize: "20px", fontWeight: "500", color: "black" } : { display: "none" }} > Discounted items<Checkbox onChange={handleCheckCheckbox} name="discount" /></InputLabel>

            <Box sx={{ display: "flex", gap: "15px", alignItems: "center" }}>
                <Typography fontSize="20px" fontWeight="500">Sorted</Typography>

                <Select onChange={handleSortChange} value={sortOption} sx={{ width: "200px" }}   >

                    <MenuItem value="by default">
                        by default
                    </MenuItem>
                    <MenuItem value="lowest">
                        newest
                    </MenuItem>
                    <MenuItem value="high-low">
                        high-low
                    </MenuItem>
                    <MenuItem value="low-high">
                        low-high
                    </MenuItem>
                </Select>
            </Box>

        </Box>
    )
}
export default Sorting