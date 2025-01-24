import { useEffect, useState } from "react";

import { useAuth } from "../contexts/authContext";
import { getUser } from "./js/Firebase/firestore";
import { doEmailVerification } from "./js/Firebase/auth";

import { Link } from "react-router-dom";
import Loading from "./Loading";
import { FaLocationDot } from "react-icons/fa6";

export default function Profile() {
  const [response, setResponse] = useState();
  const { currentUser } = useAuth();
  const [isLoading, setisLoading] = useState(false);

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

  useEffect(() => {
    getLocation();
  }, []);
  useEffect(() => {
    if (currentUser == null) {
      setisLoading(true);
    } else {
      setisLoading(false);
      getUser(currentUser);
      console.log(currentUser);
    }
  }, [currentUser]);
  return (
    <>
      {!currentUser && <Loading />}
      <div className="mt-24 mx-8 border border-neutral-700 bg-neutral-100 p-3 rounded-md flex flex-col">
        <p>Profile page</p>
        <p className="capitalize">
          {currentUser == null ? "" : currentUser.displayName}
        </p>
        <div className="font-semibold flex gap-x-2 items-center">
          <FaLocationDot />
          <p>{response ? response.country_capital : "N/A"}</p>
        </div>
        Farm Size: [Size in Acres/Hectares]
        <p>Storage Capacity: [Current Storage Details]</p>
        <p>Primary Crops: [List of Crops]</p>
        <div className="flex gap-2 items-center">
          <p>Email : {!currentUser ? "..." : currentUser.email}</p>

          <p
            className={`${
              currentUser && currentUser.emailVerified
                ? "text-green-400"
                : "text-red-600"
            } text-xs font-bold`}
          >
            {`Email is ${currentUser && currentUser.emailVerified ? "" : "not"}
            verified !`}
          </p>
          {currentUser && currentUser.emailVerified ? (
            ""
          ) : (
            <button
              className="text-xs text-neutral-600 hover:underline underline-offset-2"
              onClick={() => doEmailVerification(currentUser)}
            >
              verify now
            </button>
          )}
        </div>
        <p className="text-sm text-neutral-700 self-end italic">
          #Member since
          {currentUser == null ? "" : Date(currentUser.validSince).slice(3, 15)}
        </p>
      </div>
      <div className="mx-8 mt-8">
        <h3 className="font-bold text-2xl">Why Your Profile Matters ?</h3>
        <p>
          Your profile is more than just a dashboard—it’s a reflection of your
          hard work and dedication. By keeping it updated and engaging with our
          tools, you’re not just protecting your crops; you’re building a
          sustainable future for your farm and community.
        </p>
      </div>
    </>
  );
}
