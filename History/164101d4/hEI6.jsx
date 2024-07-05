import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MyContextProvider } from "../Contex/MyContext";

const SignIn = () => {
  const [successMsg, setSuccessMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const { handleSignIn, loginWithGoogle } = useContext(MyContextProvider);
  const location = useLocation();
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    setErrMsg("");

    handleSignIn(email, password)
      .then((res) => {
        console.log(res.user);
        setSuccessMsg("Sign-in Successful");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err.message);
        setErrMsg(err.message);
      });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((res) => {
        console.log(res.user);
        setSuccessMsg("Login Successful");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err.message);
        setErrMsg(err.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200 mt-16 ">
      <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleFormSubmit}>
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
              <Link to={"/signUp"}>
                Do not have account?
                <span className="text-[#26b1e9] font-bold"> Register</span>{" "}
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <button
          className="btn btn-primary mx-8 mb-6 bg-[#66eb8e] border-none text-[#7a2dc3] hover:text-white"
          onClick={handleGoogleLogin}
        >
          Login With Google
        </button>
        {errMsg && <p className="text-red-500 text-center mb-3">{errMsg}</p>}
        {successMsg && (
          <p className="text-red-500 text-center mb-3">{successMsg}</p>
        )}
      </div>
    </div>
  );
};
export default SignIn;
