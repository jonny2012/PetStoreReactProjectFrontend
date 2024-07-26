import Checkout from "../components/checkout/Checkout";
import MainCategories from "../components/main_categories/MainCategories";
import Discount from "../components/discount/Discount";
import MainSale from "../components/main_Sales/MainSale";




const Layout = () => {

  return (
    <>
      <Checkout/>
      <main   style={{padding: "80px 0", width: "100vw"}} >
    <MainCategories />
    <Discount/>
    <MainSale/>

      </main>
    </>
);
};

export default Layout;
