import { useContext } from "react";
import { DataContext } from "../Contex/ProductData";

const CratItems = () => {
  const { cart } = useContext(DataContext);

  return (
    <div>
      <h3>Product in Cart </h3>
      {cart.map((item) => (
        <div>
          <img src={item.image} alt="" />
          <h3>{item.name}</h3>
          <p>price:{item.price}</p>
          <button>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default CratItems;
