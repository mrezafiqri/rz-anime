"use client";

import {
  CaretDoubleLeft,
  CaretDoubleRight,
  CaretLeft,
  CaretRight,
} from "@phosphor-icons/react";

const Pagination = ({ page, setPage, lastPage }) => {
  return (
    <div className="flex items-center justify-between border-t border-color-primary/20 py-3">
      <div className="flex flex-1 gap-2 justify-center items-center">
        <button
          onClick={() => setPage(1)}
          aria-label="First page button"
          className={`relative inline-flex items-center rounded-md text-color-black bg-color-primary border border-color-primary/20 p-2 hover:bg-color-primary/90 hover:border-color-black transition duration-150 ${
            page > 1 ? "visible" : "invisible"
          }`}
        >
          <CaretDoubleLeft weight="bold" />
        </button>
        <button
          onClick={() => setPage((prevState) => prevState - 1)}
          aria-label="Previous button"
          className={`relative inline-flex items-center rounded-md text-color-black bg-color-primary border border-color-primary/20 p-2 hover:bg-color-primary/90 hover:border-color-black transition duration-150 ${
            page > 1 ? "visible" : "invisible"
          }`}
        >
          <CaretLeft weight="bold" />
        </button>
        <div>
          <p className="text-xs md:text-sm text-color-primary text-center">
            Page <span className="font-medium">{page || 1}</span> of{" "}
            <span className="font-medium">{lastPage || 1}</span> Result
          </p>
        </div>
        <button
          onClick={() => setPage((prevState) => prevState + 1)}
          aria-label="Next button"
          className={`relative inline-flex items-center rounded-md text-color-black bg-color-primary border border-color-primary/20 p-2 hover:bg-color-primary/90 hover:border-color-black transition duration-150 ${
            page !== lastPage ? "visible" : "invisible"
          }`}
        >
          <CaretRight weight="bold" />
        </button>
        <button
          onClick={() => setPage(lastPage)}
          aria-label="Last page button"
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
