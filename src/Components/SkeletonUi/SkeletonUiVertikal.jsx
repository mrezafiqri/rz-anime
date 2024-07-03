const SkeletonUiVertikal = ({ amount, detailCard }) => {
  return (
    <article className="my-4 w-full grid grid-cols-3 gap-6 justify-between md:grid-cols-5">
      {Array(amount)
        .fill(0)
        .map((_, index) => {
          return (
            <section key={index} className="animate-pulse w-full grid gap-y-2">
              <div className="bg-color-secondary/30 aspect-3/4 rounded-lg" />
              <div className="bg-color-secondary/30 rounded-full h-2 w-3/4 md:h-3" />
              {detailCard && (
                <span className="flex justify-between w-full">
                  <div className="bg-color-secondary/30 rounded-full h-2 w-1/4" />
                  <div className="bg-color-secondary/30 rounded-full h-2 w-1/4" />
                </span>
              )}
            </section>
          );
        })}
    </article>
  );
};

export default SkeletonUiVertikal;
