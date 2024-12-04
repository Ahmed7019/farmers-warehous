import { useEffect } from "react";
import { useState } from "react";

export default function Storages() {
  // Add the form to add new data

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [cropType, setCropType] = useState("wheat");
  const [quantity, setQuantity] = useState(0);
  const [storageLocation, setStorageLocation] = useState("A1");
  const [storageCondition, setStorageCondition] = useState("standard");
  const [expDate, setExpDate] = useState("");
  const [batchNum, setBatchNum] = useState(0);
  let data = [];
  // let nextId = 1;
  const [farmsData, setFarmsData] = useState(data);
  let handleClick = () => {
    setId((id) => id + 1);
    setFarmsData([
      ...farmsData,
      {
        id: id,
        name: name,
        cropType: cropType,
        quantity: quantity,
        storageLocation: storageLocation,
        storageCondition: storageCondition,
        expDate: expDate,
        batchNum: batchNum,
      },
    ]);
  };
  useEffect(() => {
    if (farmsData.length > 0)
      localStorage.setItem("farm", JSON.stringify(farmsData));
  }, [farmsData]);

  useEffect(() => {
    const farmsData = JSON.parse(localStorage.getItem("farm"));
    if (farmsData) {
      setFarmsData(farmsData);
    }
  }, []);

  // Clear the input field
  return (
    <>
      <div className="ml-40 relative top-8">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="border border-green-500 bg-neutral-200 p-4 rounded w-[50rem]"
        >
          <div className="flex justify-between">
            <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-4">
                <label htmlFor="name">Name: </label>
                <input
                  type="text"
                  placeholder="Enter Only Two Names"
                  className="border border-black p-1 rounded"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex gap-x-4">
                <label htmlFor="crop">Crop Type: </label>
                <select
                  name="crop-type"
                  id="crop-type"
                  className="border border-black p-1 rounded"
                  onChange={(e) => setCropType(e.target.value)}
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
                  name="quantity"
                  id="quantity"
                  className="border border-black p-1 rounded"
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <div className="flex gap-x-4">
                <label htmlFor="storage-location">Storage Location</label>
                <select
                  name="storage-location"
                  id="storage-location"
                  className="border border-black p-1 rounded"
                  onChange={(e) => setStorageLocation(e.target.value)}
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
                  name="storage-condition"
                  id="storage-condition"
                  className="border border-black p-1 rounded"
                  onChange={(e) => setStorageCondition(e.target.value)}
                >
                  <option value="standard">Standard Storage Plan</option>
                  <option value="premium">Premium Storage Plan</option>
                  <option value="climate-controlled">
                    Climate-Controlled Storage Plan
                  </option>
                </select>
              </div>
              <div className="flex gap-x-4">
                <label htmlFor="ex-date">Expiration Date: </label>
                <input
                  type="date"
                  name="ex-date"
                  id="ex-date"
                  className="border border-black p-1 rounded"
                  onChange={(e) => setExpDate(e.target.value)}
                />
              </div>
              <div className="flex gap-x-4">
                <label htmlFor="batch">Batch Number: </label>
                <input
                  type="text"
                  name="batch"
                  id="batch"
                  className="border border-black p-1 rounded"
                  onChange={(e) => setBatchNum(e.target.value)}
                />
              </div>
            </div>
            <div className=" flex flex-col justify-end">
              <input
                type="button"
                value="submit"
                className=" mt-4 bg-green-700 w-40 p-2 rounded-md text-neutral-200 cursor-pointer"
                onClick={handleClick}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
