"use client";

import AnimeList from "@/Components/AnimeLIst/AnimeList";
import Header from "@/Components/AnimeLIst/Header";
import Footer from "@/Components/Footer";
import NotFoundType from "@/Components/Utilities/NotFoundType";
import Pagination from "@/Components/Utilities/Pagination";
import TypeAnime from "@/Components/Utilities/TypeAnime";
import { getAnimeResponse } from "@/libs/api_libs";

import { FILTER_TYPE_ANIME } from "@/libs/utils";
import { useEffect, useState } from "react";

const PopulerAnimeList = () => {
  const [page, setPage] = useState(1);
  const [topAnimeList, setTopAnimeList] = useState([]);
  const [typeAnime, setTypeAnime] = useState("all");
  const [headerTitle, setHeaderTitle] = useState("");

  const initialType = FILTER_TYPE_ANIME.type;

  useEffect(() => {
    const fetchData = async () => {
      const populerAnime =
        typeAnime === "all" || initialType === "all"
          ? await getAnimeResponse("top/anime", `sfw&page=${page}`)
          : await getAnimeResponse(
              "top/anime",
              `sfw&page=${page}&type=${typeAnime}`
            );
      setTopAnimeList(populerAnime);
    };
    fetchData();
  }, [initialType, page, typeAnime]);

  useEffect(() => {
    if (page > topAnimeList?.pagination?.last_visible_page) {
      setPage(topAnimeList?.pagination?.last_visible_page);
    }
    if (page < 1) return setPage(1);
  }, [page, topAnimeList]);

  const handlerTitle = (title) => setHeaderTitle(title);

  const ValidasiAnimeList = () => {
    return (
      <>
        {topAnimeList.data?.length !== 0 ? (
          <>
            <AnimeList api={topAnimeList} amount={25} detailCard={true} />
            <Pagination
              page={page}
              setPage={setPage}
              lastPage={topAnimeList.pagination?.last_visible_page}
            />
            <Footer />
          </>
        ) : (
          <NotFoundType animePage={"Populer Anime"} typeText={headerTitle} />
        )}
      </>
    );
  };

  return (
    <>
      <Header title={`Populer Anime ${headerTitle} Page #${page}`} />
      <TypeAnime
        setTypeAnime={setTypeAnime}
        handlerTitle={handlerTitle}
        setPage={setPage}
        initialType={initialType}
      />
      <ValidasiAnimeList />
    </>
  );
};

export default PopulerAnimeList;
