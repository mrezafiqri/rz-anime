"use client";

import { ArrowFatLinesLeft, ArrowFatLinesRight } from "@phosphor-icons/react";

const ArrowHandler = ({ prevSlide, nextSlide }) => {
  return (
    <section className="flex justify-between absolute bottom-[50%] left-0 right-0 px-1 md:px-3 gap-6 transition-all duration-75 invisible group-hover:visible">
      <button
        className="arrow-handler"
        onClick={prevSlide}
      >
        <ArrowFatLinesLeft className="text-sm md:text-2xl" weight="fill" />
      </button>
      <button
        className="arrow-handler"
        onClick={nextSlide}
      >
        <ArrowFatLinesRight className="text-sm md:text-2xl" weight="fill" />
      </button>
    </section>
  );
};

export default ArrowHandler;
