export interface MDXProject {
  title: string;
  slug: string;
  publishedAt: string;
  summary: string;
  category: string;
  tags: string;
  isFeatured: boolean;
}

export type MDXSource = {
  frontMatter: MDXProject;
  mdxSource: any; // We'll type this as 'any' for now since the MDX source type is complex
}; 