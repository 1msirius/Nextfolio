// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import { getProjectBySlug } from "../../../lib/mdx"; // Verify this path matches your project structure
import MDXContent from './mdx-content';

export default async function ProjectPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const projectData = await getProjectBySlug(params.slug); // Use params.slug directly
  if (!projectData) return notFound();

  const { mdxSource, frontMatter } = projectData;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{frontMatter.title}</h1>
      <p className="text-gray-700 mb-6">{frontMatter.summary}</p>
      <MDXContent mdxSource={mdxSource} />
    </div>
  );
}