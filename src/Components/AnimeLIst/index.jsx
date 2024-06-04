"use client";

import CardAnime from "./CardAnime";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const SwipeAnimeList = ({ api }) => {

  const costumPaginationStyle = {
    "--swiper-pagination-bullet-inactive-color": "#fff",
    "--swiper-pagination-bottom": "0px"
  }

  return (
    <Swiper
      className="mySwiper w-full whitespace-nowrap"
      breakpoints={{
        576: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 6 },
      }}
      spaceBetween={16}
      slidesPerView={3}
      pagination={{
        type: "bullets",
        clickable: true,
      }}
      modules={[Pagination]}
      style={costumPaginationStyle}
    >
      {api?.data.map((anime, index) => {
        return (
          <SwiperSlide
            key={index}
            className="min-w-24 md:min-w-40 lg:min-w-44 pb-6"
          >
            <CardAnime anime={anime} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwipeAnimeList;
