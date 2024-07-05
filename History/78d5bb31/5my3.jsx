/* eslint-disable react/prop-types */

import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Cards = ({ food }) => {
  return (
    <div className="my-4">
      <div className="w-[300px] h-[500px]  bg-[#EDF7FB] drop-shadow-sm border-2">
        <div className="h-[250px] bg-black relative">
          <img src={food.image} alt="" className="h-full object-cover" />
          <div className="w-16 h-16 bg-[#36D6A8] absolute bottom-0 left-0 text-center flex flex-col justify-center text-white ">
            <p>{food.quantity}</p>
            <p className="-mt-2">serve</p>
          </div>
        </div>
        <div className="mt-6 pl-5">
          <div className="flex  items-center gap-4">
            <div className="flex text-white gap-1 items-center px-2 bg-[#36D6A8]">
              <FaLocationDot />
              <h3 className=" inline-block bg-[#36D6A8] px-2 py-1">
                {food.location}
              </h3>
            </div>
            <p className="text-black"> {food.expire}</p>
          </div>
          <p className="text-black font-bold mt-4">{food.name}</p>
          <div className="flex items-center gap-5 mt-5">
            <div className="w-10 h-10 rounded-full bg-black overflow-hidden">
              <img
                src={food.donarImage}
                alt=""
                className="w-full object-fill"
              />
            </div>
            <h3 className="text-[#4F46E5]  text-[18px]">{food.domnarName}</h3>
          </div>
          <div className="flex justify-center pr-5">
            <Link to="/details">
              <button className="bg-[#4F46E5] w-[200px] text-center text-white  py-2 mt-5 ">
                VIEW DETAILS
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
