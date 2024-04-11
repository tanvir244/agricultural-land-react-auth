import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Shared/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const { signIn } = useContext(AuthContext);
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
                        <p className="mt-4">Dont have an account? <Link className="text-red-500 font-bold" to='/register'>Register</Link></p>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;