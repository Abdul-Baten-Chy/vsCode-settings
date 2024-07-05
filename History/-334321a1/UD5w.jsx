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
        <div className="bg-black">
          <img src={selectedProduct.image} alt="" className="w-1/2" />
        </div>
        <div>
          <h2 className="text-2xl ">
            {" "}
            PRODUCT NAME: {selectedProduct.name.toUpperCase()}
          </h2>
          <h3 className="text-2xl  mt-4"> Price: $ {selectedProduct.price}</h3>
          <p className="mt-4">{selectedProduct.details}</p>
          <div>
            <button className="bg-[#34BFE6] text-white py-2 px-4 font-bold  mt-8">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDeatils;
