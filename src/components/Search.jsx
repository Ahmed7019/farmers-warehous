import { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
// eslint-disable-next-line react/prop-types
export default function Search({ data }) {
  const [searchResult, setSearchResult] = useState("");
  const searchRef = useRef();

  function handleInput() {
    // eslint-disable-next-line react/prop-types
    const result = data.filter((item) => {
      if (searchRef.current.value === "") setSearchResult("");
      else if (
        item.name.toLowerCase() !== searchRef.current.value.toLowerCase()
      )
        return setSearchResult(`Sorry ${searchRef.current.value} not found`);
      else if (searchRef.current.value !== "")
        return item.name.toLowerCase() == searchRef.current.value.toLowerCase();
    });

    result.forEach((result) => {
      setSearchResult(
        <div key={result.id} className="my-2">
          <div>
            Name: <mark>{result.name}</mark>
          </div>
          <div>Crop: {result.cropType}</div>
          <div>Quantity: {result.quantity}</div>
          <div>Location: {result.storageLocation}</div>
          <div>Condition: {result.storageCondition}</div>
          <div>Expiration Date: {result.expDate}</div>
        </div>
      );
    });
  }

  useEffect(() => {});
  return (
    <>
      <div className="flex items-center justify-center mb-4">
        <div>
          <form
            className=" border-2 border-neutral-600 w-[40rem] h-8 flex justify-between rounded-md overflow-hidden"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="search"
              name="search"
              id="search"
              className="flex-grow px-4 outline-none"
              placeholder="Input farm Name / Id"
              ref={searchRef}
              onInput={handleInput}
            />
            <button
              onClick={handleInput}
              className="bg-neutral-300 p-2 flex items-center justify-center h-full"
            >
              <CiSearch className="text-2xl font-bold" />
            </button>
          </form>
          {searchResult}
        </div>
      </div>
    </>
  );
}
