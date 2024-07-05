import { useContext } from "react";
import { DataContext } from "../Contex/ProductData";
import Category from "./Category";
import Hero from "./Hero";

const Home = () => {
  const { isOpen } = useContext(DataContext);
  return (
    <div>
      <Hero />
      <Category />
    </div>
  );
};

export default Home;
