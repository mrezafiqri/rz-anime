import { YoutubeLogo } from "@phosphor-icons/react";
import Link from "next/link";

const HeaderDetail = ({ api }) => {
  return (
    <header>
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
        {api?.data.title}
      </h1>
      <p className="text-color-primary/60 text-base md:text-lg lg:text-base pb-1">
        {api?.data.genres.map((genre) => genre.name).join(", ")}.
      </p>
      <p className="text-color-primary/60 text-sm md:text-base lg:text-sm pb-1">
        {api?.data.rating}
      </p>
      {api?.data.trailer.url && (
        <Link
          href={api?.data.trailer.url}
          target="_blank"
          className="link-blur-group px-2 py-1 rounded w-3/4 md:w-1/2 lg:w-1/4 bg-color-red hover:bg-color-red/50 transition-all duration-75 "
        >
          <YoutubeLogo className="text-lg md:text-2xl" weight="bold" />
          <p>Watch Trailer</p>
        </Link>
      )}
    </header>
  );
};

export default HeaderDetail;
