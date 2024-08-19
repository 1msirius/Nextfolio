import { Feed } from "feed";
import fs from "fs";
import path from "path";
import { baseUrl } from "app/sitemap";
import { getBlogPosts } from "app/lib/posts";
import { NextResponse } from "next/server";

const feedDirectory = path.join(process.cwd(), 'public', 'feed');

// Generate feeds and save them to the public/feed directory
const generateFeeds = async () => {
  try {
    const feed = new Feed({
      title: "Nextfolio",
      description: "A portfolio template built with Next.js, Vercel, and Tailwind CSS.",
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
        category: post.metadata.category ? [{ name: post.metadata.category }] : [],
      });
    });

    // Ensure the directory exists
    fs.mkdirSync(feedDirectory, { recursive: true });

    // Write the feeds to files
    fs.writeFileSync(path.join(feedDirectory, 'feed.xml'), feed.rss2());
    fs.writeFileSync(path.join(feedDirectory, 'atom.xml'), feed.atom1());
    fs.writeFileSync(path.join(feedDirectory, 'feed.json'), feed.json1());
  } catch (error) {
    console.error('Error generating feeds:', error);
  }
};

export async function GET(request: Request) {
  // Generate feeds on every request
  await generateFeeds();

  const url = new URL(request.url);
  const pathname = url.pathname;

  const feedPaths = {
    '/feed.xml': { path: path.join(feedDirectory, 'feed.xml'), contentType: 'application/xml' },
    '/atom.xml': { path: path.join(feedDirectory, 'atom.xml'), contentType: 'application/xml' },
    '/feed.json': { path: path.join(feedDirectory, 'feed.json'), contentType: 'application/json' },
  };

  const feedConfig = feedPaths[pathname];
  const rssFeed = fs.readFileSync(feedConfig.path, 'utf-8');

  return new NextResponse(rssFeed, {
    headers: {
      "Content-Type": feedConfig.contentType,
    },
  });
}
