"use client";
import AnimeList from "@/Components/AnimeLIst/AnimeList";
import Header from "@/Components/AnimeLIst/Header";
import Pagination from "@/Components/Utilities/Pagination";
import TypeAnime from "@/Components/Utilities/TypeAnime";
import { FILTER_TYPE_ANIME, getAnimeRespons } from "@/libs/api_libs";
import { useEffect, useState } from "react";

const Page = () => {
  const [page, setPage] = useState(1);
  const [animeList, setAnimeList] = useState([]);
  const [typeAnime, setTypeAnime] = useState("all");
  const [headerTitle, setHeaderTitle] = useState("");

  const initialType = FILTER_TYPE_ANIME.filter;

  useEffect(() => {
    const fetchData = async () => {
      const responseAnime =
        typeAnime === "all" || initialType === "all"
          ? await getAnimeRespons("seasons/now", `sfw&page=${page}`)
          : await getAnimeRespons(
              "seasons/now",
              `sfw&page=${page}&filter=${typeAnime}`
            );
      setAnimeList(responseAnime);
    };
    fetchData();
  }, [page, typeAnime]);

  useEffect(() => {
    if (page > animeList?.pagination?.last_visible_page) {
      setPage(animeList?.pagination?.last_visible_page);
    }
    if (page < 1) return setPage(1)
  }, [page, animeList]);

  const handlerTitle = (title) => setHeaderTitle(title);

  return (
    <article className="w-full px-5 grid grid-cols-1 md:px-8 2xl:container 2xl:mx-auto">
      <Header title={`Showing Now ${headerTitle} Page #${page}`} />
      <TypeAnime
        setTypeAnime={setTypeAnime}
        handlerTitle={handlerTitle}
        setPage={setPage}
        initialType={initialType}
      />
      <AnimeList api={animeList} />
      <Pagination
        page={page}
        setPage={setPage}
        lastPage={animeList.pagination?.last_visible_page}
      />
    </article>
  );
};

export default Page;
