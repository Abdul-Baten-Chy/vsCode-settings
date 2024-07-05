import img from "../assets/img2.jpg";

const Subscribe = () => {
  return (
    <div
      className={`bg-cover bg-center h-[400px] relative mt-10 mb-20`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="bg-[#4F46E5] absolute top-0 left-0 w-full h-full z-20 bg-opacity-75">
        hello
      </div>
    </div>
  );
};

export default Subscribe;
