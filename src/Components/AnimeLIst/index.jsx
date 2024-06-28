"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { costumPaginationStyle, paramSwiper } from "@/libs/utils";
import CardAnime from "./CardAnime";

const SwipeAnimeList = ({ api }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 750);
  }, []);

  const Loading = () => {
    return <p className="text-color-primary h-[300px]">Loading...</p>;
  };

  return (
    <Swiper
      className="mySwiper w-full whitespace-nowrap"
      {...paramSwiper}
      modules={[Pagination]}
      style={costumPaginationStyle}
    >
      {isLoading ? (
        <Loading />
      ) : (
        api?.data?.map((anime, index) => {
          return (
            <SwiperSlide
              key={index}
              className="min-w-24 md:min-w-40 lg:min-w-44 pb-6"
            >
              <CardAnime anime={anime} />
            </SwiperSlide>
          );
        })
      )}
    </Swiper>
  );
};

export default SwipeAnimeList;
