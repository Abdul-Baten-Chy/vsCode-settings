import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";

const Root = () => {
  return (
    <div className="max-w-[1300px] mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
