import { NavLink, Outlet } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import logo from "../assets/logo.jpg";
export default function Navigation() {
  return (
    <>
      <div>
        <nav className="flex justify-between items-center text-center bg-neutral-200/50 shadow-md backdrop-blur-sm text-neutral-900 fixed w-full z-10 top-0 gap-2 px-10">
          <div>
            <img
              src={logo}
              alt="logo"
              className="text-black w-[60px] h-[60px] p-2 rounded-full overflow-hidden object-cover"
            />
          </div>
          <div className="flex gap-x-2">
            <NavLink
              to={"/"}
              className=" text-center p-2 hover:text-green-600 transition-all"
            >
              <div className="flex justify-center gap-x-2 items-center">
                <CiHome className="text-xl" />
                <p>Home</p>
              </div>
            </NavLink>
            <NavLink
              to={"/AboutUs"}
              className="text-center p-2 hover:text-green-600 transition-all"
            >
              <div className="flex items-center justify-center">
                <p>About Us</p>
              </div>
            </NavLink>
            <NavLink
              to={""}
              className="text-center p-2 hover:text-green-600 transition-all"
            >
              <div className="flex items-center justify-center">
                <p>Services</p>
              </div>
            </NavLink>
            <NavLink
              to={"/ContactUs"}
              className="bg-yellow-600 rounded-sm p-2 hover:text-neutral-200 hover:bg-yellow-700 hover:shadow-lg hover:scale-105 transition-all"
            >
              Contact
            </NavLink>
          </div>
        </nav>
        <Outlet />
      </div>
    </>
  );
}
