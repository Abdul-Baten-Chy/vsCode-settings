import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  //   const { user, handleSignOut } = useContext(MyContextProvider);
  const user = 4;
  const handleSignOut = () => {};
  // const nav = (
  //   <>
  //     <li>
  //       <Link>HOME</Link>
  //     </li>
  //     <li>
  //       <Link to={"/shop"}>ALL FOOD</Link>
  //     </li>
  //     <li>
  //       <Link to={"/addProduct"}>ADD FOOD</Link>
  //     </li>
  //     <li>
  //       <Link to={"/myFood"}>MY FOOD</Link>
  //       <Link to={"/myReq"}>MY REQUEST</Link>
  //     </li>
  //   </>
  // );
  const navLinks = (
    <>
      <NavLink to="/">
        <li className="mr-3 hover:bg-[#FF407D] hover:px-1 hover:py-1 hover:text-black">
          Home
        </li>
      </NavLink>
      <NavLink to="/addProduct">
        <li className="mr-3 hover:bg-[#FF407D] hover:px-1 hover:py-1 hover:text-black">
          Add Food
        </li>
      </NavLink>
      <NavLink to="/myProduct">
        <li className="mr-3 hover:bg-[#FF407D] hover:px-1 hover:py-1 hover:text-black">
          My Food
        </li>
      </NavLink>
      <NavLink to="/myProduct">
        <li className="mr-3 hover:bg-[#FF407D] hover:px-1 hover:py-1 hover:text-black">
          My Request
        </li>
      </NavLink>
    </>
  );
  return (
    <nav className="w-full absolute z-20 ">
      <div className="navbar  max-w-[1380px]  mx-auto px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm font-bold dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <img src={logo} alt="" className="w-40 -ml-3" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1  text-[20px] text-white">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {user?.photoURL ? (
                <img src={user.photoURL} />
              ) : (
                <img src="https://i.ibb.co/9YTytjp/profile.png" />
              )}
            </div>
          </label>
          {user ? (
            <button
              onClick={handleSignOut}
              className="text-[20px] text-white hover:text-[#FF407D]"
            >
              Log out
            </button>
          ) : (
            <Link to={"/signIn"}>Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
