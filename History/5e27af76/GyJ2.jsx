import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { DataContext } from "../Contex/ProductData";
import useBaseUrl from "../Hooks/useBaseUrl";

const UpdateProduct = () => {
  const axiosPub = useBaseUrl();
  const { refetch } = useContext(DataContext);
  const { name, rating, _id, price, image, details } = useLoaderData();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const price = form.price.value;
    const details = form.details.value;
    const category = form.category.value;
    const rating = form.rating.value;
    const productsInfo = {
      image,
      category,
      name,
      price,
      details,
      rating,
    };

    axiosPub.put(`/products/${_id}`, productsInfo).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "product has been updated",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });
    form.reset();
    // console.log(productsInfo);
  };
  return (
    <div className="hero min-h-screen  mt-16 ">
      <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleFormSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              defaultValue={name}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="text"
              name="image"
              placeholder="Image url"
              defaultValue={image}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="Price "
              defaultValue={price}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              name="rating"
              placeholder="rating "
              defaultValue={rating}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              name="details"
              defaultValue={details}
              placeholder="description"
            ></textarea>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Types</span>
            </label>
            <select id="country" name="category">
              <option value="car">Car</option>
              <option value="gun">Gun</option>
              <option value="dolls">Dolls</option>
            </select>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Update Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
