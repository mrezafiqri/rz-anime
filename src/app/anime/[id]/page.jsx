import DetailAnime from "@/Components/DetailAnime";
import {
  
  getAnimeResponse,
  getFilteredAnime,
  getObjectNestedAnime,
} from "@/libs/api_libs";

export const metadata = {
  title: "Detail Anime",
};

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const airedAnime = await getObjectNestedAnime(anime.data?.aired.prop.from);
  const characterAnime = await getFilteredAnime(
    `anime/${id}/characters`,
    "role",
    "Main"
  );

  return (
    <>
      <DetailAnime
        api={anime}
        airedAnime={airedAnime}
        resultCharacter={characterAnime}
      />
    </>
  );
};

export default Page;
