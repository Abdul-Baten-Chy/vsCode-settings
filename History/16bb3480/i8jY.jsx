import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MyAuthContext } from "./context/MyContext";

const Registration = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState("");
  const { createAccount, updateUserProfile } = useContext(MyAuthContext);
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
    form.reset();
  };
  return (
    <div className="hero min-h-screen pt-8  bg-base-200">
      <div className="card flex-shrink-0 mt-14 w-full max-w-md shadow-2xl bg-base-100">
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
      </div>
    </div>
  );
};

export default Registration;
