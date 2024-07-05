import { useContext } from "react";
import Featured from "../Home/Featured";
import { DataContext } from "../context/Data";
import { MyAuthContext } from "../context/MyContext";

const MyFoods = () => {
  const { foods } = useContext(DataContext);
  const { user } = useContext(MyAuthContext);
  const filteredFood = foods.filter((food) => food.user == user.email);
  return (
    <div className="pt-36 min-h-[100vh] px-10">
      {filteredFood &&
        filteredFood.map((food) => (
          <Featured key={food._id} food={food}></Featured>
        ))}
    </div>
  );
};

export default MyFoods;
