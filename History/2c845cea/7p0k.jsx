import Hero from "../Hero";
import About from "./About";
import Featured from "./Featured";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <h2 className="text-center text-[#36D6A8] text-3xl font-bold">
        FEATURED FOOD
      </h2>
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
