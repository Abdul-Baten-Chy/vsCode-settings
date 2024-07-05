import Header from "./componenets/Header";
import HeroSec from "./componenets/HeroSec";
import Table from "./componenets/Table/Table";

function App() {
  return (
    <Fragment class="bg-[#191D26] font-[Inter] text-white">
      <Header />

      <div className="flex flex-col justify-center items-center">
        <HeroSec />
        <Table />
      </div>
    </Fragment>
  );
}

export default App;
