"use client";
import { getAnimeRespons } from "@/libs/api_libs";
import Link from "next/link";
import { useEffect, useState } from "react";

const BoxGenre = ({ setIsBoxGenreActive, closeHamburger }) => {
  const [genreAnimes, setGenreAnimes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const getGenres = await getAnimeRespons("genres/anime", "filter=genres");
      setGenreAnimes(getGenres);
    };
    fetchData();
  }, []);

  return (
    <article className="w-full py-4 px-5 md:px-8 absolute z-20 top-[104px] left-0 right-0 mx-auto md:top-[52px] lg:top-[58px] 2xl:container 2xl:mx-auto">
      <section
        onMouseLeave={() => setIsBoxGenreActive(false)}
        className="w-full shadow-lg shadow-color-black/60 bg-color-dark border border-color-primary/80 rounded-lg overflow-hidden grid grid-cols-3 justify-between items-center p-2 gap-2 sm:grid-cols-4 lg:grid-cols-7 "
      >
        {genreAnimes.length === 0 ? (
          <p className="text-color-primary text-sm">Loading...</p>
        ) : (
          genreAnimes.data?.map((genre, index) => {
            return (
              <Link
                key={index}
                onClick={() => closeHamburger(false)}
                href={`/genres/${genre.mal_id}`}
                className="text-color-primary text-xs sm:text-sm text-center  rounded-full transition duration-150 p-2 bg-blur-hover"
              >
                {genre.name}
              </Link>
            );
          })
        )}
      </section>
    </article>
  );
};

export default BoxGenre;
