// app/projects/[slug]/page.tsx
import React from 'react';
import { notFound } from "next/navigation";
import { getProjectBySlug } from "../../../lib/mdx";
import MDXContent from './mdx-content';

export default async function ProjectPage({ 
  params 
}: { 
  params: { slug: string } // Still a plain object type
}) {
  const { slug } = await params; // Await params to satisfy Next.js 15+
  const projectData = await getProjectBySlug(slug);
  
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