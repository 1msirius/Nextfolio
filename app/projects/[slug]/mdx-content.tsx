'use client';
import { MDXRemote } from "next-mdx-remote";
import { YouTubeComponent } from "../../components/youtube";
import SoundCloudEmbed from "../../components/soundcloud";
import Image from "next/image";
import { Callout } from "../../components/callout";
import CallToAction from "../../components/call-to-action";
import MediaSection from "../../components/media-section";
import MediaItem from "../../components/media-item";
import ProjectIntro from "../../components/project-intro";
import ProjectOverview from "../../components/project-overview";
import TechnicalDetails from "../../components/technical-details";
import { ZoomImage } from "../../components/ZoomImage";

const components = {
  YouTube: YouTubeComponent,
  SoundCloudEmbed,
  Image,
  Callout,
  CallToAction,
  MediaSection,
  MediaItem,
  ProjectIntro,
  ProjectOverview,
  TechnicalDetails,
  ZoomImage,
};

interface MDXContentProps {
  mdxSource: any; // Replace with proper typing if available
}

export default function MDXContent({ mdxSource }: MDXContentProps) {
  return (
    <div className="prose">
      <MDXRemote {...mdxSource} components={components} />
    </div>
  );
} 