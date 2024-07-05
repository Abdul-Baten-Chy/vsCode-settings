import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";

const Root = () => {
  return (
    <div className="max-w-[1300px] mx-auto">
      <NavBar></NavBar>
      <Hero></Hero>
    </div>
  );
};

export default Root;
