const TextItem = ({ textAnime, dataAnime }) => {
  return (
    <span className="flex gap-x-8 w-full text-base md:text-lg lg:text-base">
      <p className="w-2/6 md:w-1/4 font-semibold">{textAnime}</p>
      <p className="w-4/6 md:w-3/4 text-color-primary/70">{dataAnime}</p>
    </span>
  );
};

export default TextItem;
