import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../Firebase/firebase.config';




export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // user loading
    const [loading, setLoading] = useState(true);
    // signin a user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // Google Login
    const googleProviderLogin = (provider) => {
        setLoading(false);
        return signInWithPopup(auth, provider);
    }
    //facebook login
    const facebookProviderLogin = (provider) => {
        setLoading(false);
        return signInWithPopup(auth, provider);
    }

    // Github login
    const githubProviderLogin = (provider) => {
        setLoading(false);
        return signInWithPopup(auth, provider);
    }
    // login a user
    const signin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    //update user name and profile
    const updateUser = (userInfo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, userInfo);
    }

    // Logout 
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    // user observer 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, carrentUser => {
            setUser(carrentUser);
            setLoading(false);
        })
        return () => unsubscribe;
    }, [])
    const authInfo = {
        githubProviderLogin,
        googleProviderLogin,
        facebookProviderLogin,
        createUser,
        signin,
        user,
        updateUser,
        loading,
        setLoading,
        logOut
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;