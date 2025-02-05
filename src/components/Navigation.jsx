import { NavLink, Outlet } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { CiHome } from "react-icons/ci";
import logo from "../assets/logo.jpg";
import { CiMenuBurger } from "react-icons/ci";
export default function Navigation() {
  const [showMenu, setShowMenu] = useState("hidden");
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setShowMenu("hidden");
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOnMenu = (e) => {
    if (menuRef.current.contains(e.target)) setShowMenu("hidden");
  };

  function toggleMenu() {
    if (showMenu === "hidden") setShowMenu("block");
    else setShowMenu("hidden");
  }
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
          <button
            className="sm:hidden block text-2xl border p-2 rounded-md"
            title="Menu"
            onClick={(e) => {
              toggleMenu();
              if (menuRef.current.contains(e.target)) setShowMenu("hidden");
            }}
            ref={buttonRef}
          >
            <CiMenuBurger />
          </button>
          <div
            className={`flex sm:flex-row sm:flex flex-col ${showMenu} absolute right-4 sm:relative sm:bg-transparent sm:top-0 sm:text-black  bg-neutral-100 shadow-sm shadow-neutral-500  top-16 w-44 sm:w-fit rounded-lg gap-x-2`}
            ref={menuRef}
            onClick={handleClickOnMenu}
          >
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
              to={"/Services"}
              className="text-center p-2 hover:text-green-600 transition-all"
            >
              <div className="flex items-center justify-center">
                <p>Services</p>
              </div>
            </NavLink>
            <NavLink
              to={"/ContactUs"}
              className="bg-yellow-300 rounded-sm p-2 hover:text-yellow-100 hover:bg-yellow-500 hover:shadow-lg transition-all"
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
