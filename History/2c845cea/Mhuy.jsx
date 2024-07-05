import Hero from "../Hero";
import About from "./About";
import Featured from "./Featured";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <div className="grid grid-cols-3 w-[1000px] mx-auto">
        <Featured></Featured>
        <Featured></Featured>
        <Featured></Featured>
        <Featured></Featured>
        <Featured></Featured>
        <Featured></Featured>
      </div>
    </div>
  );
};

export default Home;
