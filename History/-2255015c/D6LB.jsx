import { useContext } from "react";
import { DataContext } from "../Contex/ProductData";
import Card from "./Card";

const Shops = () => {
  const products = useContext(DataContext);
  return (
    <div className="mt-24">
      {products.map((product) => (
        <Card key={product._id} product={product}></Card>
      ))}
    </div>
  );
};

export default Shops;
