import SwipeAnimeList from "@/Components/AnimeLIst";
import AnimeList from "@/Components/AnimeLIst/AnimeList";
import Header from "@/Components/AnimeLIst/Header";
import Jumbotroon from "@/Components/Jumbotroon";
import { getAnimeRespons, getNestedAnimeResponse, reproduce } from "@/libs/api_libs";
import dynamic from "next/dynamic";

const RecomendedAnime = dynamic(() => import("../Components/AnimeLIst/RecomendedAnime"));

const Page = async () => {

  const comingUpAnime = await getAnimeRespons("seasons/upcoming", "sfw&limit=15");
  const topAnime = await getAnimeRespons("top/anime", "sfw&limit=14");
  const seasonsNow = await getAnimeRespons("seasons/now", "sfw&limit=14");
  let recomendedAnime = await getNestedAnimeResponse("recommendations/anime?sfw", "entry");
  recomendedAnime = reproduce(recomendedAnime, 8);
  
  return (
    <main className="w-full mt-2 px-5 grid grid-cols-1 gap-4 md:px-8 2xl:container 2xl:mx-auto">
      <section>
        <Jumbotroon />
      </section>
      <section>
        <Header title="UPCOMING" />
        <AnimeList api={comingUpAnime} />
      </section>
      <section>
        <Header title="POPULER" linkHref="/populer" linkTitle="View All" />
        <SwipeAnimeList api={topAnime} />
      </section>
      <section>
        <Header title="SHOWING NOW" linkHref="/show-now" linkTitle="View All" />
        <SwipeAnimeList api={seasonsNow} />
      </section>
      <section>
        <Header title="RECOMENDED" />
        <RecomendedAnime api={recomendedAnime}/>
      </section>
    </main>
  );
};

export default Page;
