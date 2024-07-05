import { useContext } from "react";
import { dataContext } from "../context/Data";

const CardContainer = () => {
  const { foods, error, isLoading } = useContext(dataContext);
  console.log(foods);
  return <div></div>;
};

export default CardContainer;
