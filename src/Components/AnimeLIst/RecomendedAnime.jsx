import Image from "next/image";
import Link from "next/link";

const RecomendedAnime = ({ api }) => {
  return (
    <article className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between items-center gap-4 mb-8">
      {api?.data.map((anime, index) => {
        return (
          <Link
            href={`/anime/${anime?.mal_id}`}
            key={index}
            className="rounded-md overflow-hidden p-2 bg-blur-hover"
          >
            <div className="flex gap-2 md:gap-4 items-center">
              <Image
                className="aspect-3/4 w-auto object-cover object-center bg-color-secondary rounded lg:min-w-[60px] lg:h-[80px] lg:aspect-auto"
                src={anime?.images.webp.image_url}
                alt={`Image ${anime?.title}`}
                width={50}
                height={50}
                quality={65}
                loading="lazy"
              />
              <span className="grid items-center">
                <h1 className="text-color-primary font-semibold line-clamp-2 text-sm lg:text-lg">
                  {anime?.title}
                </h1>
                <p className="text-color-white/60 text-xs py-1">
                  Click for Details
                </p>
              </span>
            </div>
          </Link>
        );
      })}
    </article>
  );
};

export default RecomendedAnime;
