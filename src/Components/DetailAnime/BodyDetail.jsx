"use client";

import { CaretDown, CaretUp, Star } from "@phosphor-icons/react";
import CharactersAnime from "./CharactersAnime";

const BodyDetail = (props) => {
  const {
    api,
    airedAnime,
    resultCharacter,
    readMore,
    showButton,
    handlerReadMore,
  } = props;
  return (
    <article className="w-full absolute top-[105%] inset-x-0 md:sticky">
      <div className="w-full grid gap-y-1 lg:w-2/4">
        <span className="flex gap-x-8 w-full text-base md:text-lg lg:text-base">
          <p className="w-2/6 md:w-1/4 font-semibold">Type:</p>
          <p className="w-4/6 md:w-3/4 text-color-primary/70">
            {api?.data.type}
          </p>
        </span>
        <span className="flex gap-x-8 w-full text-base md:text-lg lg:text-base">
          <p className="w-2/6 md:w-1/4 font-semibold">Status:</p>
          <p className="w-4/6 md:w-3/4 text-color-primary/70">
            {api?.data.status}
          </p>
        </span>
        <span className="flex gap-x-8 w-full text-base md:text-lg lg:text-base">
          <p className="w-2/6 md:w-1/4 font-semibold">Duration:</p>
          <p className="w-4/6 md:w-3/4 text-color-primary/70">
            {api?.data.duration}
          </p>
        </span>
        <span className="flex gap-x-8 w-full text-base md:text-lg lg:text-base">
          <p className="w-2/6 md:w-1/4 font-semibold">Release:</p>
          <p className="w-4/6 md:w-3/4 text-color-primary/70">
            {airedAnime.join("-")}
          </p>
        </span>
        {api?.data.score && (
          <span className="flex gap-x-8 w-full text-base md:text-lg lg:text-base">
            <p className="w-2/6 md:w-1/4 font-semibold">Score:</p>
            <p className="w-4/6 md:w-3/4 text-color-primary/70 flex items-center gap-1">
              <Star weight="fill" color="#d8bd0e" />
              {api?.data.score}
            </p>
          </span>
        )}
      </div>
      <hr className="my-1 text-color-primary/20" />
      <h2 className="font-semibold text-xl">Synopsis</h2>
      <span className="text-base md:text-lg lg:text-base">
        <p
          className={`text-color-primary/70 text-justify font-light ${
            readMore ? "line-clamp-none" : "line-clamp-5"
          } lg:line-clamp-none`}
        >
          {api?.data.synopsis}.
        </p>
        {showButton && (
          <button
            className="text-color-white bg-blur-accent rounded my-1 py-1 px-3 text-sm inline-block lg:hidden"
            onClick={handlerReadMore}
          >
            {readMore ? (
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
      <span>
        <h2 className="font-semibold text-xl">Main Character</h2>
        <CharactersAnime resultCharacter={resultCharacter} />
      </span>
    </article>
  );
};

export default BodyDetail;
