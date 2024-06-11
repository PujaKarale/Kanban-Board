import React, { useState } from "react";
 
export default function Search({ filterTasksByName }) {
  const [inputValue, setInputValue] = useState("");
   console.log(inputValue)
  return (
    <div className="flex gap-3 w-[20rem] pb-2">
      <input
        type="text"
        name="text"
        id="text"
        className=" p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Search"
        onInput={(e) => setInputValue(e.target.value)}
      ></input>
      <button
        type="button"
        className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={() => filterTasksByName(inputValue)}
      >
        Search
      </button>
    </div>
  );
}