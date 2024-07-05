import AnimeList from "@/Components/AnimeLIst/AnimeList";
import Header from "@/Components/AnimeLIst/Header";
import { getAnimeResponse } from "@/libs/api_libs";

export const generateMetadata = async ({ params }) => {
  const { keyword } = await params;
  const keywordAnime = decodeURI(keyword);
  const firstUpperCase =
    keywordAnime[0].toUpperCase() + keywordAnime.substring(1);

  return {
    title: `Searched ${firstUpperCase}`,
  };
};

const Page = async ({ params }) => {
  const { keyword } = await params;
  const resultAnime = await getAnimeResponse("anime", `sfw&q=${keyword}`);
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
          <AnimeList api={resultAnime} amount={25} detailCard={true} />
        </>
      );
    }
  };

  return <ValidateResultAnime />;
};

export default Page;
