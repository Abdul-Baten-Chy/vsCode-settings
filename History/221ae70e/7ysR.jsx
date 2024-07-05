import { useContext } from "react";
import { DataContext } from "../Contex/ProductData";

const CratItems = () => {
  const { products, cart } = useContext(DataContext);
  const cartProduct = products.filter((item) => item._id.includes(cart._id));
  console.log(cartProduct);
  return (
    <div>
      <h3>Product in Cart </h3>
      <div>
        <img src="" alt="" />
        <h3>Title</h3>
        <p>price:</p>
        <button>Remove</button>
      </div>
    </div>
  );
};

export default CratItems;
