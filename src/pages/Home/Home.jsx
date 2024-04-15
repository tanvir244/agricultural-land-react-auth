import Banner from "../Banner/Banner";
import Estate from "../Estate/Estate";
import FertileLand from "../FertileLand/FertileLand";
import Footer from "../Footer/Footer";
import OurSupport from "../OurSupport/OurSupport";
import Navbar from "../Shared/Navbar";
// react helmet
import {Helmet} from "react-helmet";

const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className="relative z-10">
                <Navbar></Navbar>
            </div>
            <div className="w-11/12 md:max-w-6xl mx-auto">
                <Banner></Banner>
                <Estate></Estate>
                <FertileLand></FertileLand>
                <OurSupport></OurSupport>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;