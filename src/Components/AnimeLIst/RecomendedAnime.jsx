import Image from "next/image";
import Link from "next/link";

const RecomendedAnime = ({ api }) => {
  return (
    <article className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between items-center gap-4">
      {api?.data.map((anime, index) => {
        return (
          <Link href={"/"} key={index} className="rounded-md overflow-hidden p-2 bg-blur-hover">
            <div className="flex gap-2 md:gap-4 items-center">
              <Image
                className="aspect-3/4 object-cover object-centerbg-color-secondary rounded lg:w-[80px] lg:h-[110px]"
                src={anime.images.webp.image_url}
                alt={`Image ${anime.title}`}
                width={50}
                height={50}
                loading="lazy"
              />
              <h1 className="text-color-primary line-clamp-2 text-sm md:text-base lg:text-lg">{anime.title}</h1>
            </div>
          </Link>
        );
      })}
    </article>
  );
};

export default RecomendedAnime;
