import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
const auth = getAuth(app);

export const AuthContext = createContext(null);

// social auth provider 
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();

// react tostify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // update user profile
    const updateUserProfile = (name, image) => {
        setLoading(true);
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }

    // sign in user 
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // Google login 
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
            .then(() => {
                toast.success("Logged in successfully.");
            })
    }
    // Github login
    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
            .then(() => {
                toast.success("Logged in successfully.");
            })
    }
    // Facebook login
    const facebookLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, facebookProvider)
            .then(() => {
                toast.success("Logged in successfully.");
            })
            .catch(() => {
                toast.error("Failed to logged with Facebook");
            })
    }
    // Twitter login
    const twitterLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, twitterProvider)
            .then(() => {
                toast.success("Logged in successfully.");
            })
    }

    // keep containing current user untill logout 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth state change', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        updateUserProfile,
        signIn,
        googleLogin,
        githubLogin,
        facebookLogin,
        twitterLogin,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            <ToastContainer />
        </AuthContext.Provider >
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}