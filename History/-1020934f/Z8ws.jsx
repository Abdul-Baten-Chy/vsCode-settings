import { useEffect } from "react";
import Category from "./Category";
import Hero from "./Hero";

const Home = () => {
  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <Hero />
      <Category />
    </div>
  );
};

export default Home;
