import img from "../assets/img2.jpg";

const Subscribe = () => {
  return (
    <div
      className={`bg-cover bg-center h-[400px] relative mt-10 mb-20 bg-fixed`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="bg-[#4F46E5] absolute top-0 left-0 w-full h-full z-20 bg-opacity-75">
        <h4>Please Subscribe Our Newsleter </h4>
        <div className="flex items-center gap-5">
          <input type="text" className="w-96 h-14" />
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
