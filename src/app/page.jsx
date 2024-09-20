import SwipeAnimeList from "@/Components/AnimeLIst";
import Header from "@/Components/AnimeLIst/Header";
import Footer from "@/Components/Footer";
import SkeletonJumbotroon from "@/Components/SkeletonUi/SkeletonJumbotroon";
import SkeletonUiVertikal from "@/Components/SkeletonUi/SkeletonUiVertikal";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "@/libs/api_libs";
import dynamic from "next/dynamic";

const Jumbotroon = dynamic(() => import("@/Components/Jumbotroon/index"), {
  loading: () => <SkeletonJumbotroon />,
});
const AnimeList = dynamic(() => import("@/Components/AnimeLIst/AnimeList"), {
  loading: () => <SkeletonUiVertikal amount={15} detailCard={false} />,
});
const RecomendedAnime = dynamic(
  () => import("@/Components/AnimeLIst/RecomendedAnime"),
  {
    ssr: false,
  }
);

const Page = async () => {
  const comingUpAnime = await getAnimeResponse(
    "seasons/upcoming",
    "sfw&limit=15"
  );
  const topAnime = await getAnimeResponse("top/anime", "sfw&limit=14");
  const seasonsNow = await getAnimeResponse("seasons/now", "sfw&limit=14");
  const nestedRecomendedAnime = await getNestedAnimeResponse(
    "recommendations/anime?sfw",
    "entry"
  );
  const recomendedAnime = reproduce(nestedRecomendedAnime, 8);

  return (
    <>
      <section className="py-2">
        <Jumbotroon />
      </section>
      <section className="py-2">
        <Header title="UPCOMING" />
        <AnimeList api={comingUpAnime} amount detailCard />
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
      <section>
        <Footer />
      </section>
    </>
  );
};

export default Page;
