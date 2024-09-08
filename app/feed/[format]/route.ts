import { Feed } from "feed";
import { getBlogPosts } from "app/lib/posts";
import { metaData } from "app/config";
import { NextResponse } from "next/server";

export async function generateStaticParams() {
  return [
    { format: "rss.xml" },
    { format: "atom.xml" },
    { format: "feed.json" },
  ];
}

export async function GET(
  _: Request,
  { params }: { params: { format: string } }
) {
  const { format } = params;
  const validFormats = ["rss.xml", "atom.xml", "feed.json"];

  if (!validFormats.includes(format)) {
    return NextResponse.json(
      { error: "Unsupported feed format" },
      { status: 404 }
    );
  }

  const feed = new Feed({
    title: metaData.title,
    description: metaData.description,
    id: metaData.baseUrl,
    link: metaData.baseUrl,
    copyright: `All rights reserved ${new Date().getFullYear()}, ${
      metaData.title
    }`,
    updated: new Date(),
    generator: "Feed for Node.js",
    feedLinks: {
      json: `${metaData.baseUrl}/feed.json`,
      atom: `${metaData.baseUrl}/atom.xml`,
      rss: `${metaData.baseUrl}/rss.xml`,
    },
  });

  const allPosts = await getBlogPosts();

  allPosts.forEach((post) => {
    const postUrl = `${metaData.baseUrl}/blog/${post.slug}`;
    const categories = post.metadata.tags
      ? post.metadata.tags.split(",").map((tag) => tag.trim())
      : [];

    feed.addItem({
      title: post.metadata.title,
      id: postUrl,
      link: postUrl,
      description: post.metadata.summary,
      category: categories.map((cat) => ({ name: cat })),
      date: new Date(post.metadata.publishedAt),
    });
  });

  const responseMap: Record<string, { content: string; contentType: string }> =
    {
      "rss.xml": { content: feed.rss2(), contentType: "application/xml" },
      "atom.xml": { content: feed.atom1(), contentType: "application/xml" },
      "feed.json": { content: feed.json1(), contentType: "application/json" },
    };

  const response = responseMap[format];

  return new NextResponse(response.content, {
    headers: {
      "Content-Type": response.contentType,
    },
  });
}
