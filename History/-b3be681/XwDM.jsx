/* eslint-disable react/prop-types */
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
const image_api = "7751b04e958c865b86a251faba8c77eb";
const image_key = `https://api.imgbb.com/1/upload?key=${image_api}`;
const UserRegForm = ({ setIsEdit, user, isloading }) => {
  // const { user } = useContext(MyContextProvider);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const mutation = useMutation({
    mutationFn: async (newData) => {
      await axios.put(
        `http://localhost:5000/api/my/users/${user?.data?.email}`,
        newData
      );
    },
  });

  if (isloading) return <h3>Loading...</h3>;

  const handleFormSubmit = async (data) => {
    const image = { image: data.image[0] };
    const result = await axios.post(image_key, image, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (result.data.success) {
      mutation.mutate({
        ...data,
        iamge: result.data.data.display_url,
        role: "regester user",
      });
    }
  };

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px] bg-white">
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Full Name
            </label>
            <input
              {...register("name", { requred: "Name is Required" })}
              type="text"
              name="name"
              id="name"
              defaultValue={user?.data?.name}
              placeholder="Full Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
            {errors?.name?.message && <p>{errors.name.message}</p>}
          </div>
          <div className="mb-5">
            <label
              htmlFor="phone"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Phone Number
            </label>
            <input
              {...register("phone", { requred: "phone is Required" })}
              type="text"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
            {errors?.phone?.message && <p>{errors.phone.message}</p>}
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Email Address
            </label>
            <input
              {...register("email", { requred: "phone is Required" })}
              type="email"
              name="email"
              id="email"
              defaultValue={user?.data?.email}
              placeholder="Enter your email"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
            {errors?.email?.message && <p>{errors.email.message}</p>}
          </div>
          <div className="mb-5">
            <label
              htmlFor="image"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Image
            </label>
            <input
              {...register("image", { requred: "image is Required" })}
              type="file"
              name="image"
              id="image"
              defaultValue={user?.data?.image}
              placeholder="Enter your email"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
            {errors?.email?.message && <p>{errors.email.message}</p>}
          </div>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="date"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Profession
                </label>
                <input
                  {...register("profession", {
                    requred: "profession is Required",
                  })}
                  type="text"
                  name="profession"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                {errors?.profession?.message && (
                  <p>{errors.profession.message}</p>
                )}
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="time"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Education
                </label>
                <input
                  {...register("education")}
                  type="text"
                  name="education"
                  id="time"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>

          <div className="mb-5 pt-3">
            <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
              Address Details
            </label>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <input
                    {...register("area")}
                    type="text"
                    name="area"
                    id="area"
                    placeholder="Enter area"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <input
                    {...register("city")}
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Enter city"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full flex-1 px-3 ">
                <div className="mb-5 ">
                  <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                    About
                  </label>
                  <input
                    {...register("about")}
                    type="text"
                    name="about"
                    id="state"
                    placeholder="Enter about"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-6">
            <button className="hover:shadow-form w-full rounded-md bg-[#85F2C2] py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Update
            </button>
            <button
              className="hover:shadow-form w-full rounded-md bg-[#F1B155] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              onClick={() => setIsEdit(false)}
            >
              close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserRegForm;
