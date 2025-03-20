// app/page.tsx
import Link from "next/link";
import Image from "next/image";
import { getAllProjects } from "@/lib/mdx";
import { MDXProject } from "@/types/mdx";

export default async function HomePage() {
  const projects = await getAllProjects();
  const featuredProjects = projects.filter((p) => p.isFeatured);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Aaron Demby Jones</h1>
      <p className="text-xl mb-12">
        Artist &amp; Technologist exploring music improvisation, generative art, and creative programming.
      </p>

      <h2 className="text-2xl font-semibold mb-6">Featured Work</h2>
      <div className="space-y-8">
        {featuredProjects.map((project) => (
          <div key={project.slug}>
            {project.image && (
              <Link href={`/projects/${project.slug}`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}      // adjust as needed
                  height={400}     // adjust as needed
                  className="object-cover cursor-pointer"
                />
              </Link>
            )}
            <Link href={`/projects/${project.slug}`}>
              <h3 className="text-xl font-medium hover:underline cursor-pointer">
                {project.title}
              </h3>
            </Link>
            <p className="italic text-gray-600">{project.summary}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <p className="font-medium">Explore more:</p>
        <div className="flex space-x-4">
          <Link href="/music">Music</Link>
          <Link href="/art">Art</Link>
          <Link href="/programming">Programming</Link>
        </div>
      </div>
    </main>
  );
}
