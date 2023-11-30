import { createContext, useEffect } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useState } from "react";
import useAxios from "../../hooks/useAxios";

export const AuthContext=createContext();
const auth=getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const axiosPublic=useAxios();
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
            if(currentUser)
            {
                const userInfo={email:currentUser.email}
                // get token and store client side
                axiosPublic.post('/jwt',userInfo)
                .then(res=>
                    {
                        if(res.data.token)
                        {
                            localStorage.setItem('access-token',res.data.token);
                            setLoading(false);
                        }

                    })

            }
            else{
                // todo:remove token
                localStorage.removeItem('access-token');
                setLoading(false);
            }
            
        
        })
        return ()=>{
          return unsubscribe();
        }
     },[axiosPublic])
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