// app/components/soundcloud.tsx
import React from 'react';

interface SoundCloudEmbedProps {
  url: string;
}

const SoundCloudEmbed: React.FC<SoundCloudEmbedProps> = ({ url }) => (
  <iframe
    width="100%"
    height="166"
    scrolling="no"
    frameBorder="no"
    allow="autoplay"
    src={url}
  ></iframe>
);

export default SoundCloudEmbed;
