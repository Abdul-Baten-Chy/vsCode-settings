import Footer from "./Footer";
import Nav from "./Nav";
import News from "./News";

function App() {
  return (
    <div>
      <Nav></Nav>
      <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
        <News></News>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
