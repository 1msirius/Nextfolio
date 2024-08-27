import { MetadataRoute } from "next";
import { getBlogPosts } from "./lib/posts";
import { BASE_URL } from "./config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let blogs = getBlogPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ["", "/blog", "/projects", "/photos"].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
