import Banner from "../Banner/Banner";
import Estate from "../Estate/Estate";
import Footer from "../Footer/Footer";
import Navbar from "../Shared/Navbar";

const Home = () => {
    return (
        <div>
            <div className="w-11/12 md:max-w-6xl mx-auto">
                <Navbar></Navbar>
                <Banner></Banner>
                <Estate></Estate>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;