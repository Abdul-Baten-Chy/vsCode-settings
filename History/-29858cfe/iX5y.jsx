import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContextProvider } from "../Contex/MyContext";
import { DataContext } from "../Contex/ProductData";
import logo from "../assets/logo.png";
const NavBar = () => {
  const { user, handleSignOut } = useContext(MyContextProvider);
  const { cart } = useContext(DataContext);
  console.log(user);

  return (
    <div className="navbar bg-[#BFEAE0]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link>HOME</Link>
            </li>
            <li>
              <a>CATEGORY</a>
              <ul className="p-2">
                <li>
                  <Link>TOY CAR</Link>
                </li>
                <li>
                  <Link>TOY GUN</Link>
                </li>
                <li>
                  <Link>TOY DOLLS</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to={"/shop"}>SHOP</Link>
            </li>
            <li>
              <Link to={"/addProduct"}>ADD PRODUCT</Link>
            </li>
          </ul>
        </div>
        <div className="max-w-[140px]">
          <Link to={"/"}>
            {" "}
            <img src={logo}></img>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link> HOME</Link>
          </li>
          <li>
            <details>
              <summary>CATEGORY</summary>
              <ul className="p-2">
                <li>
                  <Link>TOY CAR</Link>
                </li>
                <li>
                  <Link>TOY GUN</Link>
                </li>
                <li>
                  <Link>TOY DOLLS</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link to={"/shop"}>SHOP</Link>
          </li>
          <li>
            <Link to={"/addProduct"}>ADD PRODUCT</Link>
          </li>
        </ul>
      </div>

      {/* editable  */}
      <div className="navbar-end">
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <Link to={"/cartItems"}>
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
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>

                  <span className="badge badge-sm indicator-item">
                    {cart.length}
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {user ? (
                <li>
                  <button onClick={handleSignOut}>Log Out</button>
                </li>
              ) : (
                <li>
                  <Link to={"/signIn"}>Sign In</Link>
                </li>
              )}
              <li> {user.displayName}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
