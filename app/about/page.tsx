import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <Image
        src="/photos/profile.png" // Make sure the image is inside the public/ folder
        alt="Aaron Demby Jones"
        width={200}
        height={200}
        className="rounded-full mb-4"
      />
      <p className="text-lg mb-4">
        I'm an artist and technologist exploring music improvisation, generative art, and creative programming. My work blends sound, visuals, and computation to create unique experiences.
      </p>
      <p className="text-lg mb-4">
        My background includes experimental music, digital art, and software development. I'm particularly interested in the intersection of improvisation and computation—whether through sound synthesis, generative visuals, or interactive tools.
      </p>
      <p className="text-lg mb-4">
        Feel free to explore my work in <a href="/music" className="text-blue-500">Music</a>, <a href="/art" className="text-blue-500">Art</a>, and <a href="/experiments" className="text-blue-500">Experiments</a>. If you're interested in collaboration, reach out via <a href="mailto:aaron.demby.jones@gmail.com" className="text-blue-500">email</a>.
      </p>
    </div>
  );
}
