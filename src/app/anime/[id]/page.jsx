import DetailAnime from "@/Components/DetailAnime";
import { getAnimeRespons, getFilteredAnime, getObjectNestedAnime } from "@/libs/api_libs";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeRespons(`anime/${id}`);
  const airedAnime = await getObjectNestedAnime(anime.data?.aired.prop.from);
  const characterAnime = await getFilteredAnime(`anime/${id}/characters`, "role", "Main");
  
  return (
    <article className="w-full px-5 py-4 grid grid-cols-1 gap-2 md:px-8 2xl:container 2xl:mx-auto">
      <DetailAnime api={anime} airedAnime={airedAnime} resultCharacter={characterAnime} />
    </article>
  );
};

export default Page;
