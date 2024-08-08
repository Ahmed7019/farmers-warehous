import { useState } from "react";
import { useEffect } from "react";

export default function InventoryLevels() {
  class Storage {
    constructor(name, used, capacity) {
      this.name = name;
      this.used = used;
      this.capacity = capacity;
      this.id = new Date();
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
    const storageA = new Storage("A", 2, 20);
    const storageB = new Storage("B", 10, 20);
    const storageC = new Storage("C", 8, 20);
    const storages = [storageA, storageB, storageC];

    const levels = storages.map((storage) => {
      if (storage.checkCapacity() == "great") {
        return (
          <div
            key={storage.id}
            className="border-4 border-green-300 w-40 h-40 rounded-full"
          >
            <div className="rounded-full bg-neutral-200 w-[9.5rem] h-[9.5rem] flex justify-center items-center">
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
            className="border-4 border-yellow-300 w-40 h-40 rounded-full"
          >
            <div className="rounded-full bg-neutral-200 w-[9.5rem] h-[9.5rem] flex justify-center items-center">
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
            className="border-4 border-red-300 w-40 h-40 rounded-full"
          >
            <div className="rounded-full bg-neutral-200 w-[9.5rem] h-[9.5rem] flex justify-center items-center">
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
