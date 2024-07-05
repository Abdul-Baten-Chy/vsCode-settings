import img from "../assets/cards/imgCard1.png";

const Subscribe = () => {
  return (
    <div
      className={`bg-cover bg-center h-[400px] relative mt-10 mb-20 bg-fixed`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="bg-[#4F46E5] absolute top-0 left-0 w-full h-full z-20 bg-opacity-75 flex flex-col justify-center items-center">
        <h4 className="text-2xl text-white mb-10">
          Please Subscribe Our Newsleter{" "}
        </h4>
        <div className="flex items-center gap-5">
          <input type="text" className="w-96 h-14 px-5 py-2" />
          <button className="h-14 px-3 bg-[#36D6A8] text-white text-lg w-36">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
