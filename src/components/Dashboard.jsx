import Search from "./Search";
import { useState, useEffect } from "react";
export default function Dashboard() {
  const [farmsData, setFarmsData] = useState([]);
  const [names, setNames] = useState([]);
  const [cropType, setcropType] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [storageLocation, setStorageLocation] = useState([]);
  const [storageCondition, setStorageCondition] = useState([]);
  const [expDate, setExpDate] = useState([]);
  const [batchNum, setBatchNum] = useState([]);
  useEffect(() => {
    const farmsData = JSON.parse(localStorage.getItem("farm"));
    if (farmsData) {
      setFarmsData(farmsData);
    }
    // Get names from local storage
    setNames(
      farmsData.map((item) => {
        return (
          <div key={item.id} className="border border-black p-2 rounded ">
            {item.name}
          </div>
        );
      })
    );
    setcropType(
      farmsData.map((item) => {
        return (
          <div key={item.id} className="border border-black p-2 rounded">
            {item.cropType}
          </div>
        );
      })
    );
    setQuantity(
      farmsData.map((item) => {
        return (
          <div key={item.id} className="border border-black p-2 rounded">
            {item.quantity} PKG
          </div>
        );
      })
    );
    setStorageLocation(
      farmsData.map((item) => {
        return (
          <div key={item.id} className="border border-black p-2 rounded">
            {item.storageLocation}
          </div>
        );
      })
    );
    setStorageCondition(
      farmsData.map((item) => {
        return (
          <div key={item.id} className="border border-black p-2 rounded">
            {item.storageCondition}
          </div>
        );
      })
    );
    setExpDate(
      farmsData.map((item) => {
        return (
          <div key={item.id} className="border border-black p-2 rounded">
            {item.expDate}
          </div>
        );
      })
    );
    setBatchNum(
      farmsData.map((item) => {
        return (
          <div key={item.id} className="border border-black p-2 rounded">
            #{item.batchNum}
          </div>
        );
      })
    );
  }, []);
  return (
    <section>
      <Search data={farmsData} />
      {/* here starts the dashboard */}

      <div className="grid grid-cols-7 border border-black p-2 rounded hover:bg-neutral-100 hover:cursor-pointer">
        <div className="flex flex-col">
          <p className="font-bold">Name</p>
          {names}
        </div>
        <div className="flex flex-col">
          <p className="font-bold">Crop Type</p>
          {cropType}
        </div>
        <div>
          <p className="font-bold">quantity</p>
          {quantity}
        </div>
        <div>
          <p className="font-bold">Loaction</p>
          {storageLocation}
        </div>
        <div>
          <p className="font-bold">Storage Condition</p>
          {storageCondition}
        </div>
        <div>
          <p className="font-bold">Expiration Date</p>
          {expDate}
        </div>
        <div>
          <p className="font-bold">Batch Number</p>
          {batchNum}
        </div>
      </div>
    </section>
  );
}
