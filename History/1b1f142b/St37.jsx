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
          <button className="btn bg-[#34BFE6]">Learn now!</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
