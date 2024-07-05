import { useContext, useState } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MyAuthContext } from "./context/MyContext";

const Registration = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState("");
  const { createAccount, updateUserProfile, loginWithGoogle } =
    useContext(MyAuthContext);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const name = form.get("name");

    setErrMsg("");

    const password = form.get("password");
    if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*()])(.{6,})$/.test(password)) {
      return;
    }

    createAccount(email, password)
      .then((res) => {
        updateUserProfile(res.user, { displayName: name });
        navigate(location?.state ? location.state : "/")
          .then()
          .catch();
      })
      .catch((err) => {
        console.log(err.message);
        setErrMsg(err.message);
      });
  };
  return (
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
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <Link to={"/signIn"}>
                Already have account?{" "}
                <span className="text-[#26b1e9] font-bold">sign in</span>
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
        {errMsg && <p className="text-red-500 text-center mb-3">{errMsg}</p>}
        <div className="flex gap-5 justify-center">
          <button
            className="bg-[#36D6A8] w-1/3 h-10 mb-10"
            onClick={loginWithGoogle}
          >
            {" "}
            <FaGoogle className="text-white text-2xl mx-auto " />
          </button>
          <button className="bg-[#36D6A8] w-1/3 h-10 mb-10">
            {" "}
            <FaFacebookF className="text-white text-2xl mx-auto " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
