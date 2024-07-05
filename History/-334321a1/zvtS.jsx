import { useContext } from "react";
import { DataContext } from "../Contex/ProductData";

const ProductDeatils = () => {
  const { selectedProduct } = useContext(DataContext);
  return (
    <div>
      <h4 className="text-center text-3xl font-semibold mt-20">
        Products Deatails Information
      </h4>
      <div className="flex flex-col lg:flex-row mt-14 mx-auto">
        <div>
          <img src={selectedProduct.image} alt="" className="w-1/2" />
        </div>
        <div>
          <h2 className="text-2xl ">
            {" "}
            PRODUCT NAME: {selectedProduct.name.toUpperCase()}
          </h2>
          <h3> Price: $ {selectedProduct.price}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductDeatils;
