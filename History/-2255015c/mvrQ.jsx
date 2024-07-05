import { DataContext } from "../Contex/ProductData";
import Card from "./Card";

const Shops = () => {
  const products = useContext(DataContext);
  return (
    <div>
      {products.map((product) => (
        <Card key={product._id} product={product}></Card>
      ))}
    </div>
  );
};

export default Shops;
