const SkeletonUiHorizontal = ({ amount }) => {
  return (
    <>
      {Array(amount)
        .fill(0)
        .map((_, index) => {
          return (
            <section
              key={index}
              className="animate-pulse w-full h-full flex flex-nowrap gap-x-4 p-2 bg-color-secondary/30 rounded-lg"
            >
              <div className="bg-color-secondary/30 w-[90px] h-[90px] rounded-lg" />
              <span className="w-full flex flex-col justify-center gap-y-4">
                <div className="bg-color-secondary/30 rounded-lg h-3 w-3/4" />
                <div className="bg-color-secondary/30 rounded-lg h-2 w-1/2" />
              </span>
            </section>
          );
        })}
    </>
  );
};

export default SkeletonUiHorizontal;
