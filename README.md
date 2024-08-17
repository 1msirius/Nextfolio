# Nextfolio

A clean, fast, and simple portfolio template built with [Next.js](https://nextjs.org/), [Vercel](https://vercel.com/), and [Tailwind CSS](https://tailwindcss.com/) for great performance.

Deploy your Nextfolio site with Vercel in minutes.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F1msirius%2FNextfolio)

## Technologies Used

- Framework: [Next.js](https://nextjs.org/)
- Typography: [Vercel Geist Font](https://vercel.com/font)
- Styling: [Tailwind CSS](https://tailwindcss.com/)
- Analytics: [Vercel Web Analytics](https://vercel.com/docs/speed-insights) and [Speed Insights](https://vercel.com/docs/speed-insights)
- Deployment: [Vercel](https://vercel.com/)

## Features

- **MDX Support**: Easily write blog posts with Markdown and JSX components.
- **Light and Dark Mode Toggle**: Provide a user-friendly theme switch for better readability.
- **Dynamic OG Images**: Automatically generate Open Graph visuals for improved sharing.
- **SEO Optimization**: Enhance search visibility with a sitemap, robots.txt, and JSON-LD schema.
- **RSS Feed Generation**: Keep your audience updated with automated RSS feeds.
- **[KaTeX](https://katex.org/) Integration**: Seamlessly render mathematical expressions in your blog posts.
- **Performance Tracking**: Monitor web performance with [Vercel Web Analytics](https://vercel.com/docs/speed-insights) and [Speed Insights](https://vercel.com/docs/speed-insights).
- **Interactive Embeds**: Easily embed interactive tweets and YouTube videos.
- **Captions**: Add descriptive captions to photos, tweets, and videos.

## Running Locally

To run the website on your local machine, follow these steps:

Ensure [pnpm](https://pnpm.io) is installed on your system. If not, follow the [instructions](https://pnpm.io/installation) on their website.

```
# Download the website code with Git:
git clone https://github.com/1msirius/Nextfolio.git

# Navigate into the project directory:
cd Nextfolio

# Install the dependencies:
pnpm install

# Start the development server:
pnpm dev
```

The server will be running at [http://localhost:3000](http://localhost:3000).

## Configuration

1. Update the metadata in `app/layout.tsx`.
2. Configure your site URL and routes in `app/sitemap.ts` for SEO optimization.
3. Customize the title and description in `/app/rss/route.ts` to generate the RSS feed .
4. Personalize your name in `app/blog/[slug]/page.tsx`.
5. Set your desired `title in app/og/route.tsx`.
6. Update social links and copyright information in `app/components/footer.tsx`.

For more information about configuration, follow the instructions in the [Getting Started](https://nextfolio-template.vercel.app/blog/getting-started#configuration) post.

## Contributing

We welcome contributions to Nextfolio! To get involved, simply push your code to the repo. You can help improve existing features or add new ones. Your contributions are greatly appreciated!
