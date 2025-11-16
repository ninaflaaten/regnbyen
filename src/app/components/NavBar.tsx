"use client";

import ThemeSwitch from "../ThemeSwitch";
import { getTodayDate } from "./Date";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "900",
});

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 py-4 w-full px-6 flex justify-between items-center backdrop-blur mb-25">
      <span className="text-sm">{getTodayDate()}</span>
      <h1
        className={`${playfair.className} text-3xl tracking-tight uppercase absolute left-1/2 transform -translate-x-1/2`}
      >
        Bergen
      </h1>

      <nav className="flex items-center gap-6 ml-auto font-serif">
        <a href="#Footer" className="hover:underline">
          About
        </a>
        <a href="https://www.google.com/search?q=go+to+bergen" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Bergen
        </a>
        <a href="#" className="hover:underline">
          Contact
        </a>
        <ThemeSwitch />
      </nav>
    </header>
  );
}