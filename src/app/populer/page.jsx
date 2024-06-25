"use client";
import AnimeList from "@/Components/AnimeLIst/AnimeList";
import Header from "@/Components/AnimeLIst/Header";
import Pagination from "@/Components/Utilities/Pagination";
import TypeAnime from "@/Components/Utilities/TypeAnime";
import { FILTER_TYPE_ANIME, getAnimeRespons } from "@/libs/api_libs";
import { useEffect, useState } from "react";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnimeList, setTopAnimeList] = useState([]);
  const [typeAnime, setTypeAnime] = useState("all");
  const [headerTitle, setHeaderTitle] = useState("");

  const initialType = FILTER_TYPE_ANIME.type;

  useEffect(() => {
    const fetchData = async () => {
      const populerAnime =
        typeAnime === "all" || initialType === "all"
          ? await getAnimeRespons("top/anime", `sfw&page=${page}`)
          : await getAnimeRespons(
              "top/anime",
              `sfw&page=${page}&type=${typeAnime}`
            );
      setTopAnimeList(populerAnime);
    };
    fetchData();
  }, [page, typeAnime]);

  useEffect(() => {
    if (page > topAnimeList?.pagination?.last_visible_page) {
      setPage(topAnimeList?.pagination?.last_visible_page);
    }
    if (page < 1) return setPage(1);
  }, [page, topAnimeList]);

  const handlerTitle = (title) => setHeaderTitle(title);

  return (
    <article className="w-full px-5 grid grid-cols-1 md:px-8 2xl:container 2xl:mx-auto">
      <Header title={`Populer Anime ${headerTitle} Page #${page}`} />
      <TypeAnime
        setTypeAnime={setTypeAnime}
        handlerTitle={handlerTitle}
        setPage={setPage}
        initialType={initialType}
      />
      <AnimeList api={topAnimeList} />
      <Pagination
        page={page}
        setPage={setPage}
        lastPage={topAnimeList.pagination?.last_visible_page}
      />
    </article>
  );
};

export default Page;
