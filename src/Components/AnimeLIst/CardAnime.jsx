"use client";

import { Star } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

const CardAnime = ({ anime }) => {
  return (
    <Link href="/" className="grid gap-2 group">
      <header className="rounded-lg overflow-hidden relative">
        <Image
          className="aspect-3/4 object-cover object-center group-hover:scale-110 group-hover:rotate-3 group-hover:brightness-50 group-hover:blur-[2px]  transition-all duration-300"
          src={anime.images.webp.image_url}
          alt=""
          width={350}
          height={350}
        />
        <div className="text-base text-color-primary flex justify-center items-center absolute top-0 w-full h-full invisible group-hover:visible transition-all duration-100">
          <p>Detail</p>
        </div>
      </header>
      <h1 className="text-color-white font-semibold text-xl line-clamp-1 leading-none group-hover:text-color-accent transition-all duration-300">
        {anime.title}
      </h1>
      <span className="flex items-center gap-1 text-color-secondary leading-none text-sm">
        <Star weight="fill" />
        <p>{anime.score}</p>
      </span>
    </Link>
  );
};

export default CardAnime;
