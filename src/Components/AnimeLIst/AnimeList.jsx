import CardAnime from "./CardAnime";

const AnimeList = ({ api }) => {
  return (
    <article className="my-4 w-full grid grid-cols-2 gap-6 justify-between md:grid-cols-4 lg:grid-cols-5">
      {api?.data.map((anime, index) => {
        return (
          <CardAnime anime={anime} key={index}/>
        )
      })}
    </article>
  );
};

export default AnimeList;
