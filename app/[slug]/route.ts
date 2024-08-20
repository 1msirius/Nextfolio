import { Feed } from "feed";
import { baseUrl } from "app/sitemap";
import { getBlogPosts } from "app/lib/posts";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // Create the feed
  const feed = new Feed({
    title: "Nextfolio",
    description:
      "A portfolio template built with Next.js, Vercel, and Tailwind CSS.",
    id: baseUrl,
    link: baseUrl,
    copyright: `All rights reserved ${new Date().getFullYear()}, Nextfolio`,
    updated: new Date(),
    feedLinks: {
      rss2: `${baseUrl}/feed.xml`,
      atom: `${baseUrl}/atom.xml`,
      json: `${baseUrl}/feed.json`,
    },
  });

  const allPosts = await getBlogPosts();
  allPosts.forEach((post) => {
    feed.addItem({
      title: post.metadata.title,
      id: `${baseUrl}/blog/${post.slug}`,
      link: `${baseUrl}/blog/${post.slug}`,
      description: post.metadata.summary,
      date: new Date(post.metadata.publishedAt),
      category: post.metadata.category
        ? [{ name: post.metadata.category }]
        : [],
    });
  });

  // Define feed paths and content types
  const feedPaths = {
    '/feed.json': { content: feed.json1(), contentType: 'application/json' },
    '/atom.xml': { content: feed.atom1(), contentType: 'application/xml' },
    '/feed.xml': { content: feed.rss2(), contentType: 'application/xml' },
  };

  const url = new URL(request.url);
  const pathname = url.pathname;

  const feedConfig = feedPaths[pathname];

  return new NextResponse(feedConfig?.content || '', {
    headers: {
      "Content-Type": feedConfig?.contentType || 'text/plain',
    },
  });
}
