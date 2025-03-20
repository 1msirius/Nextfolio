// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import { JSX } from "react";
import { getProjectBySlug, getAllProjects } from "@/lib/mdx";
import { CustomMDX } from "@/app/components/mdx";
import Image from "next/image";

interface Props {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function ProjectPage({ params, searchParams }: Props): Promise<JSX.Element> {
  const projectData = await getProjectBySlug(params.slug);
  if (!projectData) return notFound();

  const { mdxSource, frontMatter } = projectData;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Teaser Image */}
      {frontMatter.image && (
        <div className="mb-4">
          <Image
            src={frontMatter.image}
            alt={frontMatter.title}
            width={800}      // Adjust dimensions as needed
            height={600}
            className="object-cover"
          />
        </div>
      )}
      {/* Render the MDX content */}
      <CustomMDX {...mdxSource} />
    </div>
  );
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const projects = await getAllProjects();
  return projects.map((project: { slug: string }) => ({
    slug: project.slug,
  }));
}
