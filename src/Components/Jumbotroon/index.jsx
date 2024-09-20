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
    <article className="relative rounded-3xl overflow-hidden h-[50vh] max-h-full md:h-[60vh] lg:h-[85vh]">
      <Image
        src={slides[currentIndex].image}
        alt={`Background ${slides[currentIndex].title}`}
        priority
        quality={55}
        placeholder="blur"
        className="object-cover object-center bg-color-dark w-full h-[50vh] max-h-full md:h-[60vh] lg:h-[85vh]"
      />
      <div className="absolute top-0 left-0 right-0 z-[1] overflow-hidden bg-gradient-to-r from-color-black to-color-dark/0 to-100% w-full h-full flex justify-between items-center text-color-secondary group">
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
