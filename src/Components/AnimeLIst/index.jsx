import CardAnime from "./CardAnime";

const SwipeAnimeList = ({ api }) => {
  return (
    <article className="my-4 w-full grid grid-cols-2 gap-4 justify-between md:grid-cols-4 lg:grid-cols-6">
      {api?.data.map((anime, index) => {
        return <CardAnime key={index} anime={anime} />;
      })}
    </article>
  );
};

export default SwipeAnimeList;
