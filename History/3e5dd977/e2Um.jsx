import { useContext } from "react";
import { DataContext } from "../Contex/ProductData";
import Card from "../Shops/Card";

const Trending = () => {
  const { products } = useContext(DataContext);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {products.slice(0, 4).map((item) => (
        <Card key={item._id} product={item}></Card>
      ))}
    </div>
  );
};

export default Trending;
