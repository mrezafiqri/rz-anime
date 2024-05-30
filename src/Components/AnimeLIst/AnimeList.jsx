import CardAnime from "./CardAnime";

const AnimeList = () => {
  return (
    <article className="my-4 w-full grid grid-cols-2 gap-4 justify-between md:grid-cols-4 lg:grid-cols-6">
      <CardAnime />
      <CardAnime />
      <CardAnime />
      <CardAnime />
      <CardAnime />
      <CardAnime />
    </article>
  );
};

export default AnimeList;
