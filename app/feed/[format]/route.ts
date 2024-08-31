import { Feed } from "feed";
import { getBlogPosts } from "app/lib/posts";
import { metaData } from "app/config";
import { NextResponse } from "next/server";

export async function generateStaticParams() {
  return [
    { format: "feed.xml" },
    { format: "atom.xml" },
    { format: "feed.json" },
  ];
}

export async function GET(
  request: Request,
  { params }: { params: { format: string } }
) {
  const format = params.format;

  if (!["feed.xml", "atom.xml", "feed.json"].includes(format)) {
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
      rss: `${metaData.baseUrl}/feed.xml`,
    },
  });

  const allPosts = await getBlogPosts();

  allPosts.forEach((post) => {
    const postUrl = `${metaData.baseUrl}/blog/${post.slug}`;

    const categories = post.metadata.tags
      ? post.metadata.tags.split(",").map((cat) => cat.trim())
      : [];

    feed.addItem({
      title: post.metadata.title,
      id: postUrl,
      link: postUrl,
      description: post.metadata.summary,
      // content: post.metadata.summary,
      category: categories.map((cat) => ({ name: cat })),
      date: new Date(post.metadata.publishedAt),
    });
  });

  let response: string;
  let contentType: string;

  switch (format) {
    case "feed.xml":
      response = feed.rss2();
      contentType = "application/xml";
      break;
    case "atom.xml":
      response = feed.atom1();
      contentType = "application/xml";
      break;
    case "feed.json":
      response = feed.json1();
      contentType = "application/json";
      break;
    default:
      return NextResponse.json(
        { error: "Unsupported feed format" },
        { status: 404 }
      );
  }

  return new NextResponse(response, {
    headers: {
      "Content-Type": contentType,
    },
  });
}
