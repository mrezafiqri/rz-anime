"use client";

import Link from "next/link";
import InputSearch from "./InputSearch";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [colorChange, setColorChange] = useState(false);

  const changeColorNavbar = () => {
    if (window.scrollY >= 20) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColorNavbar);
  },[colorChange])

  return (
    <header
      className={`${
        colorChange
          ? "bg-color-black/80 backdrop-blur-xl shadow-2xl border-b border-b-color-black"
          : "bg-color-black/0"
      } w-full py-4 px-5 md:px-8 flex flex-col gap-2 sticky top-0 z-[1030] sm:justify-between sm:items-center sm:flex-row transition-all duration-75`}
    >
      <Link
        href="/"
        className="bg-color-accent bg-gradient-to-r from-color-white/10 to-color-white/20 to-100% bg-clip-text font-bold text-3xl lg:text-4xl pr-2 italic inline-block text-color-white/0 hover:text-color-accent/80 transition-all duration-300"
      >
        WATCHNIME
      </Link>
      <InputSearch />
    </header>
  );
};

export default Navbar;
