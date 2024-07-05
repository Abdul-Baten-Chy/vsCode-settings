import { useContext } from "react";
import { DataContext } from "../context/Data";
import Featured from "./Featured";

const CardContainer = () => {
  const { foods, isLoading } = useContext(DataContext);
  const sortedFoods = foods.sort(a, b)=>{b.quantity - a.quantity}
  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <h2 className="text-center text-[#36D6A8] mb-10 text-3xl font-bold">
        FEATURED FOOD
      </h2>
      <div className="grid grid-cols-3 w-[1000px] gap-4 mx-auto">
        {foods &&
          foods
            .slice(0, 6)
            .map((food) => <Featured key={food._id} food={food}></Featured>)}
      </div>
    </div>
  );
};

export default CardContainer;
