import Image from "next/image";

const CharactersAnime = ({ resultCharacter }) => {
  return (
    <article className="my-2 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-between items-center gap-2">
      {resultCharacter?.map((chcAnime, index) => {
        return (
          <div
            key={index}
            className="flex gap-x-2 items-center bg-blur-hover rounded-md overflow-hidden"
          >
            <div className="h-[75px] w-[48px] bg-color-secondary/30">
              <Image
                className="object-cover object-center bg-color-secondary/30 w-auto h-auto"
                src={chcAnime?.character?.images.webp.image_url}
                alt={`Image ${chcAnime?.character?.name}`}
                width={40}
                height={40}
                loading="lazy"
              />
            </div>
            <span className="grid items-center">
              <h1 className="text-color-primary text-wrap font-semibold line-clamp-2 text-sm md:text-base">
                {chcAnime?.character?.name}
              </h1>
              <p className="text-color-white/60 text-xs">{chcAnime?.role}</p>
            </span>
          </div>
        );
      })}
    </article>
  );
};

export default CharactersAnime;
