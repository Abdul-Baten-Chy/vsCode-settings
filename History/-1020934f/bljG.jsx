import About from "./About";
import Category from "./Category";
import Hero from "./Hero";
import Trending from "./Trending";

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <Trending></Trending>
      <About></About>
    </div>
  );
};

export default Home;
