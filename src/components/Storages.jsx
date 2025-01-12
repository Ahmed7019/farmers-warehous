import { useEffect } from "react";
import { useAuth } from "../contexts/authContext";
import { getUser } from "./js/Firebase/firestore";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Storages() {
  const { register, handleSubmit } = useForm();
  // Add the form to add new data
  const { currentUser, userLoggedIn } = useAuth();
  useEffect(() => {
    if (userLoggedIn) getUser(currentUser);
    console.log(currentUser);
  }, [userLoggedIn]);

  // Backend_Api
  async function formSubmit(data) {
    console.log(data);
    await axios.post("http://127.0.0.1:8000/api/warehouse", {
      email: currentUser.email,
      ...data,
    });
  }
  return (
    <>
      <div className=" m-4 grid items-center justify-center h-[80vh] relative top-8">
        <Link to="../">
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
                  {...register("crop-type")}
                  name="crop-type"
                  id="crop-type"
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
                <label htmlFor="storage-location">Storage Location</label>
                <select
                  {...register("storage-location")}
                  name="storage-location"
                  id="storage-location"
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
                <label htmlFor="storage-condition">Storage Condition</label>
                <select
                  {...register("storage-condition")}
                  name="storage-condition"
                  id="storage-condition"
                  className="border border-black p-1 rounded"
                  required
                >
                  <option value="standard">Standard Storage Plan</option>
                  <option value="premium">Premium Storage Plan</option>
                  <option value="climate-controlled">
                    Climate-Controlled Storage Plan
                  </option>
                </select>
                <Link to="learnMore" title="Learn More">
                  <FaRegCircleQuestion />
                </Link>
              </div>
              <div className="flex gap-x-4">
                <label htmlFor="expiration-date">Expiration Date: </label>
                <input
                  type="date"
                  {...register("expiration-date")}
                  name="expiration-date"
                  id="expiration-date"
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
