import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loading){
        console.log(loading);
        return <p className="text-center mt-12"><span className="loading loading-spinner loading-lg"></span></p>
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate> ;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.element.isRequired
}