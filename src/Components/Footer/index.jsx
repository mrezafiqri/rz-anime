import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-color-black py-4 border-t border-color-secondary/20 relative inset-x-0 bottom-0">
      <section className="flex justify-center items-center gap-1 text-color-secondary text-sm font-light w-full px-5 md:px-8 2xl:container 2xl:mx-auto 2xl:text-base">
        <p className="italic">Copyright © 2024 by</p>
        <Link
          href={"https://www.instagram.com/mrezafiqri/"}
          target="_blank"
          className="underline underline-offset-2 decoration-color-accent hover:text-color-primary/80 transition duration-150"
        >
          @mrezafiqri
        </Link>
      </section>
    </footer>
  );
};

export default Footer;
