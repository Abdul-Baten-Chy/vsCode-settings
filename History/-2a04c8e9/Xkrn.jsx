import { useContext } from "react";
import { DataContext } from "../context/Data";
import { MyAuthContext } from "../context/MyContext";

const MyFoods = () => {
  const { foods } = useContext(DataContext);
  const { user } = useContext(MyAuthContext);
  return <div className="pt-36 min-h-[100vh]">{foods && foods.map()}</div>;
};

export default MyFoods;
