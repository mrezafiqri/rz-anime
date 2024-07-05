"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SkeletonUiHorizontal from "../SkeletonUi/SkeletonUiHorizontal";

const RecomendedAnime = ({ api }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, []);

  return (
    <article className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between items-center gap-4 mb-8">
      {isLoading ? (
        <SkeletonUiHorizontal amount={8} />
      ) : (
        api?.data?.map((anime, index) => {
          return (
            <Link
              href={`/anime/${anime?.mal_id}`}
              key={index}
              className="rounded-md overflow-hidden p-2 bg-blur-hover"
            >
              <div className="flex w-full items-center gap-x-2 md:gap-x-4">
                <div className="w-2/5 aspect-3/4 relative overflow-hidden rounded bg-color-secondary/30 md:w-[64px]">
                  <Image
                    src={anime?.images.webp.image_url}
                    alt={`Image ${anime?.title}`}
                    quality={60}
                    sizes="80vw"
                    fill
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                </div>
                <span className="grid items-center w-3/5">
                  <h1 className="text-color-primary font-semibold line-clamp-2 text-xs sm:text-sm lg:text-base">
                    {anime?.title}
                  </h1>
                  <p className="text-color-white/60 text-[10px] sm:text-xs py-1">
                    Click for Details
                  </p>
                </span>
              </div>
            </Link>
          );
        })
      )}
    </article>
  );
};

export default RecomendedAnime;
