import React from "react";
import Image from "next/image";
import photo1 from "public/photos/photo1.jpg";
import photo2 from "public/photos/photo2.jpg";
import photo3 from "public/photos/photo3.jpg";
import photo4 from "public/photos/photo4.jpg";
import photo5 from "public/photos/photo5.jpg";
import photo6 from "public/photos/photo6.jpg";

export const metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
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
              src={photo6}
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
              src={photo5}
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
              src={photo3}
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
              src={photo4}
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
              src={photo2}
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
              src={photo1}
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
