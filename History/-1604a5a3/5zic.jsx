/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { MyContextProvider } from "../Contex/MyContext";

const Private = ({ children }) => {
  const { user, loading } = useContext(MyContextProvider);
  const location = useLocation();
  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  if (user) {
    return children;
  } else {
    return <Navigate state={location.pathname} to={"/signIn"}></Navigate>;
  }
};

export default Private;
