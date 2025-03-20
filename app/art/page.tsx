import Link from "next/link";
import { getAllProjects } from "../../lib/mdx";
import type { MDXProject } from "@/types/mdx";

export default async function ArtPage() {
  const projects: MDXProject[] = await getAllProjects();
  const artProjects = projects.filter((p) => p.category === "art");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Art</h1>
      {artProjects.map((project) => (
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
