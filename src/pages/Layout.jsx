import Checkout from "../components/Checkout/Checkout";
import MainCategories from "../components/Main_categories/MainCategories";
import Discount from "./../components/Discount/Discount"
import MainSale from "../components/Main_Sales/MainSale";




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
