"use client";

import { CaretDown, CaretUp, Star } from "@phosphor-icons/react";
import CharactersAnime from "./CharactersAnime";
import TextItem from "./TextItem";

const BodyDetail = ({ detailAnime }) => {
  const paramDetails = { ...detailAnime };

  return (
    <article className="w-full absolute top-[105%] inset-x-0 md:sticky">
      <div className="w-full grid gap-y-1 lg:w-2/4">
        <TextItem textAnime={"Type:"} dataAnime={paramDetails.api?.data.type} />
        <TextItem
          textAnime={"Status:"}
          dataAnime={paramDetails.api?.data.status}
        />
        <TextItem
          textAnime={"Duration:"}
          dataAnime={paramDetails.api?.data.duration}
        />
        <TextItem
          textAnime={"Release:"}
          dataAnime={paramDetails.airedAnime.join("-")}
        />
        {paramDetails.api?.data.score && (
          <span className="flex gap-x-8 w-full text-base md:text-lg lg:text-base">
            <p className="w-2/6 md:w-1/4 font-semibold">Score:</p>
            <p className="w-4/6 md:w-3/4 text-color-primary/70 flex items-center gap-1">
              <Star weight="fill" color="#d8bd0e" />
              {paramDetails.api?.data.score}
            </p>
          </span>
        )}
      </div>
      <hr className="my-1 text-color-primary/20" />

      <h2 className="font-semibold text-xl">Synopsis</h2>
      <span className="text-base md:text-lg lg:text-base">
        <p
          className={`text-color-primary/70 text-justify font-light ${
            paramDetails.readMore ? "line-clamp-none" : "line-clamp-5"
          } lg:line-clamp-none`}
        >
          {paramDetails.api?.data.synopsis}.
        </p>
        {paramDetails.showButton && (
          <button
            className="text-color-white link-blur-group bg-color-accent rounded my-1 py-1 px-3 text-sm inline-block lg:hidden hover:bg-color-accent/50"
            onClick={paramDetails.handlerReadMore}
          >
            {paramDetails.readMore ? (
              <span className="flex justify-center items-center gap-1">
                <p>Minimize</p>
                <CaretUp weight="bold" />
              </span>
            ) : (
              <span className="flex justify-center items-center gap-1">
                <p>Read More</p>
                <CaretDown weight="bold" />
              </span>
            )}
          </button>
        )}
      </span>
      <hr className="my-2 text-color-primary/20" />

      {paramDetails.resultCharacter && (
        <span>
          <h2 className="font-semibold text-xl">Main Character</h2>
          <CharactersAnime resultCharacter={paramDetails.resultCharacter} />
        </span>
      )}
    </article>
  );
};

export default BodyDetail;
