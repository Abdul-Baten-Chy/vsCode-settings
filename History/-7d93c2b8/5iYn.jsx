import { useContext } from "react";
import { DataContext } from "../context/Data";

const CardContainer = () => {
  const { foods, error, isLoading } = useContext(DataContext);
  console.log(foods);
  return <div></div>;
};

export default CardContainer;
