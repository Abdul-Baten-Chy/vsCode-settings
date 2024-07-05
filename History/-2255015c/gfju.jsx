import { useContext } from "react";
import { DataContext } from "../Contex/ProductData";
import Card from "./Card";

const Shops = () => {
  const products = useContext(DataContext);
  console.log(products);
  return (
    <div className="mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <Card key={product._id} product={product}></Card>
      ))}
    </div>
  );
};

export default Shops;
