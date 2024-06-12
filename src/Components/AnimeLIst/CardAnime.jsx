"use client";

import { Star } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

const CardAnime = ({ anime }) => {
  return (
    <Link
      href={`/anime/${anime.mal_id}`}
      className="grid gap-2 group items-start"
    >
      <header className="rounded-lg overflow-hidden relative">
        <Image
          className="aspect-3/4 object-cover object-center group-hover:scale-110 group-hover:rotate-3 group-hover:brightness-50 group-hover:blur-[2px]  transition-all duration-300 bg-color-secondary"
          src={anime.images.webp.image_url}
          alt={`Image ${anime.title}`}
          width={350}
          height={350}
          priority="true"
        />
        <div className="text-base text-color-primary flex justify-center items-center absolute top-0 w-full h-full invisible group-hover:visible transition-all duration-100">
          <p>Detail</p>
        </div>
      </header>
      <h1 className="text-color-white font-semibold text-lg line-clamp-1 leading-none group-hover:text-color-accent transition-all duration-300">
        {anime.title}
      </h1>
      {anime.score ? (
        <div className="grid grid-cols-2 justify-between items-center text-sm text-color-secondary">
          <span className="flex items-center gap-1 leading-none">
            <Star weight="fill" />
            <p>{anime.score}</p>
          </span>
          <span className="inline-block text-end">
            <p>{`${anime.year || "----"}`}</p>
          </span>
        </div>
      ) : null}
    </Link>
  );
};

export default CardAnime;
