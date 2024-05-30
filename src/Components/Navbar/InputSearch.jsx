"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";

const InputSearch = () => {
  return (
    <div className="relative">
      <input
        placeholder="Search anime..."
        className="w-full min-h-w px-4 text-color-primary rounded-full bg-color-white/0 outline outline-2 outline-color-primary focus:outline-color-accent/80 focus:bg-gradient-to-r focus:from-color-accent/30 focus:from-30% focus:to-color-white/20 focus:backdrop-blur-lg"
      />
      <button className="absolute text-color-primary top-1.5 end-3 hover:text-color-accent/80 transition duration-75">
        <MagnifyingGlass size={32} />
      </button>
    </div>
  );
};

export default InputSearch;
