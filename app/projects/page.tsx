import Link from "next/link";
import type { Metadata } from "next";
import { getAllProjects } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Projects",
  description: "My Portfolio Projects",
};

export default async function Projects() {
  const projects = await getAllProjects();

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Projects</h1>
      <div className="grid grid-cols-1 gap-8">
        {projects.map((project) => (
          <div key={project.slug} className="mb-5">
            <Link href={`/projects/${project.slug}`}>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
                <h2 className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400">
                  {project.title}
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-[15px]">
                  {project.summary}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
