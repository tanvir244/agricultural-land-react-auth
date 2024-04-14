import { useContext } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Shared/Navbar";
import { AuthContext } from "../../providers/AuthProvider";

// react toastify 
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const UpdateProfile = () => {
    const { user, updateUserProfile, loading } = useContext(AuthContext);

    if(loading){
        return <p className="text-center mt-12"><span className="loading loading-spinner loading-lg"></span></p>
    }

    const handleUpdateProfile = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');

        updateUserProfile(name, photo)
            .then(() => {
                toast('Wow updated'); // toast not working
            })

    }

    return (
        <div>
            <Helmet>
                <title>Update Profile</title>
            </Helmet>
            <Navbar></Navbar>
            {
                user
                    ? (<div className="bg-[#fce6d1] py-12">
                        <div className="card w-11/12 md:w-3/4 lg:w-1/3 mx-auto bg-base-100 shadow-xl px-4 py-10 md:py-16 md:px-8 lg:p-8">
                            <div>
                                <img className="w-[210px] h-[210px] object-cover rounded-full mx-auto" src={user.photoURL} alt="Album" />
                            </div>
                            <div className="card-body p-0">
                                <h2 className="card-title text-4xl font-bold mx-auto">{user.displayName}</h2>
                                <p className="text-sm text-[#10243f] font-semibold text-center mb-4">{user.email}</p>
                                <form onSubmit={handleUpdateProfile}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold text-teal-600">Name</span>
                                        </label>
                                        <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold text-teal-600">Photo URL</span>
                                        </label>
                                        <input type="text" name="photo" placeholder="Photo url" className="input input-bordered"
                                            required />
                                    </div>
                                    <div className="card-actions justify-center mt-4">
                                        <button className="btn py-4 px-20 bg-teal-700 font-bold text-white">Update</button>
                                    </div>
                                </form>
                            </div>
                        </div>
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
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default UpdateProfile;