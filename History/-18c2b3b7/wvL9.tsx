const Header = () => {
  return (
    <div className="border-b-2 border-b-orange-500 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-bold tracking-tight text-orange-500"
        >
          MernEats.com
        </Link>
        <div className="md:hidden">
          {/* <MobileNav /> */} <h3>testing </h3>
        </div>
        <div className="hidden md:block">
          {/* <MainNav /> */} <h3>testing </h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
