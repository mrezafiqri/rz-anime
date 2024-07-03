const SkeletonJumbotroon = () => {
  return (
    <div className="w-full h-[50vh] max-h-full bg-color-secondary/30 animate-pulse grid grid-cols-1 items-center justify-between md:h-[60vh] lg:h-[85vh]">
      <section className="w-3/4 grid grid-cols-1 items-center gap-y-4 md:w-1/2 md:gap-y-8 lg:w-2/5 lg:gap-y-6">
        {/* TItles group */}
        <div className="grid grid-cols-1 gap-y-2 w-full md:gap-y-4 lg:gap-y-3">
          <span className="bg-color-secondary rounded-full h-5 md:h-10" />
          <span className="bg-color-secondary rounded-full w-1/2 h-5 md:h-10" />
        </div>

        {/* Genres group */}
        <div className="grid grid-cols-3 gap-x-2 w-full">
          <span className="bg-color-secondary rounded-full h-3 md:h-8" />
          <span className="bg-color-secondary rounded-full h-3 md:h-8" />
          <span className="bg-color-secondary rounded-full h-3 md:h-8" />
        </div>

        {/* Synopsis group */}
        <div className="bg-color-secondary/30 rounded-r-lg w-full h-auto p-4 grid grid-cols-1 gap-y-2 items-center md:gap-y-4 lg:gap-y-3">
          <span className="bg-color-secondary/30 rounded-full h-2 md:h-5" />
          <span className="bg-color-secondary/30 rounded-full h-2 md:h-5" />
          <span className="bg-color-secondary/30 rounded-full h-2 md:h-5" />
        </div>

        {/* Buttons group */}
        <div className="grid grid-cols-2 gap-x-2 w-full">
          <span className="bg-color-secondary rounded-full h-3 md:h-8" />
          <span className="bg-color-secondary rounded-full h-3 md:h-8" />
        </div>
      </section>
    </div>
  );
};

export default SkeletonJumbotroon;
