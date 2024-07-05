import useBaseUrl from "../Hooks/useBaseUrl";

const AddProduct = () => {
  const axiosPub = useBaseUrl();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const price = form.price.value;
    const description = form.description.value;
    const category = form.category.value;
    const rating = form.rating.value;
    const productsInfo = {
      image,
      category,
      name,
      price,
      description,
      rating,
    };
    // fetch(
    //   "https://backend-qwywwjwvf-abdu-baten-chys-projects.vercel.app/products",
    //   {
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify(productsInfo),
    //   }
    // )
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
    axiosPub.post("/products", productsInfo).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "product has been added to cart",
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

export default AddProduct;
