import Hero from "../Hero";
import About from "./About";
import Featured from "./Featured";
import Subscribe from "./Subscribe";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <h2 className="text-center text-[#36D6A8] mb-10 text-3xl font-bold">
        FEATURED FOOD
      </h2>
      <div className="grid grid-cols-3 w-[1000px] gap-10 mx-auto">
        <Featured></Featured>
        <Featured></Featured>
        <Featured></Featured>
        <Featured></Featured>
        <Featured></Featured>
        <Featured></Featured>
      </div>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
