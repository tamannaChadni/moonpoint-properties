import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
// import React from 'react';
export const AuthContext = createContext(null);


const provider = new GoogleAuthProvider();


// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const[loading, setLoading] = useState(true);

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signInWithGoogle = () =>{
        setLoading(true);
        signInWithPopup(auth, provider)
    }
    

        const logOut = () =>{
            setLoading(true);
          return signOut(auth);

        }



    // observe auth state change

    useEffect(() =>{
      const unSubscribe = onAuthStateChanged (auth, currentUser =>{
            console.log('current value of the current user', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            unSubscribe();
        }
    },[])



    const authInfo ={
        user,
        loading,
        createUser,
        signInUser,
        logOut,
        signInWithGoogle,

    }
    return (
        // <div>
            
        // </div>
        // eslint-disable-next-line react/react-in-jsx-scope
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;