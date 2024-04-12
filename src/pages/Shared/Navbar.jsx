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

    // custom css for tooltip effect

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 my-2 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 20 20" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl text-red-500">Real Estate</a>
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
                            <a className="btn px-8 bg-gray-600 text-white">Login</a>
                        </Link>
                    )}
                    {user && (

                            <a onClick={handleLogout} className="btn px-4 md:px-8 bg-gray-600 text-white">Signout</a>

                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;