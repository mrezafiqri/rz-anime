"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  const [colorChange, setColorChange] = useState(true);
  const [hamburger, setHamburger] = useState(false);

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

  const closeHamburger = (value) => {
    setHamburger(value);
  };

  return (
    <header
      className={`${
        colorChange
          ? "bg-color-dark"
          : "bg-color-black/80 backdrop-blur-xl border-b border-b-color-black"
      }  transition-all duration-200 sticky top-0 z-[1030]`}
    >
      <div className="w-full relative py-4 px-5 md:px-8 flex flex-col gap-x-2 gap-y-4 md:justify-between md:items-center md:flex-row 2xl:container 2xl:mx-auto">
        <span className="w-full flex justify-between items-center gap-4">
          <Link
            href="/"
            className="text-center bg-color-accent bg-gradient-to-r from-color-white/10 to-color-white/20 to-100% bg-clip-text font-bold text-3xl lg:text-4xl pr-2 italic inline-block text-color-white/0 hover:text-color-accent/80 transition-all duration-300"
          >
            WATCHNIME
          </Link>
          <HamburgerMenu hamburger={hamburger} setHamburger={setHamburger} />
        </span>
        <Navigation hamburger={hamburger} closeHamburger={closeHamburger} />
      </div>
    </header>
  );
};

export default Navbar;
