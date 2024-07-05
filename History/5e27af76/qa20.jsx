const UpdateProduct = () => {
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
              placeholder="Price "
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
              name="description"
              placeholder="description"
            ></textarea>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Types</span>
            </label>
            <select id="country" name="category">
              <option value="Mobile">Mobile</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
