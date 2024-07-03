"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { costumPaginationStyle, paramSwiper } from "@/libs/utils";
import { useWindowSize } from "@uidotdev/usehooks";
import SkeletonUiVertikal from "../SkeletonUi/SkeletonUiVertikal";
import CardAnime from "./CardAnime";

const SwipeAnimeList = ({ api, detailCard }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [amount, setAmount] = useState(5);
  const size = useWindowSize();

  useEffect(() => {
    if (size.width < 768) {
      setAmount(3);
    } else if (size.width >= 768 && size.width < 1024) {
      setAmount(4);
    } else if (size.width >= 1024) {
      setAmount(6);
    }
  }, [size.width, amount]);

  useEffect(() => {
    if (api.data === undefined) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [api]);

  return (
    <Swiper
      className="mySwiper w-full whitespace-nowrap"
      {...paramSwiper}
      modules={[Pagination]}
      style={costumPaginationStyle}
    >
      {isLoading ? (
        <div className="flex flex-row gap-x-4 overflow-hidden">
          <SkeletonUiVertikal amount={amount} detailCard={detailCard} />
        </div>
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
