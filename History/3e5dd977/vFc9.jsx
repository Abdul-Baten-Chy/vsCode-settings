import { useContext } from "react";
import { DataContext } from "../Contex/ProductData";
import Card from "../Shops/Card";

const Trending = () => {
  const { products } = useContext(DataContext);
  return (
    <div>
      <h2 className="text-center text-2xl font-bold mt-14 mb-10">
        Tending Items
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center">
        {products.slice(0, 3).map((item) => (
          <Card key={item._id} product={item}></Card>
        ))}
      </div>
    </div>
  );
};

export default Trending;
