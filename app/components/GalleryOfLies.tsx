"use client";

import { useState } from "react";
import lies from "@/lib/data/lies.json";

interface Lie {
  statement: string;
  cluster: string;
}

interface GalleryProps {
  prompt?: string;
  mode?: "inline" | "gallery";
}

export default function GalleryOfLies({ prompt = "Lie to me", mode = "inline" }: GalleryProps) {
  const [lie, setLie] = useState<Lie | null>(null);

  const getRandomLie = () => {
    const random = lies[Math.floor(Math.random() * lies.length)];
    setLie(random);
  };

  if (mode === "gallery") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {lies.map((lie, index) => (
          <div
            key={index}
            className="italic text-zinc-800 bg-white p-4 shadow-md rounded-xl hover:rotate-[-0.5deg] transition-transform"
          >
            “{lie.statement}”
          </div>
        ))}
      </div>
    );
  }

  // Inline mode
  return (
    <div className="flex flex-col items-start">
      <div className="flex items-center gap-2">
        <span>Want the full manifesto?</span>
        <button
          onClick={getRandomLie}
          className="text-blue-600 underline hover:text-blue-800 text-sm"
        >
          {lie ? "Tell me another" : prompt}
        </button>
      </div>

      <div className="mt-2 min-h-[1.5rem] text-base italic text-zinc-800">
        {lie && `“${lie.statement}”`}
      </div>
    </div>
  );
}
