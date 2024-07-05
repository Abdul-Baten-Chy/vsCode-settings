import { useContext } from "react";
import { DataContext } from "../Contex/ProductData";
import Category from "./Category";
import Hero from "./Hero";
import Modal from "./Modal";

const Home = () => {
  const { isOpen } = useContext(DataContext);
  return (
    <div>
      <Hero />
      <Category />
      {isOpen && <Modal></Modal>}
    </div>
  );
};

export default Home;
