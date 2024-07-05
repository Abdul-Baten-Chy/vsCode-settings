import { useContext } from "react";
import { DataContext } from "../context/Data";
import { MyAuthContext } from "../context/MyContext";

const MyFoods = () => {
  const { foods } = useContext(DataContext);
  const { user } = useContext(MyAuthContext);
  const filteredFood= foods.filter((food)=>food.user==user.email
  return <div className="pt-36 min-h-[100vh]">{foods && foods.filter((food)=>food.user==user.email)}</div>;
};

export default MyFoods;
