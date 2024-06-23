"use client";
import AnimeList from "@/Components/AnimeLIst/AnimeList";
import Header from "@/Components/AnimeLIst/Header";
import Pagination from "@/Components/Utilities/Pagination";
import { getAnimeRespons } from "@/libs/api_libs";
import { useEffect, useState } from "react";

const Page = ({ params: { id } }) => {
  const [page, setPage] = useState(1);
  const [animeList, setAnimeList] = useState([]);
  const [nameGenre, setNameGenre] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const anime = await getAnimeRespons(
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
  }, [page]);

  return (
    <article className="w-full mt-2 px-5 grid grid-cols-1 gap-4 md:px-8 2xl:container 2xl:mx-auto">
      <Header title={`Genre "${nameGenre || ""}" Page #${page}`} />
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
