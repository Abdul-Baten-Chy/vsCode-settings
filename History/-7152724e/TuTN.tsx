import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto flex-1 py-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Layout;
