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
  // signInWithPopup(auth, provider)
  //   .then((result) => {
  //     const user = result.user;
  //     setUser(user);
  //   })
  //   .catch((error) => {
  //     const errorMessage = error.message;

  //     console.log(errorMessage);
  //   });

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);

        // const userInfo = { email: currentUser.email };
        // axiosPublic.post("/jwt", userInfo).then((res) => {
        //   if (res.data.token) {
        //     localStorage.setItem("access-token", res.data.token);
        //   }
        // });
      } else {
        setUser(null);

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User is logged out",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const signOutUser = () => {
    return signOut(auth);
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
