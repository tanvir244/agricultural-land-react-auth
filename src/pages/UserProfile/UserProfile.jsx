import { useContext, useEffect } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Shared/Navbar";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet";

// AOS library 
import 'aos/dist/aos.css';
import AOS from 'aos';

const UserProfile = () => {
    const { user, logOut } = useContext(AuthContext);

    useEffect(() => {
        AOS.init();
    }, [])

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    return (
        <div>
            <Helmet>
                <title>User Profile</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="bg-[#fce6d1] py-12">
                <div data-aos="zoom-in-up" data-aos-duration="1000" className="card w-11/12 md:w-3/4 lg:w-1/3 mx-auto bg-base-100 shadow-xl px-4 py-10 md:py-16 md:px-8 lg:p-8">
                    <div>
                        <img className="w-[210px] h-[210px] object-cover rounded-full mx-auto" src={user.photoURL} alt="Album" />
                    </div>
                    <div className="card-body space-y-3 p-0">
                        <h2 className="card-title text-4xl font-bold mx-auto">{user.displayName}</h2>
                        <div className="w-full md:w-2/3 mx-auto text-center p-4 rounded-xl shadow-xl">
                            <h3 className="text-xl font-bold text-cyan-600 mb-1">User email:</h3>
                            <p className="text-sm text-[#10243f] font-semibold">{user.email}</p>
                        </div>
                        <div className="md:flex md:gap-4 lg:justify-around space-y-4 md:space-y-0">
                            <div className="p-4 rounded-xl shadow-xl">
                                <h3 className="text-lg font-bold text-green-600 mb-1">User created:</h3>
                                <p className="text-xs text-[#10243f] font-semibold">{user.metadata.creationTime}</p>
                            </div>
                            <div className="p-4 rounded-xl shadow-xl">
                                <h3 className="text-xl font-bold text-sky-600 mb-1">Last login:</h3>
                                <p className="text-xs text-[#10243f] font-semibold">{user.metadata.lastSignInTime}</p>
                            </div>
                        </div>
                        <div className="card-actions justify-center">
                            <button onClick={handleLogOut} className="btn py-4 px-20 bg-teal-600 font-bold text-white">Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UserProfile;
