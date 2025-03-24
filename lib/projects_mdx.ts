// lib/projects_mdx.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { MDXProject } from "@/types/mdx";
import { serialize } from "next-mdx-remote/serialize";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export async function getProjectBySlug(slug: string) {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    },
  });

  console.log(`[getProjectBySlug] slug: ${slug}, mdxSource:`, mdxSource);
  console.log(`[getProjectBySlug] typeof mdxSource:`, typeof mdxSource);

  return {
    frontMatter: data as MDXProject,
    mdxSource,
  };
}

export async function getAllProjects(): Promise<MDXProject[]> {
  const fileNames = fs.readdirSync(projectsDirectory);

  const projects = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return { slug, ...data } as MDXProject;
  });

  return projects;
}