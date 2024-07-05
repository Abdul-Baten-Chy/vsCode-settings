import { useContext } from "react";
import { DataContext } from "../Contex/ProductData";

const ProductDeatils = () => {
  const { selectedProduct } = useContext(DataContext);
  return (
    <div>
      <h4>Products Deatails Information</h4>
      <div>
        <div>
          <img src={selectedProduct.image} alt="" />
        </div>
        <div>
          <h2> Product Name: {selectedProduct.name}</h2>
          <h3> Price: $ {selectedProduct.price}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductDeatils;
