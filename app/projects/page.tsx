// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjects } from "@/lib/projects_mdx";
import Image from "next/image";
import ClientMDX from "@/app/components/ClientMDX";
import ErrorBoundary from "@/app/components/ErrorBoundary";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const projectData = await getProjectBySlug(slug);
  if (!projectData) return notFound();

  const { mdxSource, frontMatter } = projectData;
  console.log(`[ProjectDetailPage] slug: ${slug}, frontMatter:`, frontMatter);
  console.log(`[ProjectDetailPage] mdxSource:`, mdxSource);

  return (
    <div className="container mx-auto px-4 py-8">
      {frontMatter.image && (
        <Image src={frontMatter.image} alt={frontMatter.title} width={800} height={600} className="object-cover" />
      )}
      <ErrorBoundary>
        <ClientMDX mdxSource={mdxSource} /> {/* Pass serialized mdxSource */}
      </ErrorBoundary>
    </div>
  );
}

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project) => ({ slug: project.slug }));
}