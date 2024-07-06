"use client";
import { X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import SkeletonUiHorizontal from "../SkeletonUi/SkeletonUiHorizontal";
import BoxAnimeItem from "./BoxAnimeItem";

const BoxAnimeList = ({ api, handlerReset, query }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const ResultNotFound = () => {
    return (
      <div className="w-full h-20 flex justify-center items-center bg-color-dark">
        <h1 className="text-color-primary text-center text-sm">
          Result for{" "}
          <span className="underline decoration-color-accent decoration-2">
            {query}
          </span>{" "}
          not found!
        </h1>
      </div>
    );
  };

  return (
    <>
      <div
        className={`w-full h-auto rounded-lg divide-y divide-color-secondary bg-color-black absolute shadow-lg shadow-color-black/60 top-[52px] grid grid-cols-1 overflow-hidden ${
          api?.data && "border border-color-black"
        }`}
      >
        {isLoading ? (
          <section className="grid grid-cols-1">
            <SkeletonUiHorizontal amount={5} />
          </section>
        ) : api?.data?.length > 0 ? (
          <BoxAnimeItem api={api} handlerReset={handlerReset} />
        ) : (
          <ResultNotFound />
        )}
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

export default BoxAnimeList;
