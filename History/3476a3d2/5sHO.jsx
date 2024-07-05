import Header from "./componenets/Header";
import HeroSec from "./componenets/HeroSec";
import Table from "./componenets/Table/Table";

function App() {
  return (
    <div className="bg-[#191D26] font-[Inter] text-white">
      <Header />

      <div className="flex flex-col justify-center items-center">
        <HeroSec />
        <Table />
      </div>
    </div>
  );
}

export default App;
