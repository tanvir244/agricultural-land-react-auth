import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="font-semibold text-center py-32">
            <h2 className="text-6xl">404</h2>
            <h2 className="text-5xl my-8">Page not found</h2>
            <Link to="/">
                <button className="btn bg-black text-white px-20 text-xl">Go Back</button>
            </Link>
        </div>
    );
};

export default ErrorPage;