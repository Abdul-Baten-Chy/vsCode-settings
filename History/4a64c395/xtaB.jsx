import { useContext } from "react";
import Featured from "../Home/Featured";
import { DataContext } from "../context/Data";

const AvailableFood = () => {
  const { foods, isLoading } = useContext(DataContext);
  if (isLoading) return <div>Loading ...</div>;
  return (
    <div className="pt-36 min-h-[100vh] mb-10">
      <h2 className="text-center text-[#36D6A8] mb-10 text-3xl font-bold">
        AVAILABLE FOOD
      </h2>
      <input type="text" className="bg-gray border mx-10 px-3 py-1" />
      <div className="grid grid-cols-3 w-[1000px] gap-4 mx-auto">
        {foods &&
          foods.map((food) => <Featured key={food._id} food={food}></Featured>)}
      </div>
    </div>
  );
};

export default AvailableFood;
