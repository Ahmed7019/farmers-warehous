import { NavLink, Outlet } from "react-router-dom";
import { CiHome } from "react-icons/ci";

export default function Navigation() {
  return (
    <>
      <div>
        <nav className="flex justify-center text-center bg-green-900/50 shadow-md backdrop-blur-lg text-neutral-100 fixed w-full z-10 top-0 gap-2 p-1 mb-2">
          <div className="flex justify-between items-center"></div>
          <NavLink
            to={"/"}
            className="bg-green-600 rounded-sm text-center p-2 hover:text-green-600 hover:bg-neutral-200 hover:shadow-lg hover:scale-90 transition-all"
          >
            <div className="flex justify-center gap-x-2 items-center">
              <CiHome className="text-xl" />
              <p>Home</p>
            </div>
          </NavLink>
          <NavLink
            to={"/AboutUs"}
            className="bg-green-600  rounded-sm p-2 hover:text-green-600 hover:bg-neutral-200 hover:shadow-lg hover:scale-90 transition-all"
          >
            <div className="flex items-center justify-center">
              <p>About Us</p>
            </div>
          </NavLink>
          <NavLink
            to={"/ContactUs"}
            className="bg-green-600 rounded-sm p-2 hover:text-green-600 hover:bg-neutral-200 hover:shadow-lg hover:scale-90 transition-all"
          >
            Contact Us
          </NavLink>
        </nav>
        <Outlet />
      </div>
    </>
  );
}
