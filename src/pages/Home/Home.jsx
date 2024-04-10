import Banner from "../Banner/Banner";
import Estate from "../Estate/Estate";
import Navbar from "../Shared/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Estate></Estate>
        </div>
    );
};

export default Home;