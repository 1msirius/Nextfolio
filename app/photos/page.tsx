import React from "react";
import Image from "next/image";

export const metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Research() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">Photos</h1>
      <div className="grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-8">
        <div className="relative h-40">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://unsplash.com/photos/brown-concrete-building-under-blue-sky-during-daytime-3cyBR1rIJmA?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash"
          >
            <Image
              alt="Colosseum"
              src="/photos/photo6.jpg"
              fill
              sizes="(max-width: 768px) 213px, 33vw"
              priority
              className="rounded-lg object-cover"
            />
          </a>
        </div>
        <div className="relative sm:row-span-2 row-span-1">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://unsplash.com/photos/taj-mahal-india-IPlPkWPJ2fo"
          >
            <Image
              alt="Taj Mahal"
              src="/photos/photo5.jpg"
              fill
              sizes="(max-width: 768px) 213px, 33vw"
              priority
              className="rounded-lg object-cover"
            />
          </a>
        </div>
        <div className="relative">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://unsplash.com/photos/a-view-of-the-inside-of-a-building-through-a-circular-window-Tp-3hrx88J4"
          >
            <Image
              alt="Sacré-Cœur Basilica"
              src="/photos/photo3.jpg"
              fill
              sizes="(max-width: 768px) 213px, 33vw"
              priority
              className="rounded-lg object-cover"
            />
          </a>
        </div>
        <div className="relative row-span-2">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://unsplash.com/photos/the-eiffel-tower-towering-over-the-city-of-paris-OgPuPvPsHLM?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash"
          >
            <Image
              alt="Effiel Tower"
              src="/photos/photo4.jpg"
              fill
              sizes="(max-width: 768px) 213px, 33vw"
              priority
              className="rounded-lg object-cover sm:object-center"
            />
          </a>
        </div>
        <div className="relative row-span-2">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://unsplash.com/photos/a-tall-tower-with-a-clock-on-top-of-it-jhzjNOJJTTM"
          >
            <Image
              alt="A tall tower with a clock on top of it"
              src="/photos/photo2.jpg"
              fill
              sizes="(max-width: 768px) 213px, 33vw"
              priority
              className="rounded-lg object-cover object-top sm:object-center"
            />
          </a>
        </div>
        <div className="relative h-40">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://unsplash.com/photos/people-walking-near-building-during-daytime-dFLBDQQeffU?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash"
          >
            <Image
              alt="Roman columns"
              src="/photos/photo1.jpg"
              fill
              sizes="(max-width: 768px) 213px, 33vw"
              priority
              className="rounded-lg object-cover"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
