"use client";

import { useState } from "react";
import lies from "@/lib/data/lies.json";

interface Lie {
  statement: string;
  cluster: string;
}

// We accept an optional prop for the button text
export default function GalleryOfLies({ prompt = "Lie to me" }: { prompt?: string }) {
  const [lie, setLie] = useState<Lie | null>(null);

  const getRandomLie = () => {
    const random = lies[Math.floor(Math.random() * lies.length)];
    setLie(random);
  };

  return (
    <div className="flex flex-col items-start">
      {/* The top row: question + button */}
      <div className="flex items-center gap-2">
        <span>Want the full manifesto?</span>
        <button
          onClick={getRandomLie}
          className="text-blue-600 underline hover:text-blue-800 text-sm"
        >
          {lie ? "Tell me another" : prompt}
        </button>
      </div>

      {/* Below row: the lie. We fix min-h so it doesn't jerk the layout when empty. */}
      <div className="mt-2 min-h-[1.5rem] text-base italic text-zinc-800">
        {lie && `“${lie.statement}”`}
      </div>
    </div>
  );
}
