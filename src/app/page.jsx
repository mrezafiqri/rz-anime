import SwipeAnimeList from "@/Components/AnimeLIst";
import Header from "@/Components/AnimeLIst/Header";
import SkeletonJumbotroon from "@/Components/SkeletonUi/SkeletonJumbotroon";
import SkeletonUiVertikal from "@/Components/SkeletonUi/SkeletonUiVertikal";
import {
  getAnimeRespons,
  getNestedAnimeResponse,
  reproduce,
} from "@/libs/api_libs";
import dynamic from "next/dynamic";

const RecomendedAnime = dynamic(() =>
  import("../Components/AnimeLIst/RecomendedAnime")
);
const Jumbotroon = dynamic(() => import("@/Components/Jumbotroon/index"), {
  loading: () => <SkeletonJumbotroon />,
});
const AnimeList = dynamic(() => import("@/Components/AnimeLIst/AnimeList"), {
  loading: () => <SkeletonUiVertikal amount={15} detailCard={false} />,
  ssr: false,
});

const Page = async () => {
  const comingUpAnime = await getAnimeRespons(
    "seasons/upcoming",
    "sfw&limit=15"
  );
  const topAnime = await getAnimeRespons("top/anime", "sfw&limit=14");
  const seasonsNow = await getAnimeRespons("seasons/now", "sfw&limit=14");
  let recomendedAnime = await getNestedAnimeResponse(
    "recommendations/anime?sfw",
    "entry"
  );
  recomendedAnime = await reproduce(recomendedAnime, 8);

  return (
    <>
      <section className="py-2">
        <Jumbotroon />
      </section>
      <section className="py-2">
        <Header title="UPCOMING" />
        <AnimeList api={comingUpAnime} />
      </section>
      <section className="py-2">
        <Header title="POPULER" linkHref="/populer" linkTitle="View All" />
        <SwipeAnimeList api={topAnime} detailCard={true} />
      </section>
      <section className="py-2">
        <Header title="SHOWING NOW" linkHref="/show-now" linkTitle="View All" />
        <SwipeAnimeList api={seasonsNow} detailCard={true} />
      </section>
      <section className="py-2">
        <Header title="RECOMENDED" />
        <RecomendedAnime api={recomendedAnime} />
      </section>
    </>
  );
};

export default Page;
