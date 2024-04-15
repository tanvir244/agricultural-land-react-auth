import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import './Navbar.css';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li className="font-semibold"><NavLink to="/">Home</NavLink></li>
        <li className="font-semibold"><NavLink to="/user_profile">User Profile</NavLink></li>
        <li className="font-semibold"><NavLink to="/update_profile">Update Profile</NavLink></li>
        <li className="font-semibold"><NavLink to="/secret_policy">Our Policy</NavLink></li>
    </>

    return (
        <div className="bg-base-100">
            <div className="navbar my-2 z-10 w-11/12 md:max-w-6xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 20 20" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a href="/" className="text-xl md:text-3xl text-teal-800 font-bold ml-4 md:ml-8">Agricultural Land</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex items-center gap-2">
                        {user ? (
                            <div className="tooltip w-12 h-12">
                                <img className="w-full h-full object-cover rounded-full cursor-pointer mb-2" src={user?.photoURL || "https://i.ibb.co/TmsrwQs/user.png"} alt="" />
                                <div className="tooltip-text w-[130px]">{user.displayName}</div>
                            </div>
                        ) : (
                            <Link to="/login">
                                <button className="btn px-8 bg-gray-600 text-white">Login</button>
                            </Link>
                        )}
                        {user && (

                            <button onClick={handleLogout} className="btn px-4 md:px-8 bg-gray-600 text-white">Sign out</button>

                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;