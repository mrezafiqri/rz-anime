"use client";
import { X } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

const BoxAnime = ({ api, handlerReset }) => {
  return (
    <>
      <div
        className={`w-full h-auto rounded-lg divide-y divide-color-secondary bg-color-black absolute shadow-lg shadow-color-black/60 top-[52px] grid grid-cols-1 overflow-hidden ${
          api?.data && "border border-color-black"
        }`}
      >
        <Suspense fallback={<p className="text-color-primary">Searching...</p>}>
          {api.data?.map((anime, index) => {
            return (
              <Link
                onClick={handlerReset}
                href={`/anime/${anime?.mal_id}`}
                key={index}
                className="text-color-primary flex justify-start gap-2 p-2 flex-nowrap bg-blur-dark bg-color-black hover:bg-color-dark"
              >
                <Image
                  className="aspect-3/4 w-auto object-cover object-center bg-color-secondary rounded"
                  src={anime?.images.webp.image_url}
                  alt={`Image ${anime?.title}`}
                  width={50}
                  height={50}
                  loading="lazy"
                />
                <span className="grid justify-start items-center w-full">
                  <h1 className="line-clamp-2">{anime?.title}</h1>
                </span>
              </Link>
            );
          })}
        </Suspense>
      </div>
      {api?.data && (
        <button
          onClick={handlerReset}
          className="absolute z-10 top-[56px] right-2 text-color-red hover:text-color-red/80"
        >
          <X size={32} weight="fill" />
        </button>
      )}
    </>
  );
};

export default BoxAnime;
