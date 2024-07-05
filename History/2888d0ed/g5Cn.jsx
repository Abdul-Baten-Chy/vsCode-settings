import Header from "../../Components/Header/Header";
import Testomonial from "../../Components/Testemonial/Testomonial";
import NewArrival from "./NewArrival";

const Home = () => {
  return (
    <div>
      <Header></Header>
      {/* <Services></Services> */}
      <NewArrival></NewArrival>
      <Testomonial></Testomonial>
    </div>
  );
};

export default Home;
