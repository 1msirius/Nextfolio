// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjects } from "@/lib/mdx";
import { CustomMDX } from "@/app/components/mdx";
import Image from "next/image";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  const projectData = await getProjectBySlug(slug);
  if (!projectData) return notFound();

  const { mdxSource, frontMatter } = projectData;
  return (
    <div className="container mx-auto px-4 py-8">
      {frontMatter.image && (
        <Image src={frontMatter.image} alt={frontMatter.title} width={800} height={600} className="object-cover" />
      )}
      <CustomMDX {...mdxSource} />
    </div>
  );
}

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project) => ({ slug: project.slug }));
}
