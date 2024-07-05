import { Link } from "react-router-dom";
import data from "../Data/CategoryData.jsx";
const Category = () => {
  return (
    <div>
      <h2 className="text-center mt-24 mb-12 text-3xl font-bold">
        Categories of Toys
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto justify-center items-center">
        {data.map((item) => (
          <div
            key={item.id}
            className="card w-96 bg-base-100 shadow-xl image-full"
          >
            <figure>
              <img src={item.img} alt="Shoes" />
            </figure>
            <div className="card-body flex flex-col items-center gap-10 justify-center">
              <h2 className="card-title text-xl">{item.name}</h2>
              <div className="card-actions">
                <Link to={`/productByCategory/${item.category}`}>
                  {" "}
                  <button className="btn btn-primary">BROWSE</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
