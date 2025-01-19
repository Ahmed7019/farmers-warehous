import { doSignOut } from "./js/Firebase/auth";
import { auth } from "./js/Firebase/firebase";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";
import { useState } from "react";
export default function Settings() {
  const handleSignOut = () => {
    doSignOut(auth);
  };

  const [display, setDisplay] = useState("absolute");
  return (
    <>
      <div
        className={`${display} right-0 top-12 z-10 bg-neutral-200 p-3 rounded-lg`}
      >
        <ul className="flex flex-col gap-2 text-sm text-neutral-600">
          <div className="flex self-end">
            <button
              className="self-end text-xl"
              onClick={() => setDisplay("hidden")}
            >
              <IoClose />
            </button>
          </div>
          <li>
            <Link className="flex items-center gap-x-2 hover:text-neutral-900">
              Personal Information <CgProfile />
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-x-2 hover:text-neutral-900">
              My crops
            </Link>
            <hr className="border-black my-2" />
          </li>
          <li className="text-center w-full">
            <Link
              onClick={handleSignOut}
              to={"../"}
              className="w-full p-2 rounded-md text-neutral-200 bg-red-600 flex items-center justify-center gap-x-2 hover:bg-red-500 hover:text-neutral-100"
            >
              <p>Logout</p> <FaSignOutAlt />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
