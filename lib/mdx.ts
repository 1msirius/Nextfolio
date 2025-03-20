// lib/mdx.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { MDXProject } from "@/types/mdx";
import { serialize } from 'next-mdx-remote/serialize';

const projectsDirectory = path.join(process.cwd(), "content/projects");

export async function getProjectBySlug(slug: string) {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  
  // Serialize the content
  const mdxSource = await serialize(content);

  return { mdxSource, frontMatter: data as MDXProject };
}

export function getAllProjects(): MDXProject[] {
  const fileNames = fs.readdirSync(projectsDirectory);

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return { slug, ...data } as MDXProject;
  });
}