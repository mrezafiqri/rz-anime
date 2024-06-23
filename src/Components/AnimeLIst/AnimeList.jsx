"use client";
import React, { Suspense, useEffect } from "react";
const CardAnime = React.lazy(() => import("./CardAnime"));

const AnimeList = ({ api }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  useEffect(() => {
    scrollTop();
  }, [api]);
  return (
    <article className="my-4 w-full grid grid-cols-3 gap-6 justify-between md:grid-cols-5">
      <Suspense fallback={<p className="text-color-primary">Loading...</p>}>
        {api?.data?.map((anime, index) => {
          return <CardAnime anime={anime} key={index} />;
        })}
      </Suspense>
    </article>
  );
};

export default AnimeList;
