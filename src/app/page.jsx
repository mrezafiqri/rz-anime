import SwipeAnimeList from "@/Components/AnimeLIst";
import AnimeList from "@/Components/AnimeLIst/AnimeList";
import Header from "@/Components/AnimeLIst/Header";
import Jumbotroon from "@/Components/Jumbotroon";
import { getAnimeRespons } from "@/libs/api_libs";

const Page = async () => {
  const comingUpAnime = await getAnimeRespons("seasons/upcoming", "limit=10");
  const topAnime = await getAnimeRespons("top/anime", "limit=12");

  return (
    <main className="w-full px-5 grid grid-cols-1 md:px-8 2xl:container 2xl:mx-auto">
      <section>
        <Jumbotroon />
      </section>
      <section>
        <Header title="UPCOMING" />
        <AnimeList api={comingUpAnime} />
      </section>
      <section>
        <Header title="TOP ANIME" linkHref="/populer" linkTitle="See all" />
        <SwipeAnimeList api={topAnime} />
      </section>
      <div className="pb-96"></div>
    </main>
  );
};

export default Page;
