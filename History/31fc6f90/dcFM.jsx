import "./error.css";
const ErrorPage = () => {
  return (
    <div className="not-found-container">
      <h1>Oops!</h1>
      <h4>Something went wrong!</h4>
      <p>500 - Internal Server error</p>
      <button type="button" className="btn btn-dark">
        GO BACK
      </button>
    </div>
  );
};

export default ErrorPage;
