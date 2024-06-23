"use client";

import { FileSearch } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <div className="min-h-[80vh] w-full flex flex-col justify-center items-center gap-2">
      <FileSearch size={40} className="text-color-accent" />
      <h1 className="text-color-accent text-2xl font-bold">
        NOT FOUND PAGE...
      </h1>
      <button
        onClick={() => router.back()}
        className="underline text-color-primary hover:text-color-accent transition-all"
      >
        Back to page
      </button>
    </div>
  );
};

export default Page;
