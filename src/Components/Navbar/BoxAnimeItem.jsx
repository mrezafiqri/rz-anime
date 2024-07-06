import Image from "next/image";
import Link from "next/link";

const BoxAnimeItem = ({ api, handlerReset }) => {
  return (
    <>
      {api.data?.map((anime, index) => {
        return (
          <Link
            onClick={handlerReset}
            href={`/anime/${anime?.mal_id}`}
            key={index}
            className="text-color-primary flex justify-start gap-2 p-2 flex-nowrap bg-blur-dark bg-color-black hover:bg-color-dark"
          >
            <div className="aspect-3/4 w-[90px] h-full overflow-hidden rounded bg-color-secondary/30">
              <Image
                className="aspect-3/4 w-auto object-cover object-center bg-color-secondary "
                src={anime?.images.webp.image_url}
                alt={`Image ${anime?.title}`}
                width={90}
                height={90}
                quality={60}
              />
            </div>
            <span className="grid justify-start items-center w-full">
              <h1 className="line-clamp-2">{anime?.title}</h1>
            </span>
          </Link>
        );
      })}
    </>
  );
};

export default BoxAnimeItem;
