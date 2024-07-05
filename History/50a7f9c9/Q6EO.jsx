import Header from "../../Components/Header/Header";
import Testomonial from "../../Components/Testemonial/Testomonial";
import NewArrival from "./NewArrival";
import WhyChoose from "./WhyChoose";

const Home = () => {
  return (
    <div>
      <Header></Header>
      {/* <Services></Services> */}
      <motion.About
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      ></motion.About>
      <WhyChoose></WhyChoose>
      <NewArrival></NewArrival>
      <Testomonial></Testomonial>
    </div>
  );
};

export default Home;
