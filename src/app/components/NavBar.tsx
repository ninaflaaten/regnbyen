"use client";

import ThemeSwitch from "../ThemeSwitch";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50  py-4 w-full px-6 flex justify-between items-center backdrop-blur">
      <h1 className="text-xl font-semibold">Website</h1>
      <nav className="flex items-center gap-6">
        <a href="#" className="hover:underline">
          Home
        </a>
        <a href="#" className="hover:underline">
          About
        </a>
        <a href="#" className="hover:underline">
          Contact
        </a>
        <ThemeSwitch />
      </nav>
    </header>
  );
}
