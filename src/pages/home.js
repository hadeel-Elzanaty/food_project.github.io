import FoodTypes from "../componants/foodtypes";
import Header from "../componants/header";
import Header2 from "../componants/header2";
import Header3 from "../componants/header3";
import NavComp from "../componants/shared/navbar";
import Delivery from "../componants/delivery";
import Products from "../componants/products";
import HotPizza from "../componants/hotpizza";
import Footer from "../componants/shared/footer";

const Home = () => {
    return ( <>
    <NavComp/>
    <Header/>
    <FoodTypes/>
    <Delivery/>
    <Products/>
    <Header2/>
    <HotPizza/>
    <Header3/>
    <Footer/>
        </> );
}
 
export default Home;