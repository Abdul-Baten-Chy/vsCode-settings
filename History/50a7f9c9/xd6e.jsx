import Header from "../../Components/Header/Header";
import Testomonial from "../../Components/Testemonial/Testomonial";
import About from "./About";
import NewArrival from "./NewArrival";
import WhyChoose from "./WhyChoose";

const Home = () => {
  return (
    <div>
      <Header></Header>
      {/* <Services></Services> */}
      <About></About>
      <WhyChoose></WhyChoose>
      <NewArrival></NewArrival>
      <Testomonial></Testomonial>
    </div>
  );
};

export default Home;
