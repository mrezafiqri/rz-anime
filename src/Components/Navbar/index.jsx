import Link from "next/link";
import InputSearch from "./InputSearch"

const Navbar = () => {
  return (
    <header className="w-full py-4 px-5 md:px-8 flex flex-col gap-2 sm:justify-between sm:items-center sm:flex-row">
      <Link
        href="/"
        className="text-color-accent font-bold text-3xl italic hover:text-color-accent/80 transition-all duration-300"
      >
        ZED Anime
      </Link>
      <InputSearch />
    </header>
  );
};

export default Navbar;
