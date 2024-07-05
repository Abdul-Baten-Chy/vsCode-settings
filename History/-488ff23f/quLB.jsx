import img from "../assets/img2.jpg";

const Subscribe = () => {
  return (
    <div
      className={`bg-cover bg-center h-[400px] relative`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="bg-black absolute top-0 left-0 w-full h-full z-20">
        hello
      </div>
    </div>
  );
};

export default Subscribe;
