import { useContext } from "react";
import { DataContext } from "../Contex/ProductData";

/* eslint-disable react/prop-types */
const Card = ({ product }) => {
  const { setSelectedProduct } = useContext(DataContext);
  return (
    <div className="card w-96 glass">
      <figure>
        <img src={product.image} alt={product.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.details}</p>
        <div className="card-actions justify-between">
          <h4 className=" py-2 px-4 font-bold  mt-8">
            Price: ${product.price}
          </h4>
          {/* <Link to={"/shop/deatails"}>
            
          </Link> */}
          <button
            className="bg-[#34BFE6] text-white py-2 px-4 font-bold  mt-8"
            onClick={() => setSelectedProduct(product)}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
