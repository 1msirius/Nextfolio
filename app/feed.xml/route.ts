import { Feed } from "feed";
import { baseUrl } from "app/sitemap";
import { getBlogPosts } from "app/lib/posts";
import { NextResponse } from "next/server";

export async function GET() {
  const feed = new Feed({
    title: "Nextfolio",
    description:
      "A portfolio template built with Next.js, Vercel, and Tailwind CSS.",
    link: `${baseUrl}`,
    updated: new Date(),
  });

  const allPosts = await getBlogPosts();
  allPosts.forEach((post) => {
    feed.addItem({
      title: post.metadata.title,
      link: `${baseUrl}/blog/${post.slug}`,
      description: post.metadata.summary,
      date: new Date(post.metadata.publishedAt),
      category: post.metadata.category
        ? [{ name: post.metadata.category }]
        : [],
    });
  });

  let rssFeed = feed.rss2();

  // Remove the <docs> tag from RSS feed
  rssFeed = rssFeed.replace(/<docs>[^<]*<\/docs>\s*/, "");

  // Remove CDATA wrapping from RSS feed
  rssFeed = rssFeed.replace(/<!\[CDATA\[(.*?)\]\]>/g, "$1");

  // Remove <generator> tag from RSS feed
  rssFeed = rssFeed.replace(/<generator>.*?<\/generator>/, "");

  return new NextResponse(rssFeed, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
