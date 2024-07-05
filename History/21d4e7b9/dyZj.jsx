import img from "../assets/img1.jpg";
const Featured = () => {
  return (
    <div className="">
      <div className="w-[300px] h-[500px] mx-10 mb-10 bg-[#EDF7FB] drop-shadow-sm border-2">
        <div className="h-[250px] bg-black relative">
          <img src={img} alt="" className="h-full object-cover" />
          <div className="w-16 h-16 bg-[#36D6A8] absolute bottom-0 left-0 text-center flex flex-col justify-center text-white ">
            <p>10</p>
            <p className="-mt-2">serve</p>
          </div>
        </div>
        <div className="mt-6 pl-5">
          <div className="flex items-center gap-4">
            <h3 className="text-white inline-block bg-[#36D6A8] px-2 py-1">
              DELISIOUS FOOD
            </h3>
            <p className="text-black"> o days Left</p>
          </div>
          <p className="text-black font-bold mt-4">
            Your Title goes here goes here
          </p>
          <div className="flex items-center gap-5 mt-5">
            <div className="w-10 h-10 rounded-full bg-black overflow-hidden">
              <img src={img} alt="" className="w-full object-fill" />
            </div>
            <h3 className="text-[#4F46E5]  text-[18px]">Donator Name</h3>
          </div>
          <div className="flex justify-center pr-5">
            <button className="bg-[#4F46E5] w-[80%] text-center text-white  py-2 mt-5 ">
              VIEW DETAILS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
