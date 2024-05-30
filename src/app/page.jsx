import SwipeAnimeList from "@/Components/AnimeLIst";
import Header from "@/Components/AnimeLIst/Header";
import Jumbotroon from "@/Components/Jumbotroon";
import { getAnimeRespons } from "@/libs/api_libs";

const Page = async () => {
  const topAnime = await getAnimeRespons("top/anime", "limit=12");

  return (
    <main className="w-full px-5 md:px-8 2xl:container 2xl:mx-auto">
      <section>
        <Jumbotroon />
      </section>
      <section>
        <Header title="Top Anime" linkHref="/" linkTitle="See all" />
        <SwipeAnimeList api={topAnime} />
      </section>
      <div className="pb-96"></div>
    </main>
  );
};

export default Page;
