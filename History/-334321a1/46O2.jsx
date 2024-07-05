import { useContext } from "react";
import { DataContext } from "../Contex/ProductData";

const ProductDeatils = () => {
  const { selectedProduct } = useContext(DataContext);
  return (
    <div>
      <h4>hellow</h4>
      <img src={selectedProduct.image} alt="" />
    </div>
  );
};

export default ProductDeatils;
