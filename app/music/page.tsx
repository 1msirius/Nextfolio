// app/music/page.tsx
import Link from "next/link";
import Image from "next/image";
import { getAllProjects } from "@/lib/mdx";

export default async function MusicPage() {
  const all = await getAllProjects();
  const musicProjects = all.filter((p) => p.category === "music");

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Music</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {musicProjects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`}>
            <div className="group">
              {(project.image) && (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={400}
                  className="object-cover rounded-md group-hover:opacity-90"
                />
              )}
              <h2 className="mt-4 text-xl font-medium">{project.title}</h2>
              <p className="italic text-gray-600">{project.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
