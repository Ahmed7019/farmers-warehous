import { useEffect, useState } from "react";
import { useAuth } from "../contexts/authContext";
import { getUser } from "./js/Firebase/firestore";
import { Link } from "react-router-dom";
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
    if (currentUser == null) {
      setisLoading(true);
    } else {
      setisLoading(false);
      getUser(currentUser);
    }
    getLocation();
    console.log("Location", response);
  }, [currentUser, response]);
  return (
    <>
      <div className="mt-24 mx-8">
        <p>Profile page</p>
        <p className="capitalize">
          Name : {currentUser == null ? "" : currentUser.displayName}
        </p>
        <p>Location: {response ? response.city : "N/A"}</p>
        <p></p>
        Farm Size: [Size in Acres/Hectares]
        <p>Storage Capacity: [Current Storage Details]</p>
        <p>Primary Crops: [List of Crops]</p>
        <div className="flex gap-2 items-center">
          <p>Email : {isLoading ? "" : currentUser.email}</p>
          <p
            className={`${
              currentUser.emailVerified ? "text-green-400" : "text-red-600"
            } text-xs font-bold`}
          >
            Email is {currentUser.emailVerified ? "" : "not"} verified !
          </p>
          <Link className="text-xs text-neutral-600 hover:underline underline-offset-2">
            verify now
          </Link>
        </div>
        <p>Phone Number</p>
        <p>Member since</p>
        <h3>Why Your Profile Matters ?</h3>
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
