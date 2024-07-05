import { Outlet } from "react-router-dom";
import Category from "./Components/Category";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";

const Root = () => {
  return (
    <div className="max-w-[1300px] mx-auto">
      <NavBar></NavBar>
      <Hero></Hero>
      <Category></Category>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
