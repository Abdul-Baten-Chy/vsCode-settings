import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="hero min-h-screen  bg-base-200">
      <div className="card flex-shrink-0 mt-14 w-full max-w-md shadow-2xl bg-base-100">
        <form className="card-body">
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
              <Link to={"/registration"}>
                Dont have account?{" "}
                <span className="text-[#26b1e9] font-bold">sign up</span>
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
          </div>
        </form>
        {/* {errMsg && <p className="text-red-500 text-center mb-3">{errMsg}</p>} */}
      </div>
    </div>
  );
};

export default SignIn;
