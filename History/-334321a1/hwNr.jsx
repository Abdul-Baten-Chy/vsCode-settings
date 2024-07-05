import { useContext } from "react";
import { DataContext } from "../Contex/ProductData";

const ProductDeatils = () => {
  const { selectedProduct } = useContext(DataContext);
  return (
    <div>
      <h1>Deatails</h1>
    </div>
  );
};

export default ProductDeatils;
