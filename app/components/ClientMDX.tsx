// app/components/ClientMDX.tsx
"use client";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import { YouTubeComponent } from "./youtube";
import SoundCloudEmbed from "./soundcloud";
import Image from "next/image";
import { Callout } from "./callout";
import CallToAction from "./call-to-action";
import MediaSection from "./media-section";
import MediaItem from "./media-item";
import ProjectIntro from "./project-intro";
import ProjectOverview from "./project-overview";
import TechnicalDetails from "./technical-details";
import { ZoomImage } from "./ZoomImage";
import { CaptionComponent } from "./caption";
import SpatialSynthesizerSketch from "./SpatialSynthesizerSketch";
import EncasedMeltingSphere from "./EncasedMeltingSphere";
import { ImageGrid } from "./image-grid";
import CollapseMetadata from "./CollapseMetadata";
import FieldNote from "./FieldNote";
import Whisper from "./Whisper";


const components = {
  p: "p",
  ProjectOverview,
  MediaSection,
  MediaItem,
  ImageGrid,
  CallToAction,
  SpatialSynthesizerSketch,
  EncasedMeltingSphere, 
  YouTube: YouTubeComponent,
  SoundCloudEmbed,
  Image,
  Callout,
  ProjectIntro,
  TechnicalDetails,
  ZoomImage,
  Caption: CaptionComponent,
  CollapseMetadata,
  FieldNote,
  Whisper,
};

type ClientMDXProps = {
  mdxSource: MDXRemoteSerializeResult;
};

export default function ClientMDX({ mdxSource }: ClientMDXProps) {
  console.log("[ClientMDX] mdxSource:", mdxSource);
  return (
    <div className="prose max-w-none">
      <MDXRemote {...mdxSource} components={components} />
    </div>
  );
}