export const FILTER_TYPE_ANIME = {
  type: ["all", "tv", "movie", "special", "ona", "music", "cm", "pv", "tv_special"],
  filter: ["all", "tv", "movie", "special", "ona", "music"]
}

export const scrollTop = () => {
  scrollTo({
    behavior: "smooth",
    top: 0,
  });
};

export const costumPaginationStyle = {
  "--swiper-pagination-bullet-inactive-color": "#fff",
  "--swiper-pagination-bottom": "0px",
};

export const paramSwiper = {
  breakpoints: {
    576: { slidesPerView: 3 },
    768: { slidesPerView: 4 },
    1024: { slidesPerView: 6 },
  },
  spaceBetween: 16,
  slidesPerView: 3,
  pagination:{
    type: "bullets",
    clickable: true,
  }
}