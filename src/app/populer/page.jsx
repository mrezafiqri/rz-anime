"use client";
import AnimeList from "@/Components/AnimeLIst/AnimeList";
import Header from "@/Components/AnimeLIst/Header";
import Pagination from "@/Components/Utilities/Pagination";
import { getAnimeRespons } from "@/libs/api_libs";
import { useEffect, useState } from "react";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnimeList, setTopAnimeList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const populerAnime = await getAnimeRespons(
        "top/anime",
        `sfw&page=${page}`
      );
      setTopAnimeList(populerAnime);
    };
    fetchData();
  }, [page]);

  return (
    <article className="w-full px-5 grid grid-cols-1 md:px-8 2xl:container 2xl:mx-auto">
      <Header title={`Populer Anime Page #${page}`} />
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
