import React, { useState } from "react";
import { Box, Badge, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import style from "./header.module.css";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";




const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const productsCount = useSelector((state) => state.cart.cartCount);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const linkStyle = {
    color: "#282828",
    fontSize: "20px",
    fontWeight: "500",
    cursor: "pointer",
    textDecoration: "none",
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <Box sx={{
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "30px 0",
      borderBottom: "1px solid #ddd",
      marginBottom: "40px",
    }}>
      <Link to="/home" style={isMobile ? { display: "none" } : { paddingLeft: "40px" }}>

        <svg className={style.svg} style={{ cursor: "pointer" }} width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="35" cy="35" r="35" fill="#0D50FF" />
          <path d="M33.4448 21.0557H37.5559M49.8893 35.4447C48.5189 46.4077 45.093 51.8892 39.6115 51.8892H31.3892C25.9077 51.8892 22.4817 46.4077 21.1113 35.4447" stroke="white" strokeWidth="4.11114" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M35.4999 47.778V51.8891M31.3887 33.389V33.4096M39.611 33.389V33.4096M33.4443 43.6669C33.4443 45.0372 34.1295 45.7224 35.4999 45.7224C37.5554 45.7224 37.5554 45.0379 37.5554 43.6669H33.4443ZM21.1109 19L33.4443 20.9939L20.6216 34.7416C20.2617 35.1469 19.7588 35.397 19.2184 35.4396C18.6781 35.4821 18.1422 35.3137 17.7233 34.9697C17.4385 34.7389 17.2244 34.4326 17.1055 34.0858C16.9866 33.739 16.9678 33.3657 17.0511 33.0087L21.1109 19ZM49.8889 19L37.5554 20.9939L50.3781 34.7416C51.114 35.5802 52.4111 35.683 53.2764 34.9697C53.5613 34.7389 53.7754 34.4326 53.8942 34.0858C54.0131 33.739 54.0319 33.3657 53.9486 33.0087L49.8889 19Z" stroke="white" strokeWidth="4.11114" strokeLinecap="round" strokeLinejoin="round" />
        </svg>


      </Link>

      {isMobile ? (

        <>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ color: "#282828" }}
          >
       <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
          </svg>
          </IconButton>

   
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
          >
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >

              <List>
                {['Main Page', 'Categories', 'All Products', 'All Sales', 'Shopping Cart'].map((text, index) => (
                  <ListItem key={text} component={Link} to={getPath(text)}>
                    <ListItemText primary={text} />

                  </ListItem>
                ))}
              </List>

            </Box>
          </Drawer>
        </>
      ) : (
        <Box sx={{ display: "flex", gap: "30px" }}>
          <Link className={style.link} to="/home" style={linkStyle}>
            Main Page
          </Link>
          <Link className={style.link} to="/categories" style={linkStyle}>
            Categories
          </Link>
          <Link className={style.link} to="products/all" style={linkStyle}>
            All Products
          </Link>
          <Link className={style.link} to="/sales/all" style={linkStyle}>
            All Sales
          </Link>
        </Box>
      )}

      <Link
        to="/shoppingbasket"
        style={isMobile ? { display: "none" } : { outline: "none", marginRight: "60px", borderRadius: "5px" }}
      >
        <Badge
          color="primary"
          badgeContent={productsCount}
          anchorOrigin={{ vertical: "top", horizontal: "left" }}
        >
          <svg
            style={{
              cursor: "pointer",
              color: "#282828",
            }}
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26 0C20.4961 0 16.0565 4.37372 16.0565 9.79592V11.7551H8.19492L8.10169 12.6122L4.12429 46.898L4 48H48L47.8757 46.898L43.8983 12.6122L43.8051 11.7551H35.9435V9.79592C35.9435 4.37372 31.5039 0 26 0ZM26 1.95918C30.4396 1.95918 33.9548 5.42219 33.9548 9.79592V11.7551H18.0452V9.79592C18.0452 5.42219 21.5604 1.95918 26 1.95918ZM9.99717 13.7143H16.0565V15.949C15.4622 16.2895 15.0621 16.9094 15.0621 17.6327C15.0621 18.7156 15.9516 19.5918 17.0508 19.5918C18.1501 19.5918 19.0395 18.7156 19.0395 17.6327C19.0395 16.9094 18.6395 16.2895 18.0452 15.949V13.7143H33.9548V15.949C33.3605 16.2895 32.9605 16.9094 32.9605 17.6327C32.9605 18.7156 33.8499 19.5918 34.9492 19.5918C36.0484 19.5918 36.9379 18.7156 36.9379 17.6327C36.9379 16.9094 36.5378 16.2895 35.9435 15.949V13.7143H42.0028L45.7627 46.0408H6.23729L9.99717 13.7143Z"
              fill="#282828"
            />
          </svg>
        </Badge>
      </Link>
    </Box>
  );
};

function getPath(text) {
  switch (text) {
    case 'Main Page':
      return '/home';
    case 'Categories':
      return '/categories';
    case 'All Products':
      return 'products/all';
    case 'All Sales':
      return '/sales/all';
    case 'Shopping Cart':
      return "/shoppingbasket"
    default:
      return '/';
  }
}

export default Header;
