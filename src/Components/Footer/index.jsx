import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-color-black/0">
      <div className="flex items-center justify-start py-4 gap-x-1 text-color-primary/80 text-xs hover:text-color-primary transition-colors duration-300">
        <p className="font-light">Copyright by</p>{" "}
        <Link href="https://www.instagram.com/mrezafiqri/" target="_blank" className="underline">mrezafiqri</Link>
      </div>
    </footer>
  );
};

export default Footer;
