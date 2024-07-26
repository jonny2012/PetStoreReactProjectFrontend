import { Box, Typography, CircularProgress, Button, Input } from "@mui/material"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productById } from "../../redux/slice/productsSlice";
import PagesLinks from "../../components/PagesLinks";




const ProductPage = () => {

  const [count, setCount] = useState(1)
  const { id } = useParams();
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(productById(id));
  }, [id, dispatch]);

  const { productData, isLoading, isError, message } = useSelector(
    (state) => state.products
  );

  const products = productData

  
  if (isLoading) {
    return <CircularProgress >Loading...</CircularProgress>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  const decrement = () => {
    if (count <= 1) {
      setCount(count >= 1)
    }
    setCount(() => count - 1)
  }
  const increment = () => {

    setCount(() => count + 1)
  }

  const Links = [
    { title: 'Main Page', link: '/home' },
    { title: 'Categories', link: `/categories` },
       { title: `${products[0]?.categoryTitle}`, link: `/categories/${products[0]?.categoryId} `},
    { title: `${products[0]?.productTitle}`, link: `/products/${products[0]?.productId}` }
  ];

  return (
    <>
    <PagesLinks links={Links} />
      {products && products.map((product, i) => (
      <Box key={i} sx={{
        width: "100vw",
        maxWidth:"100%",
        height: "auto",
        display: "flex",
        marginBottom:"80px",
     justifyContent:"center",
        gap: "32px"
      }}>
  
            <Box component="img" sx={{
          width: "40vw",
          maxWidth:"100%",
        }}
          src={`http://localhost:3333${product.productImage}`}
          alt={product.title}
        >

        </Box>
        <Box sx={{ width: "35vw", display: "flex", flexDirection: "column", gap: "32px" }}>
          <Typography sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            fontSize: "3em",
            fontWeight: "700"
          }} variant="h2">{product.productTitle}</Typography>
          <Box sx={{
            width: "56%",
            height: "70px",
            display: "flex",
            flexDirection: "row",
            position: "relative",
            gap: "20px"
          }}>
            <Typography variant="h3" fontSize="64px" alignSelf="center" fontWeight="700">{product.productDiscont ? `$${product.productDiscont}` : null}</Typography>
            <Typography variant="h5" alignSelf="flex-end" sx={product.productDiscont ? { textDecorationLine: "line-through", alignSelf: "flex-end", fontSize: "40px", lineHeight: "40px", color: "#8B8B8B" } : { fontSize: "64px", fontWeight: "600" }} >${product.productPrice}</Typography>
            <Box sx={product.productDiscont ?
              {
                position: "absolute",
                top: "-5px",
                right: 0,
                width: "63px",
                height: "34px",
                color: "#fff",
                fontSize: "20px",
                fontWeight: "600",
                backgroundColor: "#0D50FF",
                padding: "4px 8px",
                borderRadius: "5px"
              }
              : null}>
              {product.productDiscont ?
                `-${Math.floor(((product.productPrice - product.productDiscont) / product.productPrice) * 100)}%`
                : null}

            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: "30px" }}>
            <Box width="210px" display="flex">
              <Button onClick={decrement} sx={{ padding: "17px", border: "1px solid #ddd" }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="#8B8B8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              </Button> <Input sx={{ paddingLeft: "30px", fontSize: "20px", fontWeight: "500", border: "1px solid #ddd" }} disableUnderline aria-disabled width="96px" value={count} height="58px" /><Button onClick={increment} sx={{ border: "1px solid #ddd" }} ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="#8B8B8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 5V19" stroke="#8B8B8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              </Button>
            </Box>
            <Button sx={{ width: "316px", height: "58px", padding: "16px 32px", backgroundColor: "#0D50FF", color: "#fff", "&:hover": { backgroundColor: "#000", } }}>Add to Cart</Button>
          </Box>

          <Box alignSelf="end">
            <Typography variant="h5">Description</Typography>
            <Typography width="550px" height="277px" variant="p">{product.productDescription}</Typography>
            <Typography variant="p">Read more</Typography>
          </Box>
        </Box> 

      </Box>
      ))}

    </>
  )
}
export default ProductPage