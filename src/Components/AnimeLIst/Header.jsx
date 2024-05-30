"use client";

import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <header className="w-full py-2 my-6 rounded-lg flex justify-between items-center text-color-primary">
      <div className="flex justify-start items-center text-2xl gap-2">
        <span className="text-color-accent font-bold">|</span>
        <h1 className="">{title}</h1>
      </div>
      {linkHref && linkTitle ? (
        <Link href={linkHref} className="rounded-md py-1 px-3 bg-color-accent">
          {linkTitle}
        </Link>
      ) : null}
    </header>
  );
};

export default Header;
