import { useContext } from "react";
import { DataContext } from "../context/Data";
import Featured from "./Featured";

const CardContainer = () => {
  const { foods } = useContext(DataContext);
  console.log(foods);
  return (
    <div>
      <h2 className="text-center text-[#36D6A8] mb-10 text-3xl font-bold">
        FEATURED FOOD
      </h2>
      <div className="grid grid-cols-3 w-[1000px] gap-4 mx-auto">
        {foods.map((food) => (
          <Featured key={food._id} food={food}></Featured>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
