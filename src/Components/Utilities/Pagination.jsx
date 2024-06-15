"use client";
import {
  CaretDoubleLeft,
  CaretDoubleRight,
  CaretLeft,
  CaretRight,
} from "@phosphor-icons/react";

const Pagination = ({ page, setPage, lastPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handlerPrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  const handlerNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  const handlerFirstPage = () => {
    setPage(1);
    scrollTop();
  };
  const handlerLastPage = () => {
    setPage(lastPage);
    scrollTop();
  };
  return (
    <div className="flex items-center justify-between border-t border-color-primary/20 py-3">
      <div className="flex flex-1 gap-2 justify-center items-center">
        <button
          onClick={handlerFirstPage}
          className={`relative inline-flex items-center rounded-md text-color-black bg-color-primary border border-color-primary/20 p-2 hover:bg-color-primary/90 hover:border-color-black transition duration-150 ${
            page > 1 ? "visible" : "invisible"
          }`}
        >
          <CaretDoubleLeft weight="bold" />
        </button>
        <button
          onClick={handlerPrevPage}
          className={`relative inline-flex items-center rounded-md text-color-black bg-color-primary border border-color-primary/20 p-2 hover:bg-color-primary/90 hover:border-color-black transition duration-150 ${
            page > 1 ? "visible" : "invisible"
          }`}
        >
          <CaretLeft weight="bold" />
        </button>
        <div>
          <p className="text-xs md:text-sm text-color-primary">
            Page <span className="font-medium">{page || 0}</span> of{" "}
            <span className="font-medium">{lastPage || 0}</span> Result
          </p>
        </div>
        <button
          onClick={handlerNextPage}
          className={`relative inline-flex items-center rounded-md text-color-black bg-color-primary border border-color-primary/20 p-2 hover:bg-color-primary/90 hover:border-color-black transition duration-150 ${
            page !== lastPage ? "visible" : "invisible"
          }`}
        >
          <CaretRight weight="bold" />
        </button>
        <button
          onClick={handlerLastPage}
          className={`relative inline-flex items-center rounded-md text-color-black bg-color-primary border border-color-primary/20 p-2 hover:bg-color-primary/90 hover:border-color-black transition duration-150 ${
            page !== lastPage ? "visible" : "invisible"
          }`}
        >
          <CaretDoubleRight weight="bold" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
