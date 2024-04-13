import { useContext } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Shared/Navbar";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const UserProfile = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const handleLogOut = () => {
        logOut()
        .then()
        .catch()
    }

    return (
        <div>
            <Navbar></Navbar>
            {
                user
                    ? (<div className="bg-[#fce6d1] py-12">
                        <div className="card w-11/12 md:w-3/4 lg:w-1/2 mx-auto bg-base-100 shadow-xl px-4 py-10 md:py-16 md:px-8 lg:p-16">
                            <div>
                                <img className="w-[290px] h-[290px] md:w-[349px] md:h-[349px] object-cover rounded-full mx-auto" src={user.photoURL} alt="Album" />
                            </div>
                            <div className="card-body space-y-3">
                                <h2 className="card-title text-4xl font-bold mx-auto">{user.displayName}</h2>
                                <div className="border-4 w-full md:w-2/3 mx-auto text-center p-4 rounded-xl">
                                    <h3 className="text-xl font-bold text-cyan-600 mb-1">User email:</h3>
                                    <p className="text-sm text-[#10243f] font-semibold">{user.email}</p>
                                </div>
                                <div className="md:flex md:gap-4 lg:justify-around space-y-4 md:space-y-0">
                                    <div className="border-4 p-4 rounded-xl">
                                        <h3 className="text-xl font-bold text-green-600 mb-1">User created time:</h3>
                                        <p className="text-sm text-[#10243f] font-semibold">{user.metadata.creationTime}</p>
                                    </div>
                                    <div className="border-4 p-4 rounded-xl">
                                        <h3 className="text-xl font-bold text-sky-600 mb-1">Last login time:</h3>
                                        <p className="text-sm text-[#10243f] font-semibold">{user.metadata.lastSignInTime}</p>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="card-actions justify-center">
                                    <button onClick={handleLogOut} className="btn py-4 px-20 bg-teal-600 font-bold text-white">Sign Out</button>
                                </div>
                        </div>
                    </div>)
                    : (<div className="bg-[#252645] text-center py-48">
                        <h1 className="text-6xl mb-6 text-white">Please Login</h1>
                        <Link to='/login'>
                            <button className="btn py-4 px-12">Login</button>
                        </Link>
                    </div>)
            }
            <Footer></Footer>
        </div>
    );
};

export default UserProfile;
