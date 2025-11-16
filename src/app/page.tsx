"use client";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="sticky top-0 z-50 w-full">
        <NavBar />
      </div>

      <div className="text-5xl w-[1000px] font-serif pb-10 mx-auto">
        Raincoat Realities: The Honest Truth About Living in a Perpetually Damp
        City
      </div>

      <div className="text-xl w-[1000px] font-serif mx-auto">
        Nov 16 • By Nina Flaaten
      </div>

      <div className="w-[1000px] mx-auto">
        <Gallery />
      </div>

      <Footer />
    </main>
  );
}
