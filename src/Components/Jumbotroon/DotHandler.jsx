"use client";

import { Circle } from "@phosphor-icons/react";

const DotHandler = ({ slides, goToSlide, currentIndex }) => {
  return (
    <div className="absolute bottom-2 md:bottom-4 left-0 right-0 w-full flex justify-center items-center">
      {slides.map((slide, index) => {
        return (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className=" mx-1 cursor-pointer"
          >
            {index === currentIndex ? (
              <Circle className="text-xs text-color-white" weight="fill" />
            ) : (
              <Circle className="text-[8px] text-color-primary/70" weight="fill" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default DotHandler;
