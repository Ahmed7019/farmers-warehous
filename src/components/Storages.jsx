import { useEffect } from "react";
import { useAuth } from "../contexts/authContext";
import { getUser } from "./js/Firebase/firestore";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";

import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

import Swal from "sweetalert2";
import { API_URL } from "./js/api/api";
export default function Storages() {
  const nav = useNavigate(); 
  const { register, handleSubmit } = useForm();
  // Add the form to add new data
  const { currentUser, userLoggedIn } = useAuth();
  useEffect(() => {
    if (userLoggedIn) getUser(currentUser);
  }, [userLoggedIn, currentUser]);

  // Backend_Api
  async function formSubmit(data) {
    console.log(data);

    await axios
      .post(API_URL, {
        email: currentUser.email,
        ...data,
      })
      .then(() =>
        Swal.fire({
          title: "Success",
          text: "Data sent successfully",
          icon: "success",
        })
      )
      .then(() => {
        {
          nav("../");
        }
      })
      .catch((err) => {
        console.error("Error:", err.message);
        Swal.fire({
          title: "Error",
          text: "Failed to submit form. Please try again.",
          icon: "error",
        });
      });
  }
  return (
    <>
      <div className=" mt-20 mx-4 grid items-center justify-center h-[80vh] ">
        <Link to="../" className="my-2">
          <IoIosArrowBack />
        </Link>
        <form
          onSubmit={handleSubmit(formSubmit)}
          className="border border-green-500 bg-neutral-100/50 backdrop-blur-md p-4 rounded w-[50rem]"
        >
          <div className="flex justify-between">
            <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-4">
                <label htmlFor="crop">Crop Type: </label>
                <select
                  {...register("crop")}
                  name="crop"
                  id="crop"
                  className="border border-black p-1 rounded"
                  required
                >
                  <optgroup label="Grains">
                    <option value="Wheat">Wheat</option>
                    <option value="Rice">Rice</option>
                    <option value="Corn">Corn</option>
                    <option value="Barely">Barely</option>
                    <option value="Oats">Oats</option>
                  </optgroup>

                  <optgroup label="Fruits">
                    <option value="Apple">Apple</option>
                    <option value="Oranges">Oranges</option>
                    <option value="Bananas">Bananas</option>
                    <option value="Grapes">Grapes</option>
                    <option value="Strawberries">Strawberries</option>
                  </optgroup>

                  <optgroup label="Vegetables">
                    <option value="Tomatoes">Tomatoes</option>
                    <option value="Carrots">Carrots</option>
                    <option value="Potatoes">Potatoes</option>
                    <option value="Okra">Okra</option>
                    <option value="Onions">Onions</option>
                  </optgroup>
                </select>
              </div>
              <div className="flex gap-x-4">
                <label htmlFor="quantity">Quantity: </label>
                <input
                  type="number"
                  {...register("quantity")}
                  required
                  name="quantity"
                  id="quantity"
                  className="border border-black p-1 rounded"
                />
              </div>
              <div className="flex gap-x-4">
                <label htmlFor="storage_location">Storage Location</label>
                <select
                  {...register("storage_location")} // Register with a unique name
                  name="storage_location"
                  id="storage_location"
                  className="border border-black p-1 rounded"
                  required
                >
                  <optgroup label="A">
                    <option value="A1">A1</option>
                    <option value="A2">A2</option>
                    <option value="A3">A3</option>
                    <option value="A4">A4</option>
                    <option value="A5">A5</option>
                  </optgroup>
                  <optgroup label="B">
                    <option value="B1">B1</option>
                    <option value="B2">B2</option>
                    <option value="B3">B3</option>
                    <option value="B4">B4</option>
                    <option value="B5">B5</option>
                  </optgroup>
                  <optgroup label="C">
                    <option value="C1">C1</option>
                    <option value="C2">C2</option>
                    <option value="C3">C3</option>
                    <option value="C4">C4</option>
                    <option value="C5">C5</option>
                  </optgroup>
                </select>
              </div>
              <div className="flex gap-x-4">
                <label htmlFor="storage_condition">Storage Condition</label>
                <select
                  {...register("storage_condition")}
                  name="storage_condition"
                  id="storage_condition"
                  className="border border-black p-1 rounded"
                  required
                >
                  <option value="Standard">Standard Storage Plan</option>
                  <option value="Premium">Premium Storage Plan</option>
                  <option value="Climate">
                    Climate-Controlled Storage Plan
                  </option>
                </select>
                <Link to="learnMore" title="Learn More">
                  <FaRegCircleQuestion />
                </Link>
              </div>
              <div className="flex gap-x-4">
                <label htmlFor="date">Expiration Date: </label>
                <input
                  type="date"
                  {...register("date")}
                  name="date"
                  id="date"
                  className="border border-black p-1 rounded"
                  required
                />
              </div>

              <div>
                <ul className="list-disc list-inside text-sm p-2 flex flex-col gap-2 text-neutral-700">
                  <li>
                    This form allows you to easily add information about the
                    crops you intend to store in our facilities. By providing
                    these details, we can ensure optimal storage conditions for
                    your crops, maximizing their quality and lifespan.
                  </li>
                  <li>
                    Double-check all entered information before submitting the
                    form to ensure accuracy.
                  </li>
                  <li>
                    If you have any questions or require assistance while
                    filling out the form, don't hesitate to contact our customer
                    support team. They're happy to guide you through the
                    process.
                  </li>
                  <li className="text-bold text-lg">
                    Note that you can't add the same crops twice with the same
                    storage conditioning plan
                  </li>
                </ul>
              </div>
            </div>
            <div className=" flex flex-col justify-end ">
              <button
                type="submit"
                className=" mt-4 bg-green-700 w-40 p-2 rounded-md text-neutral-200 hover:bg-green-500"
              >
                Save changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
