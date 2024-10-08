"use client";

import { DotsThreeCircle, Star, YoutubeLogo } from "@phosphor-icons/react";
import Link from "next/link";

const SideBarLeft = ({ slides, currentIndex }) => {
  return (
    <section className="jbt-left-group">
      <h1 className="font-bold text-color-white/95 line-clamp-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:line-clamp-none">
        {slides[currentIndex].title}
      </h1>

      <div className="flex flex-wrap gap-2 md:gap-4">
        {slides[currentIndex].genres.map((genre, index) => {
          return (
            <span key={index}>
              <p className="jbt-text-group-genres">{genre}</p>
            </span>
          );
        })}
        <span className="flex justify-center items-center gap-1 jbt-text-group-genres">
          <Star className="text-base" weight="fill" />
          <p>{slides[currentIndex].score}</p>
        </span>
      </div>

      <div className="jbt-card-synopsis">
        <p className="line-clamp-3 text-xs md:text-base md:line-clamp-6 ">
          {slides[currentIndex].synopsis}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-2 w-full sm:grid-cols-2 md:gap-x-4">
        <Link
          href={`/anime/${slides[currentIndex].mal_id}`}
          className="link-blur-group w-full p-2 rounded-lg bg-color-accent hover:bg-color-accent/50 transition-all duration-75 "
        >
          <DotsThreeCircle className="text-sm md:text-2xl" weight="bold" />
          <p className="text-xs sm:text-sm md:text-base lg:text-xl">More Details</p>
        </Link>
        <Link
          href={slides[currentIndex].youtube_url}
          target="_blank"
          className="link-blur-group w-full p-2 rounded-lg bg-color-red hover:bg-color-red/50 transition-all duration-75"
        >
          <YoutubeLogo className="text-sm md:text-2xl" weight="bold" />
          <p className="text-xs sm:text-sm md:text-base lg:text-xl">Watch Trailer</p>
        </Link>
      </div>
    </section>
  );
};

export default SideBarLeft;
