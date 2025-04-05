import Image from "next/image";
import Whisper from "../components/Whisper";
import GalleryOfLies from "../components/GalleryOfLies";

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
        I build systems that sing. Sometimes they melt. Sometimes they loop forever. I like when structure forgets itself.
      </p>
      <p className="text-lg mb-4">
        My work blends improvisation, computation, and a stubborn sense of wonder. It lives at the intersection of sound and shape: where math becomes feeling, and code turns uncanny.
      </p>
      <p className="text-lg mb-4">
        I've spent time with pianos, particles, and unstable systems. My background touches experimental music, digital art, mathematics, and computer programming—but these days, I'm more interested in how they blur.
      </p>
      <p className="text-lg mb-4">
        My work is organized by clusters. You'll find pieces in <a href="/resonant" className="text-blue-500">Resonant</a>, <a href="/errant" className="text-blue-500">Errant</a>, <a href="/fractured" className="text-blue-500">Fractured</a>, and <a href="/enclosed" className="text-blue-500">Enclosed</a>. If something echoes in you, reach out via <a href="mailto:aaron.demby.jones@gmail.com" className="text-blue-500">email</a>.
      </p>
      <div className="flex items-center gap-2 text-lg mb-4">
  <GalleryOfLies prompt="Lie to me" />
</div>

    </div>
  );
}
