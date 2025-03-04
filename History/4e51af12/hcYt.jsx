const Header = () => {
  return (
    <div>
      <nav className="py-6">
        <div className="container mx-auto flex items-center justify-between gap-x-6">
          <a href="/">
            <img
              className="h-[40px]"
              src="./assets/lws-logo-en.svg"
              alt="Lws"
            />
          </a>

          <a className="px-5 py-2 bg-[#172227] rounded-[44px]" href="#">
            Get Admission
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
