import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";

const Root = () => {
  return (
    <div className="max-w-[1300px] mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
