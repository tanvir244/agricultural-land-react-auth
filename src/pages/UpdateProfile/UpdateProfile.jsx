import { useContext } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Shared/Navbar";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const UpdateProfile = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleUpdateProfile = () => {
        logOut()
        .then()
        .catch()
    }

    return (
        <div>
            <Navbar></Navbar>
            {
                user
                    ? (<div className="bg-[#FFA45E] py-48 text-center">
                        <button onClick={handleUpdateProfile} className="btn w-[210px] h-[90px] text-xl">Update Profile</button>
                    </div>)
                    : (<div className="bg-[#f2819b] py-32 md:py-48 flex flex-col md:flex-row justify-center text-center gap-4">
                        <Link className="" to="/register">
                            <button className="btn w-[210px] h-[90px] text-xl">Create User</button>
                        </Link>
                        <Link to="/login">
                            <button className="btn w-[210px] h-[90px] text-xl">Login User</button>
                        </Link>
                    </div>)
            }
            <Footer></Footer>
        </div>
    );
};

export default UpdateProfile;