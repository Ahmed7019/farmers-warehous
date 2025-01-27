import { useEffect, useState } from "react";

import { useAuth } from "../contexts/authContext";
import { getUser } from "./js/Firebase/firestore";
import { doEmailVerification } from "./js/Firebase/auth";
import { getAuth } from "firebase/auth";

import Loading from "./Loading";
import { FaLocationDot } from "react-icons/fa6";
import axios from "axios";
import { API_URL } from "./js/api/api";

export default function Profile() {
  const [response, setResponse] = useState();
  const { currentUser, isLoading } = useAuth();
  const [userData, setuserData] = useState(null);
  // const [isLoading, setisLoading] = useState(false);
  const [authedUser, setauthUser] = useState("");
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
    const auth = getAuth();
    const user = auth.currentUser;
    setauthUser(user);
    fetchData();
  });

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
        {userData && <p key={userData.id}>Primary Crops: {userData.crop}</p>}
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
              onClick={() => doEmailVerification(authedUser)}
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
