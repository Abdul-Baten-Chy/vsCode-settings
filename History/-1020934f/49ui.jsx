import { useEffect, useState } from "react";
import Category from "./Category";
import Hero from "./Hero";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  return (
    <div>
      <Hero />
      <Category />
    </div>
  );
};

export default Home;
