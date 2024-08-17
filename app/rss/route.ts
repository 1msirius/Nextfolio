import { baseUrl } from "app/sitemap";
import { getBlogPosts } from "app/blog/utils";

export async function GET() {
  let allBlogs = await getBlogPosts();

  const itemsXml = allBlogs
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1;
      }
      return 1;
    })
    .map(
      (post) =>
        `<item>
          <title>${post.metadata.title}</title>
          <link>${baseUrl}/blog/${post.slug}</link>
          <description>${post.metadata.summary || ""}</description>
          <pubDate>${new Date(
            post.metadata.publishedAt
          ).toUTCString()}</pubDate>
          <category>${post.metadata.category}</category>
        </item>`
    )
    .join("\n");

  const lastBuildDate = new Date().toUTCString();

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>Nextfolio</title>
        <link>${baseUrl}</link>
        <description>A portfolio template built with Next.js, Vercel, and Tailwind CSS.</description>
        <lastBuildDate>${lastBuildDate}</lastBuildDate>
        ${itemsXml}
    </channel>
  </rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
