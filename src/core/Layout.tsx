
import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";


const Layout = () => {
  return (
    <div className="bg-background h-full w-full">
      <Navbar />

      <div className="px-4 md:px-8 xl:px-10 pb-4 md:pb-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
