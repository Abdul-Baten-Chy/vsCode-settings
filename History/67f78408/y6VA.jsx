const AddFoods = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.email.value;
    const image = form.image.value;

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
    <div className="pt-36 min-h-[100vh]">
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
                <span className="label-text">image</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="image"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="number"
                name="quantity"
                placeholder="quantity"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Add Food
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
    </div>
  );
};

export default AddFoods;
