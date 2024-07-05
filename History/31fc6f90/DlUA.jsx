import { Link } from "react-router-dom";
import "./error.css";
const ErrorPage = () => {
  return (
    <div className="not-found-container bg-[#a1f273]">
      <h1>Oops!</h1>
      <h4>Something went wrong!</h4>
      <p>500 - Internal Server error</p>
      <Link to={"/"}>
        <button type="button" className="btn btn-dark">
          GO BACK
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
