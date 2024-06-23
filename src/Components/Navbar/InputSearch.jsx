"use client";

import { getAnimeRespons } from "@/libs/api_libs";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import BoxAnime from "./BoxAnime";

const InputSearch = ({ closeHamburger }) => {
  const searchRef = useRef();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [boxAnime, setBoxAnime] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (query !== "") {
          const response = await getAnimeRespons(
            "anime",
            `sfw&q=${query}&limit=5`
          );
          setBoxAnime(response);
        } else {
          setBoxAnime([]);
        }
      } catch (e) {
        console.error(e);
      }
    };
    const timer = setTimeout(() => {
      fetchData();
    }, 500);

    return () => clearInterval(timer);
  }, [query]);

  const searchAnime = (keyword) => router.push(`/search/${keyword}`);

  const valueValidation = () => {
    const keyword = searchRef.current.value;
    return keyword !== "" && keyword.trim() !== "" && keyword.length > 2;
  };

  const handlerSearchBox = () => {
    if (valueValidation()) return setQuery(searchRef.current.value);
    setBoxAnime([]);
  };

  const handleSearchBtn = (e) => {
    if (valueValidation()) {
      e.preventDefault();
      searchAnime(searchRef.current.value);
      searchRef.current.value = "";
      closeHamburger(false);
    }
    setBoxAnime([]);
  };

  const enterSearch = (e) => {
    if (valueValidation()) {
      if (e.key === "Enter" || e.which === 13) {
        e.preventDefault();
        searchAnime(searchRef.current.value);
        searchRef.current.value = "";
        closeHamburger(false);
      }
    }
    setBoxAnime([]);
  };

  const handlerReset = () => {
    setBoxAnime([]);
    closeHamburger(false);
    searchRef.current.value = "";
  };

  return (
    <div className="relative md:min-w-72">
      <input
        ref={searchRef}
        onKeyDown={enterSearch}
        onKeyUp={() => {
          handlerSearchBox();
        }}
        placeholder="Search anime..."
        className="w-full min-h-w px-4 text-color-primary rounded-full bg-color-white/0 outline outline-2 outline-color-primary focus:outline-color-accent/80 focus:bg-gradient-to-r focus:from-color-accent/30 focus:from-30% focus:to-color-white/20 focus:backdrop-blur-lg"
      />
      <button
        onClick={handleSearchBtn}
        className="absolute text-color-primary top-1 end-3 hover:text-color-accent/80 transition duration-75"
      >
        <MagnifyingGlass size={28} />
      </button>
      {boxAnime?.length !== 0 ? (
        <BoxAnime api={boxAnime} handlerReset={handlerReset} />
      ) : null}
    </div>
  );
};

export default InputSearch;
