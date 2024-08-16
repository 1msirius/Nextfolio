import React from "react";
import Image from "next/image";
import { CaptionComponent as Caption } from "app/components/caption";

export const metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Research() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">Photos</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <Image
          src="/photos/ai-art.jpg"
          alt=" Théâtre D'Opéra Spatial"
          unoptimized
          width={640}
          height={500}
          priority
        />
      </div>
      <Caption>
        <a href="https://en.wikipedia.org/wiki/Th%C3%A9%C3%A2tre_D%27op%C3%A9ra_Spatial">
          Théâtre D'Opéra Spatial
        </a>
        : An AI artwork created with Midjourney.
      </Caption>
    </section>
  );
}
