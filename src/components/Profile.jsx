import { useEffect, useState } from "react";

import { useAuth } from "../contexts/authContext";
import { getFarmSize, getUser } from "./js/Firebase/firestore";
import { doEmailVerification } from "./js/Firebase/auth";
import { getAuth } from "firebase/auth";

import Loading from "./Loading";
import UpdateInfo from "./UpdateInfo";

import { FaLocationDot } from "react-icons/fa6";
import { FaUserEdit } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import axios from "axios";
import { API_URL } from "./js/api/api";

export default function Profile() {
  const [response, setResponse] = useState();
  const { currentUser, isLoading } = useAuth();
  const [userData, setuserData] = useState(null);
  const [updateInfo, setupdateInfo] = useState(false);
  const [authedUser, setauthUser] = useState("");
  const [farmSize, setFarmSize] = useState(null);
  const toggleInfo = () => {
    !updateInfo ? setupdateInfo(true) : setupdateInfo(false);
  };

  const getLocation = async () => {
    // Get user location using IP API
    try {
      await fetch("https://ipapi.co/json/").then((response) => {
        response.json().then((jsonData) => {
          console.log(jsonData);
          setResponse(jsonData);
        });
      });
    } catch {
      (error) => {
        console.log(error);
      };
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchData = () => {
    axios.get(API_URL).then((res) => {
      const data = res.data;
      data.filter((item) => {
        if (item.email === authedUser.email) {
          setuserData(item);
        }
      });
    });
  };

  useEffect(() => {
    if (getFarmSize() !== null) {
      setFarmSize(getFarmSize);
    }
  });
  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    setauthUser(user);
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    getLocation();
  }, []);
  useEffect(() => {
    if (isLoading) {
      getUser(currentUser);
    }
  }, [currentUser, isLoading]);

  return (
    <>
      {!currentUser && <Loading />}
      <div className="relative mt-24 mx-8 border border-neutral-700 bg-slate-800 p-3 rounded-md flex flex-col ">
        <div className="absolute right-4">
          <button
            className="text-lg sm:text-3xl   bg-zinc-600 rounded-xl p-2 text-center"
            onClick={toggleInfo}
          >
            {!updateInfo ? (
              <FaUserEdit className="text-neutral-100" />
            ) : (
              <IoClose className="bg-red-600 rounded text-neutral-100" />
            )}
          </button>
        </div>
        <div
          className="flex items-center text-neutral-200 gap-3 mb-4
        "
        >
          <CgProfile className="text-6xl sm:text-8xl text-neutral-200" />
          <div>
            <p className="capitalize text-lg sm:text-3xl font-semibold">
              {currentUser == null ? "" : currentUser.displayName}
            </p>
            <div className="font-semibold flex gap-x-2 items-center">
              <FaLocationDot className="text-xl text-orange-500" />
              <p>{response ? response.country_capital : "N/A"}</p>
            </div>
          </div>
        </div>

        {updateInfo == true ? (
          <UpdateInfo />
        ) : (
          <div className="flex flex-col gap-2 text-neutral-300 text-xs">
            <div className="flex gap-2 items-center">
              <p>Email : {!currentUser ? "..." : currentUser.email}</p>

              <p
                className={`${
                  currentUser && currentUser.emailVerified
                    ? "text-green-400"
                    : "text-red-600"
                }  sm:text-md uppercase font-bold`}
              >
                {`Email is ${
                  currentUser && currentUser.emailVerified ? "" : "not"
                }
              verified !`}
              </p>

              {currentUser && currentUser.emailVerified ? (
                ""
              ) : (
                <button
                  className="text-xs text-neutral-600 hover:underline underline-offset-2"
                  onClick={() => doEmailVerification(authedUser)}
                >
                  verify now
                </button>
              )}
            </div>
            <p>
              Farm Size:
              {farmSize !== null ? farmSize : ""} Hectaers
            </p>
            <p>Storage Capacity: [Current Storage Details]</p>
            {userData && (
              <p key={userData.id}>Primary Crops: {userData.crop}</p>
            )}
            <p className=" self-end italic">
              #Member since
              {currentUser == null
                ? ""
                : Date(currentUser.validSince).slice(3, 15)}
            </p>
          </div>
        )}
      </div>

      <div className="mx-8 mt-8">
        <h3 className="font-bold text-lg sm:text-2xl">
          Why Your Profile Matters ?
        </h3>
        <p className="text-sm sm:text-md">
          Your profile is more than just a dashboard—it’s a reflection of your
          hard work and dedication. By keeping it updated and engaging with our
          tools, you’re not just protecting your crops; you’re building a
          sustainable future for your farm and community.
        </p>
      </div>
    </>
  );
}
