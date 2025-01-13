/* eslint-disable react/no-unescaped-entities */

// Import styling for animation
import "../index.css";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { useAuth } from "../contexts/authContext";
import { doSignOut } from "./js/Firebase/auth";
import { auth } from "./js/Firebase/firebase";
import { useEffect } from "react";
import { getUser } from "./js/Firebase/firestore";
export default function Home() {
  const { userLoggedIn } = useAuth();
  const { currentUser } = useAuth();
  // Get user from DB
  useEffect(() => {
    if (userLoggedIn) {
      getUser(currentUser);
    }
  }, [userLoggedIn]);
  const handleSignOut = () => {
    doSignOut(auth);
  };

  return (
    <>
      <div className=" mt-4 mx-4 relative grid place-items-center justify-center selection:bg-green-600 selection:text-neutral-50">
        <div className="mt-12">
          {/* When User is logged in show these */}
          {userLoggedIn == true && (
            <div className="flex items-center justify-between gap-x-2 my-2">
              <p className="text-3xl font-bold capitalize">
                Welcome {currentUser.displayName} !
              </p>

              <Link
                onClick={handleSignOut}
                to={"../"}
                className="group flex items-center justify-start w-11 h-11 bg-red-600 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1"
              >
                <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
                  <svg className="w-4 h-4" viewBox="0 0 512 512" fill="white">
                    <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                  </svg>
                </div>
                <div className="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  Logout
                </div>
              </Link>
            </div>
          )}

          {/* When user is not logged in show these */}
          {userLoggedIn == false && (
            <div className="flex items-center justify-between gap-x-2 my-2">
              <p className="text-3xl font-bold">Farmers Warehouse</p>
              <div className="flex gap-x-2">
                <Link
                  to="/Signin"
                  className="hover:text-green-600 hover:bg-neutral-300/50 hover:shadow-md transition-colors bg-green-600 text-neutral-200 p-2 rounded"
                >
                  Login
                </Link>
                <Link
                  to="/Signup"
                  className="hover:text-green-600 hover:bg-neutral-300/50 hover:shadow-md transition-colors bg-green-600 text-neutral-200 p-2 rounded"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          )}

          <div className="flex justify-between">
            <div className="w-32 h-3 rounded-sm bg-green-600 animate-pulse mb-4"></div>
            <div className="flex gap-x-2">
              <FaLinkedin className="hover:text-green-600 cursor-pointer" />
              <FaXTwitter className="hover:text-green-600 cursor-pointer" />
              <FaInstagram className="hover:text-green-600 cursor-pointer" />
              <FaFacebook className="hover:text-green-600 cursor-pointer" />
            </div>
          </div>

          <div className="relative">
            <div className=" my-2 flex justify-center relative ">
              <div className="flex flex-col gap-y-4 pr-4 bg-green-600 p-4 rounded-l-md animate-scrolling-l">
                <h1 className="text-3xl font-semibold text-white">
                  Protect Your Produce: Our Warehouse is Your Safe Heaven
                </h1>
                <p className="font-thin text-neutral-200">
                  At Our Farmers Warehouse, we take pride in offering premium
                  storage solutions for your valuable crops. With a focus on
                  quality and excellence, we provide a secure and reliable
                  environment to store your produce, ensuring that it maintains
                  its freshness and value.
                </p>

                <div className="flex flex-col gap-y-4 justify-start items-start ">
                  <p className="font-thin text-neutral-200">
                    We are a dedicated team committed to supporting farmers by
                    providing top-notch storage facilities for their crops. With
                    years of experience in the industry, we understand the
                    importance of proper storage in preserving the quality of
                    your harvest.
                  </p>

                  {!userLoggedIn && (
                    <Link
                      to="/Signup"
                      className="p-2 rounded font-semibold bg-neutral-200 hover:text-neutral-100 hover:bg-green-600 transition-colors"
                    >
                      Get started
                    </Link>
                  )}
                  {userLoggedIn && (
                    <Link
                      to="/Storages"
                      className="p-2 rounded font-semibold bg-yellow-400 hover:text-neutral-100 hover:bg-yellow-700 transition-colors"
                    >
                      Explore
                    </Link>
                  )}
                </div>
              </div>
              <img
                src="https://plus.unsplash.com/premium_photo-1661849446191-8793e93a27c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGNyb3BzJTIwc3RvcmFnZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="crops"
                className="rounded-r-md animate-scrolling-r"
              />
            </div>
          </div>
        </div>

        <div className="my-8">
          <section>
            <div className="flex gap-x-8 my-2 justify-center bg-green-600 p-4 rounded-md">
              <img
                src="https://plus.unsplash.com/premium_photo-1664297166040-4f5dd279f234?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGNyb3BzJTIwc3RvcmFnZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="storing crops"
                className="rounded-md"
              />
              <div>
                <h2 className="text-3xl font-semibold text-white mb-4">
                  Peace of Mind for Your Produce
                </h2>
                <p className="font-thin text-neutral-200">
                  Our primary goal is to offer farmers a trusted space to store
                  their crops with the highest standards of care. From
                  temperature-controlled environments to vigilant security
                  measures, we ensure that your produce remains in optimal
                  condition until it's ready for market. Experience peace of
                  mind knowing that your crops are in safe hands at Our Farmers
                  its quality for the market ahead.
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className=" w-full overflow-hidden bg-green-600 rounded-t-xl">
          <section className="text-neutral-200 grid p-4 grid-cols-3">
            <div>
              <p>Phone: 123-456-7890</p>
              <p>Address: 123 Main Street, City, Country</p>
            </div>
            <div className="flex flex-col items-center justify-center font-bold"></div>
          </section>
        </div>
      </div>
    </>
  );
}
