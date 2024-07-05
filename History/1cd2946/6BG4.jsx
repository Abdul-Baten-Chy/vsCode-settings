import { RxAvatar } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const NavBar = () => {
  // const { user, signOutUser } = useContext(MyAuthContext);
  const user = true;
  const navLinks = (
    <>
      <NavLink to="/">
        <li className="mr-3 hover:bg-[#85F2C2] rounded-md hover:scale-x-110 px-2 py-1 transition duration-500 hover:text-black">
          Home
        </li>
      </NavLink>
      <NavLink to="/shops">
        <li className="mr-3 hover:bg-[#85F2C2] rounded-md hover:scale-x-110 px-2 py-1 transition duration-500 hover:text-black">
          Shops
        </li>
      </NavLink>
      <NavLink to="/profile">
        <li className="mr-3 hover:bg-[#85F2C2] rounded-md hover:scale-x-110 px-2 py-1 transition duration-500 hover:text-black">
          Profile
        </li>
      </NavLink>
    </>
  );
  return (
    <nav className="w-full border-b-2 mb-10">
      <div className="navbar  max-w-[1280px]  mx-auto px-4 md:px-8 lg:px-16">
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
              className="menu text-[#333333] menu-sm font-bold dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/">
            <img src={logo} alt="" className="w-40 -ml-3" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu text-[#333333] menu-horizontal px-1  text-[18px]">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button
              // onClick={signOutUser}
              className="mr-3 bg-[#85F2C2] rounded-md hover:scale-x-110 px-2 py-1 transition duration-500 text-white font-bold"
            >
              Log out
            </button>
          ) : (
            <Link
              to={"/signIn"}
              className="text-[20px] text-white hover:text-[#FF407D]"
            >
              Login
            </Link>
          )}
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {user?.photoURL ? (
                <img src={user?.photoURL} />
              ) : (
                <RxAvatar className="text-4xl text-center text-[#85F2C2]" />
              )}
            </div>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
