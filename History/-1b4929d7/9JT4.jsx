import { Outlet } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "./Nav/Navbar";

const Root = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Home></Home>
    </>
  );
};

export default Root;
