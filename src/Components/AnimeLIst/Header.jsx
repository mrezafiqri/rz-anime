"use client";

import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <header className="w-full p-2 my-4 rounded-md flex justify-between items-center text-color-primary bg-blur-dark">
      <div className="flex justify-start items-center font-semibold text-lg gap-2 md:text-xl">
        <span className="text-color-accent font-bold">|</span>
        <h1 className="capitalize">{title}</h1>
      </div>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="bg-color-accent backdrop-blur-md border border-color-white/10 bg-gradient-to-r from-color-white/10 to-color-black/20 hover:bg-color-accent/50 rounded-md py-1 px-3 text-sm md:text-base"
        >
          {linkTitle}
        </Link>
      ) : null}
    </header>
  );
};

export default Header;
