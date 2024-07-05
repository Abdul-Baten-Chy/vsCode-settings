import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import StudentsRecords from "./components/StudentsRecords";

function App() {
  return (
    <>
      <div className="bg-[#172227] font-[Inter] text-white">
        <Header></Header>
        <Hero></Hero>
        <StudentsRecords></StudentsRecords>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
