"use client";

import AnimeList from "@/Components/AnimeLIst/AnimeList";
import Header from "@/Components/AnimeLIst/Header";
import Footer from "@/Components/Footer";
import Pagination from "@/Components/Utilities/Pagination";
import { getAnimeResponse } from "@/libs/api_libs";

import { useEffect, useState } from "react";

const GenreList = ({ id }) => {
  const [page, setPage] = useState(1);
  const [animeList, setAnimeList] = useState([]);
  const [nameGenre, setNameGenre] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const anime = await getAnimeResponse(
        "anime",
        `sfw&genres=${id}&page=${page}`
      );
      setAnimeList(anime);

      const getNameGenre = anime.data
        ?.flatMap((item) => item["genres"])
        .find((genreId) => genreId.mal_id == id);
      setNameGenre(getNameGenre.name);
    };
    fetchData();
  }, [page, id]);

  return (
    <>
      <Header title={`Genre "${nameGenre || ""}" Page #${page}`} />
      <AnimeList api={animeList} amount={10} detailCard={true} />
      <Pagination
        page={page}
        setPage={setPage}
        lastPage={animeList.pagination?.last_visible_page}
      />
      <Footer />
    </>
  );
};

export default GenreList;
