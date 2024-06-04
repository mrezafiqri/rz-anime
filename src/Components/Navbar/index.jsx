"use client";

import Link from "next/link";
import InputSearch from "./InputSearch";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [colorChange, setColorChange] = useState(true);

  const changeColorNavbar = () => {
    if (window.scrollY >= 50) {
      setColorChange(false);
    } else {
      setColorChange(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColorNavbar);
  }, [colorChange]);

  return (
    <header
      className={`${
        colorChange
          ? "bg-color-black/0"
          : "bg-color-black/80 backdrop-blur-xl border-b border-b-color-black"
      }  transition-all duration-200 sticky top-0 z-[1030]`}
    >
      <div className="w-full py-4 px-5 md:px-8 flex flex-col gap-2 sm:justify-between sm:items-center sm:flex-row 2xl:container 2xl:mx-auto">
        <Link
          href="/"
          className="bg-color-accent bg-gradient-to-r from-color-white/10 to-color-white/20 to-100% bg-clip-text font-bold text-3xl lg:text-4xl pr-2 italic inline-block text-color-white/0 hover:text-color-accent/80 transition-all duration-300"
        >
          WATCHNIME
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
