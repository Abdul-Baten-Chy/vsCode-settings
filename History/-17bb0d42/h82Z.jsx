/* eslint-disable react/prop-types */
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import auth from "../firebase.config";

export const MyAuthContext = createContext({});
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  const createAccount = (email, password) => {
    setLoading(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        if (res.user) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User is logged in",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      // photoURL: photo,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const signOutUser = () => {
    signOut(auth);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "User is logged out",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const information = {
    user,
    createAccount,
    signInUser,
    signOutUser,
    setUser,
    loading,
    updateUserProfile,
    loginWithGoogle,
  };
  return (
    <MyAuthContext.Provider value={information}>
      {children}
    </MyAuthContext.Provider>
  );
};

export default AuthProvider;
