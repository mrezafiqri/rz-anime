import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import ProgressBar from "@/Components/ProgressBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Anime List | RZ-Anime",
    template: "%s | RZ-Anime",
  },
  description: "Website Anime Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-color-dark`}>
        <ProgressBar>
          <Navbar />
          <main className="w-full px-5 grid grid-cols-1 md:px-8 2xl:container 2xl:mx-auto">
            {children}
          </main>
        </ProgressBar>
      </body>
    </html>
  );
}
