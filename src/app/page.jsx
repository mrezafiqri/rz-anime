import SwipeAnimeList from "@/Components/AnimeLIst";
import AnimeList from "@/Components/AnimeLIst/AnimeList";
import Header from "@/Components/AnimeLIst/Header";
import RecomendedAnime from "@/Components/AnimeLIst/RecomendedAnime";
import Jumbotroon from "@/Components/Jumbotroon";
import { getAnimeRespons, getNestedAnimeResponse, reproduce } from "@/libs/api_libs";

const Page = async () => {

  const comingUpAnime = await getAnimeRespons("seasons/upcoming", "limit=15");
  const topAnime = await getAnimeRespons("top/anime", "limit=14");
  const seasonsNow = await getAnimeRespons("seasons/now", "limit=14");
  let recomendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry");
  recomendedAnime = reproduce(recomendedAnime, 8);
  

  return (
    <main className="w-full px-5 grid grid-cols-1 gap-4 md:px-8 2xl:container 2xl:mx-auto">
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
        <Header title="SHOWING NOW" linkHref="/populer" linkTitle="View All" />
        <SwipeAnimeList api={seasonsNow} />
      </section>
      <section>
        <Header title="RECOMENDED" />
        <RecomendedAnime api={recomendedAnime}/>
      </section>
      <div className="pb-96"></div>
    </main>
  );
};

export default Page;
