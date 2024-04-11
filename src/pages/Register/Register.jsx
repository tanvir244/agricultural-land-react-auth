import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Shared/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState([]);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 character or longer!');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Password should have at least one Uppercase cahracter!');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setRegisterError('Password should have at least one Lowercase character!');
        }

        // reset error 
        setRegisterError('');

        // create user 
        createUser(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error);
            setRegisterError(error);
        })
    }

    return (
        <div>
            <div className="w-11/12 md:max-w-6xl mx-auto">
                <Navbar></Navbar>
            </div>
            <div className="space-y-6 py-20 bg-[#d2d8d3]">
                <h1 className="text-center text-4xl text-teal-700 font-bold my-2">Register Here</h1>
                <div className="card shrink-0 w-[85%] md:w-[55%] lg:w-[35%] mx-auto shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-teal-600">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-teal-600">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-teal-600">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo url" className="input input-bordered" required />
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
                            <button className="btn bg-teal-600 text-white text-base">Register</button>
                        </div>
                        {
                            registerError && <p className="text-red-500 font-semibold text-center">{registerError}</p>
                        }
                        <p className="mt-4">Already have an account? <Link className="text-green-500 font-bold" to='/login'>Login</Link></p>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;