import Header from "../../Components/Header/Header";
import Testomonial from "../../Components/Testemonial/Testomonial";
import About from "./About";
import NewArrival from "./NewArrival";

const Home = () => {
  return (
    <div>
      <Header></Header>
      {/* <Services></Services> */}
      <About></About>
      <NewArrival></NewArrival>
      <Testomonial></Testomonial>
    </div>
  );
};

export default Home;
