"use client";

import { ArrowFatLinesLeft, ArrowFatLinesRight } from "@phosphor-icons/react";

const ArrowHandler = ({ prevSlide, nextSlide }) => {
  return (
    <section className="flex justify-between absolute bottom-[50%] left-0 right-0 px-1 md:px-3 gap-6 group-hover:text-color-primary transition-all duration-75">
      <button
        className="border border-color-white/10 rounded-full p-2 bg-gradient-to-r from-color-white/10 to-color-black/20 backdrop-blur-lg group-hover:border-color-white/60"
        onClick={prevSlide}
      >
        <ArrowFatLinesLeft className="text-sm md:text-2xl" weight="fill" />
      </button>
      <button
        className="border border-color-white/10 rounded-full p-2 bg-gradient-to-r from-color-white/10 to-color-black/20 backdrop-blur-lg group-hover:border-color-white/60"
        onClick={nextSlide}
      >
        <ArrowFatLinesRight className="text-sm md:text-2xl" weight="fill" />
      </button>
    </section>
  );
};

export default ArrowHandler;
