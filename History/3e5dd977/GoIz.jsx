import { DataContext } from "../Contex/ProductData";
import Card from "../Shops/Card";

const Trending = () => {
  const { products } = useContext(DataContext);
  return (
    <div>
      {products.slice(0, 4).map((item) => (
        <Card key={item._id} product={item}></Card>
      ))}
    </div>
  );
};

export default Trending;
