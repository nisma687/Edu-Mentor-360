import { createContext, useEffect } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useState } from "react";

export const AuthContext=createContext();
const auth=getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const logIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    
    }
    const logInWithGoogle=()=>{
        setLoading(true);
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }
    const updateUserProfile=(name,photoUrl)=>{
        return updateProfile(auth.currentUser, {
             displayName: name, photoURL: photoUrl
           });
     }
     useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        
        })
        return ()=>{
          return unsubscribe();
        }
     },[])
    const authInfo={
        user,loading,logIn,logOut,createUser,logInWithGoogle,updateUserProfile
    };
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;