"use client";

import slides from "@/libs/slides";
import Image from "next/image";
import SideBarLeft from "./SideBarLeft";
import ArrowHandler from "./ArrowHandler";
import { useEffect, useState } from "react";
import DotHandler from "./DotHandler";

const Jumbotroon = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mal_id, setMal_id] = useState(() => slides[currentIndex].mal_id);

  useEffect(() => {
    setMal_id(slides[currentIndex].mal_id);
  }, [currentIndex]);

  useEffect(() => {
    const intervalMalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === slides.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, 5000);

    return () => clearInterval(intervalMalId);
  }, [mal_id]);

  const prevSlide = () => {
    const isFristSlide = currentIndex === 0;
    const newtIndex = isFristSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newtIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <article className="relative rounded-3xl overflow-hidden mt-2">
      <Image
        src={slides[currentIndex].image}
        alt={`Background ${slides[currentIndex].title}`}
        className="h-[60vh] w-full object-cover object-center md:h-[80vh] transition-all duration-500 bg-color-dark"
      />
      <div className="absolute top-0 left-0 right-0 z-[1] bg-gradient-to-r from-color-black to-color-dark/0 to-80% w-full h-full flex justify-between items-center text-color-secondary group">
        <SideBarLeft slides={slides} currentIndex={currentIndex} />
        <ArrowHandler prevSlide={prevSlide} nextSlide={nextSlide} />
        <DotHandler
          slides={slides}
          goToSlide={goToSlide}
          currentIndex={currentIndex}
        />
      </div>
    </article>
  );
};

export default Jumbotroon;
