import AnimeList from "@/Components/AnimeLIst/AnimeList";
import Header from "@/Components/AnimeLIst/Header";
import { getAnimeRespons } from "@/libs/api_libs";

const Page = async ({ params }) => {
  const { keyword } = await params;
  const resultAnime = await getAnimeRespons("anime", `sfw&q=${keyword}`);
  const changeKeyword = decodeURI(keyword);

  const ValidateResultAnime = () => {
    if (resultAnime.data?.length === 0) {
      return (
        <>
          <Header
            title={`Results Not-Found : ${changeKeyword}`}
            linkHref={"/"}
            linkTitle={"Back to home"}
          />
          <article className="min-h-[80vh] w-full flex flex-col justify-center items-center">
            <h1 className="text-color-accent text-2xl font-bold uppercase">
              {`Results ${changeKeyword} not found`}
            </h1>
            <p className="text-color-primary">Please back to home...</p>
          </article>
        </>
      );
    } else {
      return (
        <>
          <Header title={`Results Found : ${changeKeyword}`} />
          <AnimeList api={resultAnime} />
        </>
      );
    }
  };

  return (
    <article className="w-full px-5 grid grid-cols-1 md:px-8 2xl:container 2xl:mx-auto">
      <ValidateResultAnime />
    </article>
  );
};

export default Page;
