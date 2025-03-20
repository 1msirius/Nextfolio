import Link from "next/link";
import { getAllProjects } from "../../lib/mdx";

export default async function MusicPage() {
  const projects = await getAllProjects();
  const musicProjects = projects.filter((p) => p.category === "music");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Music</h1>
      {musicProjects.map((project) => (
        <div key={project.slug} className="mb-6">
          <Link href={`/projects/${project.slug}`}>
            <h2 className="text-xl font-semibold hover:underline">{project.title}</h2>
          </Link>
          <p className="italic text-gray-600">{project.summary}</p>
        </div>
      ))}
    </div>
  );
}
