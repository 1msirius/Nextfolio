export interface MDXProject {
  title: string;
  slug: string;
  publishedAt: string;
  summary: string;
  cluster: "resonant" | "errant" | "fractured" | "enclosed"; // New required field
  phaseState?: "awakening" | "expansion" | "collapse";        // Optional, for future use
  tags: string[];                                              // Make this an array, not a string
  isFeatured: boolean;
  image?: string;
}

export type MDXSource = {
  frontMatter: MDXProject;
  mdxSource: any; // We'll type this as 'any' for now since the MDX source type is complex
}; 