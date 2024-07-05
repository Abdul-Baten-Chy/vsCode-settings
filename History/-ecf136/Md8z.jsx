import { useLoaderData } from "react-router-dom";

const Deatils = () => {
  const food = useLoaderData();
  return (
    <div className="pt-36 min-h-[100vh]  ">
      <div className="px-10 flex gap-5 justify-center">
        <div className="">
          <img src={food.image} alt="" className="object-cover" />
        </div>
        <div className="ml-16">
          <h3 className="text-3xl font-semibold ">{food.name}</h3>
          <h3 className="text-lg mt-6 mb-3">Food Donar Details: </h3>
          <div className="flex gap-8">
            <img src={food.donarImage} className="w-[70px]" alt="" />
            <div className="border-l-2 px-4">
              <h3> Name: {food.domnarName}</h3>
              <h3> Serving Quantity: {food.quantity}</h3>
              <h3>Expire Date: {food.expire}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deatils;
