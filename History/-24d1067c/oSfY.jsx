import { Outlet } from "react-router-dom";
import NavBar from "../components/shared/NavBar";

const Root = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
