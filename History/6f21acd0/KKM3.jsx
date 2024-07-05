import data from "../Data/CategoryData.jsx";
import { getImgUrl } from "../Hooks/GetImgUrl";
const Category = () => {
  return (
    <div>
      <h2 className="text-center mt-24 mb-12 text-3xl font-bold">
        Categories of Toys
      </h2>
      <div className="grid grid-cols-3 gap-5 ">
        {data.map((item) => (
          <div
            key={item.id}
            className="card w-96 bg-base-100 shadow-xl image-full"
          >
            <figure>
              <img src={getImgUrl(item.img)} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
