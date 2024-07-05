/* eslint-disable react/prop-types */
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase.config";

export const MyContextProvider = createContext(null);
const MyContext = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  const handleRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const handleSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const loginWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };
  const handleSignOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, [auth]);

  const autInfo = {
    handleRegister,
    handleSignIn,
    handleSignOut,
    user,
    loading,
    loginWithGoogle,
  };
  return (
    <MyContextProvider.Provider value={autInfo}>
      {children}
    </MyContextProvider.Provider>
  );
};

export default MyContext;
