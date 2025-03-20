import Link from "next/link";
import { getAllProjects } from "../../lib/mdx";

export default async function ProgrammingPage() {
  const projects = await getAllProjects();
  const filteredProjects = projects.filter((p) => p.category === "programming");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Programming</h1>
      {filteredProjects.map((project) => (
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
