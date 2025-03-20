export default function ProjectIntro({ title, subtitle, videoUrl }) {
    return (
      <section className="mb-12">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-lg italic text-gray-600">{subtitle}</p>
        {videoUrl && (
          <div className="mt-8 aspect-video">
            <iframe src={videoUrl} className="w-full h-full rounded-lg shadow"/>
          </div>
        )}
      </section>
    );
  }
  