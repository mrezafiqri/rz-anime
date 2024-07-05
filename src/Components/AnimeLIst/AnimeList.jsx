"use client";
import { scrollTop } from "@/libs/utils";
import { useEffect, useState } from "react";
import CardAnime from "./CardAnime";
import SkeletonUiVertikal from "../SkeletonUi/SkeletonUiVertikal";

const AnimeList = ({ api, amount = null, detailCard = null }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (api.data === undefined) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
    scrollTop();
  }, [api]);

  return (
    <>
      {isLoading ? (
        <SkeletonUiVertikal amount={amount} detailCard={detailCard} />
      ) : (
        <article className="my-4 w-full grid grid-cols-3 gap-6 justify-between md:grid-cols-5">
          {api?.data?.map((anime, index) => {
            return <CardAnime anime={anime} key={index} />;
          })}
        </article>
      )}
    </>
  );
};

export default AnimeList;
