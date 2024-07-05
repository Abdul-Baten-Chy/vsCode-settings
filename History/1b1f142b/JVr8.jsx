/* eslint-disable react/prop-types */
const Card = ({ product }) => {
  return (
    <div className="card w-96 glass">
      <figure>
        <img src={product.image} alt={product.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.details}</p>
        <div className="card-actions justify-end">
          <button className="bg-[#34BFE6] text-white py-2 px-4 font-bold ml-10 mt-8">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
