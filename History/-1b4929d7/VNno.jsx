import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Nav/Navbar";

const Root = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Root;
