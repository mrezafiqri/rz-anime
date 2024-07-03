"use client";

import { Star } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

const CardAnime = ({ anime }) => {
  return (
    <Link
      href={`/anime/${anime?.mal_id}`}
      className="grid gap-y-1 group content-start"
    >
      <header className="rounded-lg overflow-hidden relative">
        <Image
          className="aspect-3/4 object-cover object-center group-hover:scale-110 group-hover:rotate-3 group-hover:brightness-50 group-hover:blur-[2px]  transition-all duration-300 bg-color-secondary/30"
          src={anime?.images.webp.image_url}
          alt={`Image ${anime?.title}`}
          width={350}
          height={350}
          quality={55}
          priority
        />
        <div className="text-base text-color-primary flex justify-center items-center absolute top-0 w-full h-full invisible group-hover:visible transition-all duration-100">
          <p>Detail</p>
        </div>
      </header>
      <section className="grid grid-cols-1 ">
        <h1 className="text-color-white font-semibold text-sm line-clamp-1 leading-normal group-hover:text-color-accent transition-all duration-300 lg:text-lg">
          {anime?.title}
        </h1>
        <div className="grid grid-cols-2 justify-between items-center text-xs lg:text-sm text-color-secondary">
          <span
            className={`flex items-center gap-x-1 leading-none ${
              anime?.score ? "visible" : "invisible"
            }`}
          >
            <Star weight="fill" />
            <p className="inline">{anime?.score}</p>
          </span>
          <span
            className={`flex justify-end leading-none ${
              anime?.year ? "visible" : "invisible"
            }`}
          >
            <p className="inline">{anime?.year}</p>
          </span>
        </div>
      </section>
    </Link>
  );
};

export default CardAnime;
