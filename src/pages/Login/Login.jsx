import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Shared/Navbar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

// react tostify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// react icons
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { Helmet } from "react-helmet";

// AOS library 
import 'aos/dist/aos.css';
import AOS from 'aos'

// React hook form
import { useForm } from "react-hook-form";

const Login = () => {
    const { signIn, googleLogin, githubLogin, facebookLogin, twitterLogin } = useContext(AuthContext);
    const [loginError, setLoginError] = useState([]);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    // react hook form
    const { register, handleSubmit, formState: { errors }, } = useForm();

    useEffect(() => {
        AOS.init();
    }, [])

    const googleLoginn = () => {
        googleLogin()
            .then(() => {
                toast.success("Login successful with Google");
                navigate(location?.state ? location.state : '/');
            })
    }
    const githubLoginn = () => {
        githubLogin()
            .then(() => {
                toast.success("Login successful with Github");
                navigate(location?.state ? location.state : '/');
            })
    }
    const facebookLoginn = () => {
        facebookLogin()
            .then(() => {
                toast.success("Login successful with Facebook");
                navigate(location?.state ? location.state : '/');
            })
    }
    const twitterLoginn = () => {
        twitterLogin()
            .then(() => {
                toast.success("Login successful with Twitter");
                navigate(location?.state ? location.state : '/');
            })
    }

    const onSubmit = data => {
        const { email, password } = data;

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                // navigate after login 
                navigate(location?.state ? location.state : '/');
                toast.success("Login successful");
            })
            .catch(() => {
                setLoginError('Your email or password incorrect, try again');
            })

    }

    return (
        <div>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="space-y-6 py-20 bg-[#d2d8d3]">
                <h1 className="text-center text-4xl text-teal-700 font-bold my-2">Please Login</h1>
                <div data-aos="zoom-in-up" data-aos-duration="1000" className="card shrink-0 w-11/12 md:max-w-sm mx-auto shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-teal-600">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text font-bold text-teal-600">Password</span>
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className="text-red-500">This field is required</span>}
                            <span onClick={() => setShowPassword(!showPassword)} className="cursor-pointer absolute bottom-11 right-4 text-xl">
                                {
                                    showPassword ? <IoEyeOff /> : <IoEye />
                                }
                            </span>
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
                                <li onClick={() => googleLoginn()} className="text-4xl"><button><FaGoogle /></button></li>
                                <li onClick={() => githubLoginn()} className="text-4xl"><button><FaGithub /></button></li>
                                <li onClick={() => facebookLoginn()} className="text-4xl"><button><FaFacebook /></button></li>
                                <li onClick={() => twitterLoginn()} className="text-4xl"><button><FaXTwitter /></button></li>
                            </ul>
                        </div>
                        <p className="mt-6">Dont have an account? <Link className="text-red-500 font-bold" to='/register'>Register</Link></p>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;