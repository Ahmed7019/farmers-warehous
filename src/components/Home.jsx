/* eslint-disable react/no-unescaped-entities */

// Import styling for animation
import "../index.css";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import Settings from "./Settings";
import { useAuth } from "../contexts/authContext";
import { useEffect, useState } from "react";
import { getUser } from "./js/Firebase/firestore";
export default function Home() {
  const { userLoggedIn, currentUser, isLoading } = useAuth();
  // Get user from DB
  const [userFound, setUserFound] = useState(false);
  const [settings, showSettings] = useState(false);
  const [checkLoading, setLoading] = useState(true);
  useEffect(() => {
    if (userLoggedIn)
      getUser(currentUser).then(() => {
        setUserFound(true);
        setLoading(false);
        console.log(currentUser);
      });
    else setLoading(false);
  }, [userLoggedIn, currentUser, isLoading]);

  return (
    <>
      {checkLoading && <Loading />}
      <div className=" mt-4 mx-4 relative grid place-items-center justify-center selection:bg-green-600 selection:text-neutral-50">
        <div className="mt-12">
          {/* When User is logged in show these */}
          {userLoggedIn == true && (
            <div className="flex items-center justify-between gap-x-2 my-2">
              {userFound && (
                <p className="text-md sm:text-3xl font-bold capitalize">
                  Welcome {currentUser.displayName} !
                </p>
              )}
              {settings == true && <Settings />}
              <button
                className="bg-neutral-200 flex justify-center items-center p-2 rounded-md"
                title="Settings"
                onClick={() =>
                  settings == false ? showSettings(true) : showSettings(false)
                }
              >
                <CiSettings className="text-2xl" />
              </button>
            </div>
          )}

          {/* When user is not logged in show these */}
          {userLoggedIn == false && (
            <div className="flex items-center justify-between gap-x-2 my-2">
              <p className="sm:text-3xl font-bold">Farmers Warehouse</p>
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
            <div className=" my-2 flex flex-col sm:flex-row justify-center relative ">
              <div className="flex flex-col gap-y-4 pr-4 bg-green-600 p-4 rounded-t-md sm:rounded-l-md animate-scrolling-l">
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
                className="rounded-b-md sm:rounded-r-md animate-scrolling-r"
              />
            </div>
          </div>
        </div>

        <div className="my-8">
          <section>
            <div className="flex flex-col sm:flex-row gap-x-8 my-2 justify-center bg-green-600 p-4 rounded-md">
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
          <section className="text-neutral-200  p-4 flex gap-x-2 sm:flex-col sm:gap-y-3 text-xs">
            <p>
              <span className="font-bold">Phone:</span> 123-456-7890
            </p>
            <p>
              <span className="font-bold">Address:</span> 123 Main Street, City,
              Country
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
