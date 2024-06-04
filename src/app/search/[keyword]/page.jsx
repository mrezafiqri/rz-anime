import AnimeList from "@/Components/AnimeLIst/AnimeList";
import Header from "@/Components/AnimeLIst/Header";
import { getAnimeRespons } from "@/libs/api_libs";

const Page = async ({ params }) => {
  const { keyword } = await params;
  const resultAnime = await getAnimeRespons("anime", `q=${keyword}`);
  const changeKeyword = decodeURI(keyword);
  
  return (
    <article className="w-full px-5 grid grid-cols-1 md:px-8 2xl:container 2xl:mx-auto">
      <section>
        <Header title={`Results Found : ${changeKeyword}`}/>
        <AnimeList api={resultAnime} />
      </section>
    </article>
  );
};

export default Page;
