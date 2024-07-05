import { useContext } from "react";
import { DataContext } from "../context/Data";

const MyFoods = () => {
  const { foods } = useContext(DataContext);
  return (
    <div className="pt-36 min-h-[100vh]">
      <h4>add my foods</h4>
    </div>
  );
};

export default MyFoods;
