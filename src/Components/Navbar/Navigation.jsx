"use client";

import { FolderOpen, UserCircle } from "@phosphor-icons/react";
import Link from "next/link";
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
      <span className="flex justify-between items-center gap-2">
        <Link
          href={"/"}
          onClick={handlerBoxGenre}
          onMouseEnter={() => setIsBoxGenreActive(true)}
          className="text-color-primary font-light text-base min-h-w px-2 flex items-center gap-x-1 hover:text-color-accent/80 transition duration-100"
        >
          <FolderOpen size={20} weight="fill" />
          <p>Genre</p>
        </Link>
        <Link
          href={"/"}
          className="text-color-primary font-light text-base min-h-w px-4 flex items-center gap-x-1 transition-all duration-100 rounded-full bg-color-white/0 outline outline-2 outline-color-primary hover:outline-color-accent/80 hover:bg-gradient-to-r hover:from-color-accent/30 hover:from-30% hover:to-color-white/20 hover:backdrop-blur-lg"
        >
          <UserCircle size={20} weight="fill" />
          <p>Login</p>
        </Link>
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
