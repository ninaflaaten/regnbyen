"use client";

import { useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="sticky top-0 z-50 w-full">
        <NavBar />
      </div>

      <div className="text-5xl w-[1000] font-serif pb-10">
        Raincoat Realities: The Honest Truth About Living in a Perpetually Damp
        City
      </div>

      <div className="text-xl w-[1000] font-serif">
        Nov 16 • By Nina Flaaten
      </div>

      <Gallery />

      <Footer />
    </main>
  );
}
