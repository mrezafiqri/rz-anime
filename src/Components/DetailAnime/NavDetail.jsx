"use client";

import { useRouter } from "next/navigation";

const NavDetail = () => {
  const router = useRouter();

  return (
    <header className="w-full p-2 mt-2 mb-4 lg:mt-4 lg:mb-8 rounded-md flex justify-between items-center text-color-primary bg-blur-dark">
      <div className="flex justify-start items-center font-semibold text-lg gap-2 md:text-xl">
        <span className="text-color-accent font-bold">|</span>
        <h1 className="capitalize">Detail Anime</h1>
      </div>
      <div>
        <button
          onClick={() => router.back()}
          className="bg-color-accent backdrop-blur-md border border-color-white/10 bg-gradient-to-r from-color-white/10 to-color-black/20 hover:bg-color-accent/50 rounded-md py-1 px-3 text-sm md:text-base"
        >
          Back
        </button>
      </div>
    </header>
  );
};

export default NavDetail;
