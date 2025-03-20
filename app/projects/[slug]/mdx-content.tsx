'use client';
import { MDXRemote } from "next-mdx-remote";
import { YouTubeComponent } from "../../components/youtube";
import SoundCloudEmbed from "../../components/soundcloud";
import Image from "next/image";
import { Callout } from "../../components/callout";

const components = {
  YouTube: YouTubeComponent,
  SoundCloudEmbed,
  Image,
  Callout,
};

export default function MDXContent({ mdxSource }) {
  return (
    <div className="prose">
      <MDXRemote {...mdxSource} components={components} />
    </div>
  );
} 