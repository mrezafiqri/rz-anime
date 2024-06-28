const TypeAnime = ({ setTypeAnime, handlerTitle, setPage, initialType }) => {

  const handleType = (idx) => {
    setPage(1);
    if (initialType[idx] === "all") {
      setTypeAnime("all");
      handlerTitle("")
      return;
    }
    setTypeAnime(initialType[idx]);
    handlerTitle(initialType[idx])
  };

  return (
    <article className="flex flex-wrap justify-center gap-2 my-2">
      {initialType.map((type, index) => {
        return (
          <button
            key={index}
            onClick={() => handleType(index)}
            className="capitalize px-2 py-1 text-color-primary rounded-md link-blur-group shadow shadow-color-black font-medium bg-color-accent hover:bg-color-accent/50"
          >
            {type}
          </button>
        );
      })}
    </article>
  );
};

export default TypeAnime;
