// Keep this as a server component (no 'use client')
import React from 'react';
import { notFound } from "next/navigation";
import { getProjectBySlug } from "../../../lib/mdx";
import MDXContent from './mdx-content'; // Remove the .tsx extension

export default async function ProjectPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> | { slug: string }
}) {
  // Await the params if it's a promise
  const resolvedParams = await Promise.resolve(params);
  const projectData = await getProjectBySlug(resolvedParams.slug);
  
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
