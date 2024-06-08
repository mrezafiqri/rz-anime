import { getAnimeRespons, getObjectNestedAnime } from "@/libs/api_libs";
import { Star } from "@phosphor-icons/react/dist/ssr/Star";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeRespons(`anime/${id}`);
  const airedAnime = await getObjectNestedAnime(anime?.data.aired.prop.from);

  return (
    <article className="w-full px-5 py-4 grid grid-cols-1 gap-2 md:px-8 2xl:container 2xl:mx-auto text-color-primary">
      <section className="flex items-start gap-x-4 md:gap-x-8 relative">
        <Image
          className="aspect-3/4 object-cover object-center rounded-lg bg-color-secondary w-[120px] md:min-w-[250px] md:h-auto lg:w-[400px]"
          src={anime?.data.images.webp.large_image_url}
          alt=""
          width={350}
          height={350}
          loading="lazy"
        />
        <div className="grid gap-1 w-full">
          <header>
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
              {anime?.data.title}
            </h1>
            <p className="text-color-primary/60 text-base md:text-lg lg:text-base pb-1">
              {anime?.data.genres.map((genre) => genre.name).join(", ")}.
            </p>
            <p className="text-color-primary/60 text-sm md:text-base lg:text-sm pb-1">
              {anime?.data.rating}
            </p>
          </header>

          <hr className="my-1 text-color-primary/20" />

          <article className="w-full absolute top-[105%] inset-x-0 md:sticky">
            <div className="w-full md:w-2/4">
              <span className="flex gap-x-8 w-full text-base md:text-lg lg:text-base">
                <p className="w-1/5 font-semibold">Type:</p>
                <p className="w-4/5 text-color-primary/70">{anime?.data.type}</p>
              </span>
              <span className="flex gap-x-8 w-full text-base md:text-lg lg:text-base">
                <p className="w-1/5 font-semibold">Status:</p>
                <p className="w-4/5 text-color-primary/70">
                  {anime?.data.status}
                </p>
              </span>
              <span className="flex gap-x-8 w-full text-base md:text-lg lg:text-base">
                <p className="w-1/5 font-semibold">Release:</p>
                <p className="w-4/5 text-color-primary/70">
                  {airedAnime.join("-")}
                </p>
              </span>
              <span className="flex gap-x-8 w-full text-base md:text-lg lg:text-base">
                <p className="w-1/5 font-semibold">Score:</p>
                <p className="w-4/5 text-color-primary/70 flex items-center gap-1">
                  <Star weight="fill" color="#d8bd0e" />
                  {anime?.data.score}
                </p>
              </span>
            </div>

            <hr className="my-1 text-color-primary/20" />
            
            <h2 className="text-color-white font-semibold text-xl md:text-2xl ">
              Synopsis
            </h2>
            <p className="text-justify font-light text-base md:text-lg lg:text-base ">{anime?.data.synopsis}.</p>
          </article>
        </div>
      </section>
    </article>
  );
};

export default Page;
