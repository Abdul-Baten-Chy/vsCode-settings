import Header from "./componenets/Header";
import HeroSec from "./componenets/HeroSec";
import Table from "./componenets/Table/Table";

function App() {
  return (
    <>
      <Header />

      <div className="flex flex-col justify-center items-center">
        <HeroSec />
        <Table />
      </div>
    </>
  );
}

export default App;
