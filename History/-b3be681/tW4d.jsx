/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
const UserRegForm = ({ setIsEdit, user, isloading }) => {
  if (isloading) return <h3>Loading...</h3>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleFormSubmit = (data) => {
    console.log(data);
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
