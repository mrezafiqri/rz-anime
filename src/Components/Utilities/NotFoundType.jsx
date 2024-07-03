const NotFoundType = ({ animePage, typeText }) => {
  return (
    <section className="w-full h-[50vh] md:h-[60vh] flex flex-col items-center justify-center gap-y-2">
      <h2 className="text-color-primary text-center capitalize font-semibold text-base md:text-xl">
        Result {animePage} for {typeText}
      </h2>
      <h1 className="text-color-accent italic font-semibold text-2xl md:text-4xl">
        Not Found...
      </h1>
    </section>
  );
};

export default NotFoundType;
