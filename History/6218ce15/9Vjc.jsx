import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";
import useBaseUrl from "../Hooks/useBaseUrl";

const UpdateProduct = () => {
  const { name, rating, _id, price, image, details } = useLoaderData();
  const queryClient = useQueryClient();
  const axiosPub = useBaseUrl();
  const mutation = useMutation({
    mutationFn: async (productsInfo) =>
      await axiosPub.put(`/products/${_id}`, productsInfo),
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });

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

    mutation.mutate(["products"]);
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
