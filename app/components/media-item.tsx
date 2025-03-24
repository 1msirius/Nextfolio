// components/media-item.tsx
export default function MediaItem({
  title,
  description,
  children,
  soundCloudUrl,
  youtubeUrl,
}: {
  title: string;
  description: string;
  children?: React.ReactNode;
  soundCloudUrl?: string;
  youtubeUrl?: string;
}) {
  return (
    <div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="italic text-gray-600">{description}</p>
      <div className="mt-4 space-y-4">
        {children}
        {soundCloudUrl && (
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(soundCloudUrl)}`}
            className="rounded-lg shadow"
          />
        )}
        {youtubeUrl && (
          <div className="aspect-video">
            <iframe
              src={youtubeUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg shadow"
            />
          </div>
        )}
      </div>
    </div>
  );
}
