import { doSignOut } from "./js/Firebase/auth";
import { auth } from "./js/Firebase/firebase";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
export default function Settings() {
  const handleSignOut = async () => {
    try {
      await doSignOut(auth);
      console.log("SignedOut Successfully");
    } catch (error) {
      console.error("Error Signing out", error.message);
    }
  };

  const [isVisible, setisVisible] = useState(true);

  // Logout Alert

  const confirmLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log me out!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        // User confirmed, proceed with logout
        handleSignOut()
          .then(() => {
            Swal.fire({
              title: "Logged Out!",
              text: "You have been successfully logged out.",
              icon: "success",
              confirmButtonColor: "#3085d6",
            });
          })
          .catch((error) => {
            Swal.fire({
              title: "Error!",
              text: "An error occurred while logging out. Please try again.",
              icon: "error",
              confirmButtonColor: "#3085d6",
            });
            console.error("Logout error:", error);
          });
      }
    });
  };

  // On pressing esc on keyboard hide the settings menu
  const hideMenu = () => {
    setisVisible(false);
  };

  const handleEsc = (event) => {
    if (event.key === "Escape") hideMenu();
  };
  useEffect(() => {
    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
    // clear event listener
  });
  return (
    <>
      <div
        className={`${
          isVisible ? "absolute" : "hidden"
        } right-0 top-12 z-10 bg-neutral-200 p-3 rounded-lg transition-all`}
        onBlur={() => hideMenu}
      >
        <ul className="flex flex-col gap-2 text-sm text-neutral-600">
          <div className="flex self-end">
            <button
              className="self-end text-xl"
              onClick={hideMenu}
              aria-label="Close settings menu"
            >
              <IoClose />
            </button>
          </div>
          <li>
            <Link
              to={"./Profile"}
              className="flex items-center gap-x-2 hover:text-neutral-900"
              aria-label="Personal Information"
            >
              Personal Information <CgProfile />
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-x-2 hover:text-neutral-900"
              aria-label="My Crops"
            >
              My crops
            </Link>
          </li>
          <hr className="border-black my-2" />
          <li className="text-center w-full">
            <button
              className="w-full p-2 rounded-md text-neutral-200 bg-red-600 flex items-center justify-center gap-x-2 hover:bg-red-500 hover:text-neutral-100"
              aria-label="Logout"
              onClick={confirmLogout}
            >
              Logout
              <FaSignOutAlt />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
