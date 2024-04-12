import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Shared/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
// react icons
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// react tostify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { signIn, googleLogin, githubLogin, facebookLogin, twitterLogin } = useContext(AuthContext);
    const [loginError, setLoginError] = useState([]);

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        // reset error 
        setLoginError('');

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                toast.success("Logged in successfully.")
            })
            .catch(error => {
                setLoginError('Your email or password incorrect, try again');
            })
    }

    return (
        <div>
            <div className="w-11/12 md:max-w-6xl mx-auto">
                <Navbar></Navbar>
            </div>
            <div className="space-y-6 py-20 bg-[#d2d8d3]">
                <h1 className="text-center text-4xl text-teal-700 font-bold my-2">Please Login</h1>
                <div className="card shrink-0 max-w-sm mx-auto shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-teal-600">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-teal-600">Password</span>
                            </label> 
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-teal-600 text-white text-base">Login</button>
                        </div>
                        {
                            loginError && <p className="text-red-500 font-semibold text-center">{loginError}</p>
                        }
                        <div className="space-y-4 mt-2">
                            <h3 className="text-center border-b-2 pb-1 text-gray-700 font-semibold">Continue with</h3>
                            <ul className="flex gap-6 justify-center">
                                <li onClick={() => googleLogin()} className="text-4xl"><button><FaGoogle /></button></li>
                                <li onClick={() => githubLogin()} className="text-4xl"><button><FaGithub /></button></li>
                                <li onClick={() => facebookLogin()} className="text-4xl"><button><FaFacebook /></button></li>
                                <li onClick={() => twitterLogin()} className="text-4xl"><button><FaXTwitter /></button></li>
                            </ul>
                        </div>
                        <p className="mt-6">Dont have an account? <Link className="text-red-500 font-bold" to='/register'>Register</Link></p>
                    </form>
                </div>
            </div>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Login;