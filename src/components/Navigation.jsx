import { NavLink, Outlet } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import { CiHome } from "react-icons/ci";
// import { FaQuestion } from "react-icons/fa";
// import { MdConnectWithoutContact } from "react-icons/md";

export default function Navigation() {
  return (
    <>
      <div className="mr-8">
        <nav className="flex flex-col gap-y-4 justify-center w-32 text-center bg-green-900 shadow-md backdrop-blur-lg text-neutral-100 fixed left-0 h-full my-8 font-bold rounded-lg overflow-hidden px-2">
          <div className="flex justify-center items-center">
            <img
              src={Logo}
              alt="/"
              className="w-24 h-24 object-cover relative bottom-24 rounded-full"
            />
          </div>
          <NavLink
            to={"/"}
            className="bg-green-600 w-full rounded-sm p-2 hover:text-green-600 hover:bg-neutral-200 hover:shadow-lg hover:scale-90 transition-all"
          >
            <div className="flex justify-center gap-x-2 items-center">
              <CiHome className="text-xl" />
              <p>Home</p>
            </div>
          </NavLink>
          <NavLink
            to={"/Inventory"}
            className="bg-green-600 w-full rounded-sm p-2 hover:text-green-600 hover:bg-neutral-200 hover:shadow-lg hover:scale-90 transition-all"
          >
            <div className="flex items-center justify-center">
              {/* <FaQuestion className="text-xl font-bold" />   */}
              <p>Inventory</p>
            </div>
          </NavLink>
          <NavLink
            to={"/AboutUs"}
            className="bg-green-600 w-full rounded-sm p-2 hover:text-green-600 hover:bg-neutral-200 hover:shadow-lg hover:scale-90 transition-all"
          >
            <div className="flex items-center justify-center">
              {/* <MdConnectWithoutContact className="text-xl font-bold" /> */}
              <p>About Us</p>
            </div>
          </NavLink>
          <NavLink
            to={"/ContactUs"}
            className="bg-green-600 w-full rounded-sm p-2 hover:text-green-600 hover:bg-neutral-200 hover:shadow-lg hover:scale-90 transition-all"
          >
            Contact Us
          </NavLink>
          <NavLink
            to={"/Storages"}
            className="bg-green-600 w-full rounded-sm p-2 hover:text-green-600 hover:bg-neutral-200 hover:shadow-lg hover:scale-90 transition-all"
          >
            Storages
          </NavLink>
        </nav>
        <Outlet />
      </div>
    </>
  );
}
