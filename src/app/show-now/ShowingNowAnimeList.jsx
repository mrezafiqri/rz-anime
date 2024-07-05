"use client";

import AnimeList from "@/Components/AnimeLIst/AnimeList";
import Header from "@/Components/AnimeLIst/Header";
import NotFoundType from "@/Components/Utilities/NotFoundType";
import Pagination from "@/Components/Utilities/Pagination";
import TypeAnime from "@/Components/Utilities/TypeAnime";
import { getAnimeResponse } from "@/libs/api_libs";
import { FILTER_TYPE_ANIME } from "@/libs/utils";
import { useEffect, useState } from "react";

const ShowingNowAnimeList = () => {
  const [page, setPage] = useState(1);
  const [animeList, setAnimeList] = useState([]);
  const [typeAnime, setTypeAnime] = useState("all");
  const [headerTitle, setHeaderTitle] = useState("");

  const initialType = FILTER_TYPE_ANIME.filter;

  useEffect(() => {
    const fetchData = async () => {
      const responseAnime =
        typeAnime === "all" || initialType === "all"
          ? await getAnimeResponse("seasons/now", `sfw&page=${page}`)
          : await getAnimeResponse(
              "seasons/now",
              `sfw&page=${page}&filter=${typeAnime}`
            );
      setAnimeList(responseAnime);
    };
    fetchData();
  }, [initialType, page, typeAnime]);

  useEffect(() => {
    if (page > animeList?.pagination?.last_visible_page) {
      setPage(animeList?.pagination?.last_visible_page);
    }
    if (page < 1) return setPage(1);
  }, [page, animeList]);

  const handlerTitle = (title) => setHeaderTitle(title);

  const ValidasiAnimeList = () => {
    return (
      <>
        {animeList.data?.length !== 0 ? (
          <>
            <AnimeList api={animeList} amount={25} detailCard={true} />
            <Pagination
              page={page}
              setPage={setPage}
              lastPage={animeList.pagination?.last_visible_page}
            />
          </>
        ) : (
          <NotFoundType animePage={"Showing Now"} typeText={headerTitle} />
        )}
      </>
    );
  };

  return (
    <>
      <Header title={`Showing Now ${headerTitle} Page #${page}`} />
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

export default ShowingNowAnimeList;
