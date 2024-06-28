"use client";

import { FolderOpen } from "@phosphor-icons/react";
import InputSearch from "./InputSearch";
import BoxGenre from "./BoxGenre";
import { useState } from "react";

const Navigation = ({ hamburger, closeHamburger }) => {
  const [isBoxGenreActive, setIsBoxGenreActive] = useState(false);

  const handlerBoxGenre = (e) => {
    e.preventDefault();
    setIsBoxGenreActive(!isBoxGenreActive);
  };

  return (
    <nav
      className={`w-full flex flex-col gap-4 bg-color-dark py-4 px-5 absolute top-[68px] border-b border-color-black ${
        hamburger ? "right-0" : "-right-full"
      } transition-all duration-300 md:static md:bg-color-dark/0 md:border-b-0 md:flex-row md:px-0 md:py-0 md:justify-end`}
    >
      <span className="flex justify-end items-center gap-2">
        <button
          onClick={handlerBoxGenre}
          className="text-color-primary font-light text-lg min-h-w px-2 flex items-center gap-x-1 hover:text-color-accent/80 transition duration-100"
        >
          <FolderOpen size={20} weight="fill" />
          <p>Genre</p>
        </button>
      </span>
      <InputSearch closeHamburger={closeHamburger} />
      {isBoxGenreActive ? (
        <BoxGenre
          setIsBoxGenreActive={setIsBoxGenreActive}
          closeHamburger={closeHamburger}
        />
      ) : null}
    </nav>
  );
};

export default Navigation;
