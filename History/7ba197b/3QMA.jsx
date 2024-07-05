/* eslint-disable react/prop-types */

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import Swal from "sweetalert2";
import { MyAuthContext } from "../context/MyContext";

/* eslint-disable no-unused-vars */
const Modal = ({ onClose, food }) => {
  const { user } = useContext(MyAuthContext);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (reqFood) =>
      await axios.post("http://localhost:4000/reqFood", reqFood),
    onSuccess: () => {
      queryClient.invalidateQueries(["reqFood"]);
    },
  });

  const updateAvailabilityMutation = useMutation({
    mutationFn: async (foodId) =>
      await axios.patch(`http://localhost:4000/foods/first/${foodId}`),
    onSuccess: () => {
      queryClient.invalidateQueries(["foods"]);
    },
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.name.value;
    const image = form.image.value;
    const quantity = form.quantity.value;
    const location = form.location.value;
    const domnarName = form.domnarName.value;
    const domnarEmail = form.domnarEmail.value;
    const donarImage = form.donarImage.value;
    const expire = form.expire.value;
    const user = form.user.value;
    const dMoney = form.dMoney.value;
    const ids = food._id;
    const reqFood = {
      name,
      image,
      quantity,
      location,
      donarImage,
      domnarName,
      domnarEmail,
      expire,
      user,
      dMoney,
      ids,
    };
    // mutation.mutate(reqFood);
    Promise.all([
      mutation.mutate(reqFood),
      updateAvailabilityMutation.mutate(food._id),
    ]).then(() => {
      // Handle success or any additional actions after both mutations are completed
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Request has been sent",
        showConfirmButton: false,
        timer: 1500,
      });
      onClose(false);
    });
  };
  // if (mutation.isSuccess) {
  //   Swal.fire({
  //     position: "top-end",
  //     icon: "success",
  //     title: "Request has been sent",
  //     showConfirmButton: false,
  //     timer: 1500,
  //   });
  //   onClose(false);
  // }

  return (
    <div className="bg-black  bg-opacity-90 w-full z-10 absolute top-0 left-0">
      <div className="hero h-full">
        <div className="card flex-shrink-0 mt-14 mb-14 w-full max-w-3xl mx-auto">
          <form
            className="grid md:grid-cols-2 gap-x-8 justify-center mt-10"
            onSubmit={handleSubmit}
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white text-xl">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                defaultValue={food.name}
                className="input input-bordered"
                disabled
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white text-xl">image</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="image"
                defaultValue={food.image}
                className="input input-bordered"
                required
                disabled
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white text-xl">Quantity</span>
              </label>
              <input
                type="number"
                name="quantity"
                placeholder="quantity"
                defaultValue={food.quantity}
                className="input input-bordered"
                required
                disabled
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white text-xl">Location</span>
              </label>
              <input
                type="text"
                name="location"
                placeholder="location"
                defaultValue={food.location}
                className="input input-bordered"
                required
                disabled
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white text-xl">
                  Donar Name
                </span>
              </label>
              <input
                type="text"
                name="domnarName"
                placeholder="location"
                defaultValue={food.domnarName}
                className="input input-bordered"
                required
                disabled
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white text-xl">
                  Donar Email
                </span>
              </label>
              <input
                type="text"
                name="domnarEmail"
                placeholder="location"
                defaultValue={food.user ? food.user : "No donar email avilable"}
                className="input input-bordered"
                required
                disabled
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white text-xl">
                  Donar Image
                </span>
              </label>
              <input
                type="text"
                name="donarImage"
                placeholder="donarImage"
                defaultValue={food.donarImage}
                className="input input-bordered"
                required
                disabled
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white text-xl">
                  Expire Date
                </span>
              </label>
              <input
                type="text"
                name="expire"
                placeholder="expire date"
                defaultValue={food.expire}
                className="input input-bordered"
                required
                disabled
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white text-xl">
                  User Email
                </span>
              </label>
              <input
                type="text"
                name="user"
                placeholder="expire date"
                defaultValue={user?.email}
                className="input input-bordered"
                required
                disabled
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white text-xl">
                  Donation Money
                </span>
              </label>
              <input
                type="number"
                name="dMoney"
                placeholder="donation money"
                className="input input-bordered"
                required
              />
            </div>
            <div className=" flex gap-x-8  col-span-2">
              <button
                type="submit"
                className="bg-[#36D6A8] mt-10 w-2/3 h-[35px] text-white font-semibold hover:bg-[#5ee8c1] transition ease-in-out duration-700 hover:scale-110"
              >
                Request
              </button>
              <button
                type="submit"
                className="bg-[#36D6A8] mt-10 w-2/3 h-[35px] text-white font-semibold hover:bg-[#5ee8c1] transition ease-in-out duration-700 hover:scale-110"
                onClick={() => onClose(false)}
              >
                Cancel
              </button>
            </div>
          </form>
          {/* {errMsg && <p className="text-red-500 text-center mb-3">{errMsg}</p>} */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
