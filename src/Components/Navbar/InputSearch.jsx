"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";

const InputSearch = () => {
  return (
    <div className="relative">
      <input
        placeholder="Search anime..."
        className="w-full min-h-w px-4 rounded-md focus:outline-color-dark"
      />
      <button className="absolute text-color-dark top-1.5 end-2 ">
        <MagnifyingGlass size={32} />
      </button>
    </div>
  );
};

export default InputSearch;
