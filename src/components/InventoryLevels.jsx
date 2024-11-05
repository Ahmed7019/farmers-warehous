import { useState } from "react";
import { useEffect } from "react";

export default function InventoryLevels() {
  class Storage {
    constructor(name, used, capacity, id) {
      this.name = name;
      this.used = used;
      this.capacity = capacity;
      this.id = id;
    }
    storageAvailable() {
      return this.capacity - this.used;
    }

    checkCapacity() {
      if (this.storageAvailable() > 15) {
        return "great";
      } else if (this.storageAvailable() < 15 && this.storageAvailable() > 10) {
        return "good";
      } else return "bad";
    }
  }
  const [memo, setMemo] = useState();
  useEffect(() => {
    const storageA = new Storage("A", 2, 20, 0);
    const storageB = new Storage("B", 10, 20, 1);
    const storageC = new Storage("C", 8, 20, 2);
    const storages = [storageA, storageB, storageC];

    const levels = storages.map((storage) => {
      if (storage.checkCapacity() == "great") {
        return (
          <div
            key={storage.id}
            className="border-4 border-green-500 w-40 h-40 rounded-md cursor-pointer hover:skew-x-6  transition-transform ease-in-out"
          >
            <div className="text-green-500  rounded-full bg-neutral-200 w-[9.5rem] h-[9.5rem] flex justify-center items-center">
              <p>
                {storage.storageAvailable()}% of storage {storage.name}
              </p>
            </div>
          </div>
        );
      } else if (storage.checkCapacity() === "good") {
        return (
          <div
            key={storage.id}
            className="border-4 border-yellow-500 w-40 h-40 rounded-md"
          >
            <div className="rounded-full bg-neutral-700 w-[9.5rem] h-[9.5rem] flex justify-center items-center">
              <p>
                {storage.storageAvailable()}% of storage {storage.name}
              </p>
            </div>
          </div>
        );
      } else
        return (
          <div
            key={storage.id}
            className="border-4 border-red-500 w-40 h-40 rounded-md"
          >
            <div className="rounded-full bg-neutral-500 w-[9.5rem] h-[9.5rem] flex justify-center items-center">
              <p>
                {storage.storageAvailable()}% of storage {storage.name}
              </p>
            </div>
          </div>
        );
    });
    setMemo(levels);
  }, []);
  return (
    <>
      <p className="text-2xl font-bold">Inventory Levels</p>
      <p>Check the storage levels available here</p>
      <div className="flex justify-center items-center gap-x-8">{memo}</div>
    </>
  );
}
