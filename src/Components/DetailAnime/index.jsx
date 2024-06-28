"use client";
import Image from "next/image";

import BodyDetail from "./BodyDetail";
import HeaderDetail from "./HeaderDetail";
import { useEffect, useState } from "react";
import { scrollTop } from "@/libs/utils";

const DetailAnime = ({ api, airedAnime, resultCharacter }) => {
  const [readMore, setReadMore] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const lengthSynopsis = api?.data.synopsis.length;

  useEffect(() => {
    scrollTop();
  }, [api]);

  useEffect(() => {
    lengthSynopsis > 100 ? setShowButton(true) : setShowButton(false);
  }, [lengthSynopsis]);

  const handlerReadMore = () => {
    setReadMore(!readMore);
    scrollTop();
  };

  const detailAnime = {
    api: api,
    airedAnime: airedAnime,
    resultCharacter: resultCharacter,
    readMore: readMore,
    showButton: showButton,
    handlerReadMore: handlerReadMore,
  };

  return (
    <>
      <section className="flex items-start gap-x-4 md:gap-x-8 relative  text-color-primary">
        <Image
          className="aspect-3/4 object-cover object-center rounded-lg bg-color-secondary w-[120px] md:min-w-[250px] md:h-auto lg:w-[400px]"
          src={api?.data.images.webp.large_image_url}
          alt={`Image ${api?.data.title}`}
          width={350}
          height={350}
          quality={75}
          priority="true"
        />
        <div className="grid gap-1 w-full">
          <HeaderDetail api={api} />
          <hr className="my-1 text-color-primary/20" />
          <BodyDetail detailAnime={detailAnime} />
        </div>
      </section>
    </>
  );
};

export default DetailAnime;
