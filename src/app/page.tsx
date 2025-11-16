"use client";

import { useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Post from "./components/Post";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="sticky top-0 z-50 w-full">
        <NavBar />
      </div>

      <div className="text-5xl w-[1000] -ml-5 font-serif pb-10">
        Raincoat Realities: The Honest Truth About Living in a Perpetually Damp City
      </div>

       <div className="text-xl w-[1000] -ml-5 font-serif">
        Nov 16 • By Nina Flaaten
      </div>

      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />

      {/* Ønskeliste */}
      <section className="flex flex-col gap-6 px-4 sm:px-6 md:px-8 mt-6 w-full lg:w-[800px] mx-auto">
        {" "}
      </section>
      <Footer />
    </main>
  );
}
