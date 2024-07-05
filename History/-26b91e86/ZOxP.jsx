import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { MyAuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(MyAuthContext);

  return (
    <div className="fixed w-full top-0 left-0 z-10 mb-20  ">
      <div className="navbar max-w-[1280px] mx-auto flex justify-between ">
        <div className="max-h-[70px]">
          <Link to={"/"}>
            <img src={logo} alt="" className="h-[70px]" />
          </Link>
        </div>
        <div>
          <Link to={"/"}>
            <button className="btn btn-ghost text-black font-semibold ">
              Home
            </button>
          </Link>
          <Link to={"/dashboard"}>
            <button className="btn btn-ghost text-black font-semibold">
              Dashboard
            </button>
          </Link>
          <Link to={"/contact"}>
            <button className="btn btn-ghost text-black font-semibold ">
              Contuct Us
            </button>
          </Link>
        </div>
        <div className="">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {user?.photoURL ? (
                <img src={user.photoURL} className="object-cover" />
              ) : (
                <img src="https://i.ibb.co/9YTytjp/profile.png" />
              )}
            </div>
          </label>
          {user ? (
            <button
              onClick={signOutUser}
              className="w-[80px] text-white font-bold h-10 rounded-full bg-[#FF9B44] hover:bg-[#FC6075] transition duration-500"
            >
              Log out
            </button>
          ) : (
            <Link to={"/signIn"}>
              <button className="w-[80px] text-white font-bold h-10 rounded-full bg-[#FF9B44] hover:bg-[#FC6075] transition duration-500">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
