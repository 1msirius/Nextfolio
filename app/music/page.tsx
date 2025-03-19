// app/music/page.tsx
import React from 'react';
import { YouTubeComponent as YouTube } from '@/app/components/youtube';
import SoundCloudEmbed from '@/app/components/soundcloud';
import Link from 'next/link';

const featuredVideos = [
  {
    title: "Audiovisual Piece",
    description: "An immersive audiovisual experience.",
    videoId: "pMgGtI2sYcY"
  },
  {
    title: "Live Improv",
    description: "A raw, energetic live improvisation performance.",
    videoId: "JhjR-F2yTOk"
  }
];

const singles = [
  {
    title: "Circles",
    // Ensure this URL is the proper embed URL. Typically, you can generate it via SoundCloud’s embed tool.
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2Faaron-demby-jones%2Fcircles"
  },
  {
    title: "Sunlight",
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2Faaron-demby-jones%2Fsunlight"
  },
  {
    title: "Boredom Blues",
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2Faaron-demby-jones%2Fboredom-blues"
  },
  {
    title: "Waiting",
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2Faaron-demby-jones%2Fwaiting"
  }
];

const albums = [
  {
    title: "Escape",
    url: "https://soundcloud.com/aaron-demby-jones/sets/escape"
  },
  {
    title: "Flow",
    url: "https://soundcloud.com/aaron-demby-jones/sets/flow"
  }
];

const MusicPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Music</h1>
      
      {/* Featured Videos Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Videos</h2>
        {featuredVideos.map((video, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-medium">{video.title}</h3>
            <p className="text-gray-600 mb-2">{video.description}</p>
            <YouTube videoId={video.videoId} />
          </div>
        ))}
      </section>
      
      {/* Singles Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Singles</h2>
        {singles.map((track, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-medium">{track.title}</h3>
            <SoundCloudEmbed url={track.embedUrl} />
          </div>
        ))}
      </section>
      
      {/* Albums Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Albums</h2>
        <ul className="list-disc list-inside">
          {albums.map((album, index) => (
            <li key={index}>
              <Link href={album.url} target="_blank" className="text-blue-600 hover:underline">
                {album.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default MusicPage;
