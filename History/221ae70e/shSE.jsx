import { useContext } from "react";
import { DataContext } from "../Contex/ProductData";

const CratItems = () => {
  const { cart } = useContext(DataContext);

  console.log(cart);
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
