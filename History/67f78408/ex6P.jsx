import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import Swal from "sweetalert2";
import { MyAuthContext } from "../context/MyContext";

const AddFoods = () => {
  const { user } = useContext(MyAuthContext);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (newFood) =>
      await axios.post("http://localhost:4000/foods", newFood),
    onSuccess: () => {
      queryClient.invalidateQueries(["foods"]);
    },
  });
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const quantity = form.quantity.value;
    const location = form.location.value;
    const domnarName = form.domnarName.value;
    const donarImage = form.donarImage.value;
    const expire = form.expire.value;
    const newFood = {
      name,
      image,
      quantity,
      location,
      domnarName,
      donarImage,
      expire,
      isAvailable: true,
      user: user.email,
    };
    mutation.mutate(newFood);
    form.reset();
  };
  if (mutation.isSuccess) {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "product has been added",
      showConfirmButton: false,
      timer: 1500,
    });
  }
  return (
    <div className="pt-36 min-h-[100vh]">
      <div className="hero min-h-[100vh] pt-14   bg-base-200">
        <div className="card flex-shrink-0 mt-14 mb-14 w-full max-w-md shadow-2xl bg-base-100">
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
                <span className="label-text">image</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="image"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="number"
                name="quantity"
                placeholder="quantity"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                name="location"
                placeholder="location"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Donar Name</span>
              </label>
              <input
                type="text"
                name="domnarName"
                placeholder="location"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Donar Image</span>
              </label>
              <input
                type="text"
                name="donarImage"
                placeholder="donarImage"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Expire Date</span>
              </label>
              <input
                type="text"
                name="expire"
                placeholder="expire date"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Add Food
              </button>
            </div>
          </form>
          {/* {errMsg && <p className="text-red-500 text-center mb-3">{errMsg}</p>} */}
        </div>
      </div>
    </div>
  );
};

export default AddFoods;
