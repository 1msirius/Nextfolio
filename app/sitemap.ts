import { MetadataRoute } from "next";
import { getBlogPosts } from "./lib/posts";
import { metaData } from "./config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let blogs = getBlogPosts().map((post) => ({
    url: `${metaData.baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ["", "/blog", "/projects", "/photos"].map((route) => ({
    url: `${metaData.baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
