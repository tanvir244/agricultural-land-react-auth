import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
const auth = getAuth(app);

export const AuthContext = createContext(null);

// social auth provider 
const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    // create user 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }   
    
    // update user profile
    const updateUserProfile = (name, image) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }

    // sign in user 
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout
    const logOut = () => {
        return signOut(auth);
    }

    // google login 
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // keep containing current user untill logout 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth state change', currentUser);
            setUser(currentUser);
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        updateUserProfile,
        signIn,
        googleLogin,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}