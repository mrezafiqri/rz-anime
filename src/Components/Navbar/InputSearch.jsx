"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const searchAnime = (keyword) => router.push(`/search/${keyword}`);

  const valueValidation = () => {
    const keyword = searchRef.current.value;
    return keyword !== "" && keyword.trim() !== "" && keyword.length > 2;
  };

  const handleSearch = (e) => {
    if (valueValidation()) {
      e.preventDefault();
      searchAnime(searchRef.current.value);
    }
  };

  const enterSearch = (e) => {
    if (valueValidation()) {
      if (e.key === "Enter" || e.which === 13) {
        e.preventDefault();
        searchAnime(searchRef.current.value);
      }
    }
  };

  return (
    <div className="relative">
      <input
        ref={searchRef}
        onKeyUp={enterSearch}
        placeholder="Search anime..."
        className="w-full min-h-w px-4 text-color-primary rounded-full bg-color-white/0 outline outline-2 outline-color-primary focus:outline-color-accent/80 focus:bg-gradient-to-r focus:from-color-accent/30 focus:from-30% focus:to-color-white/20 focus:backdrop-blur-lg"
      />
      <button
        onClick={handleSearch}
        className="absolute text-color-primary top-1 end-3 hover:text-color-accent/80 transition duration-75"
      >
        <MagnifyingGlass size={32} />
      </button>
    </div>
  );
};

export default InputSearch;
