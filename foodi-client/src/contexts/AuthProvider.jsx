import React, { createContext, Profiler, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/Firebase.config"

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loding, setLoding] = useState(true);

  // create an account
  const createUser = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)  
  }

  // singup with gmail 
  const signUpWithGmail = ()=>{
    return signInWithPopup(auth, googleProvider)
  }

  // login yousing email and password
  const login = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }

  // logout 
  const logOut = () =>{
  return signOut(auth)
  }

  // update Profiler
  const updateUserProfile =({name, photoURL})=>{
  return updateProfile(auth, updateCurrentUser,{
      displayName: name, photoURL: photoURL
    })
  }

  // check signed in user
  useEffect(()=>{
  const unsubscribe =  onAuthStateChanged(auth, (createUser)=>{
    if(createUser){
      setUser(createUser);
    }
    setLoding(false)
    });
    return () =>{
      return unsubscribe();
    }
  },[])



  const authInfo = {
    user,
    loding,
    createUser,
    signUpWithGmail,
    login,
    updateUserProfile,
    logOut,

  }
  
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;