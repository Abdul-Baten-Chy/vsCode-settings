/* eslint-disable react/prop-types */
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import auth from "../auth/FirebaseAuth";

export const MyContextProvider = createContext(null);
const MyContext = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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
      const newUser = {
        name: currentUser.displayName,
        email: currentUser.email,
      };
      console.log(newUser, "new");
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    handleRegister,
    handleSignIn,
    handleSignOut,
    user,
    loading,
    loginWithGoogle,
  };
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (newData) => {
      axios.post("http://localhost:5000/api/my/users", newData);
    },
  });

  return (
    <MyContextProvider.Provider value={authInfo}>
      {children}
    </MyContextProvider.Provider>
  );
};

export default MyContext;
