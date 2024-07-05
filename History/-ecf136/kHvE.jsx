import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Modal from "./Modal";

const Deatils = () => {
  const [isOpen, setIsOpen] = useState(false);
  const food = useLoaderData();
  return (
    <div className="pt-36 min-h-[100vh]  ">
      <div className="px-10 flex gap-5 justify-center">
        <div className="">
          <img
            src={food.image}
            alt=""
            className="object-cover o:scale-110 transition ease-in-out delay-100 duration-700 "
          />
        </div>
        <div className="ml-16">
          <h3 className="text-3xl font-semibold ">{food.name}</h3>
          <h3 className="text-lg mt-6 mb-3">Food Donar Details: </h3>
          <div className="flex gap-8">
            <img
              src={food.donarImage}
              className="w-[70px] hover:scale-110 transition ease-in-out delay-100 duration-300"
              alt=""
            />
            <div className="border-l-4 border-[#36D6A8] px-4 ">
              <h3>
                {" "}
                Name: <span className="font-semibold">{food.domnarName}</span>
              </h3>
              <h3>
                {" "}
                Serving Quantity:{" "}
                <span className="font-semibold">{food.quantity}</span>
              </h3>
              <h3>
                Expire Date:{" "}
                <span className="font-semibold">{food.expire}</span>
              </h3>
            </div>
          </div>
          <button
            className="bg-[#36D6A8] mt-10 w-1/2 h-[35px] text-white font-semibold hover:bg-[#5ee8c1] transition ease-in-out duration-700 hover:scale-110"
            onClick={() => setIsOpen(true)}
          >
            Request Food
          </button>
          <button
            className="bg-[#36D6A8] mt-10 w-1/2 h-[35px] text-white font-semibold hover:bg-[#5ee8c1] transition ease-in-out duration-700 hover:scale-110"
            onClick={() => setIsOpen(false)}
          >
            Cance
          </button>
        </div>
        {isOpen && <Modal></Modal>}
      </div>
    </div>
  );
};

export default Deatils;
