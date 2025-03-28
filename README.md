# Adithyan's Personal Blog

This repository contains the source code for my personal blog where I share things I wish I had known earlier. The blog is built using Next.js 15 with the App Router pattern, TypeScript, and Tailwind CSS.

## Project Overview

This blog is designed to be:

- **Fast and Responsive**: Built with performance in mind using Next.js
- **Clean and Accessible**: Prioritizing readability and accessibility
- **Content-focused**: Simple design that emphasizes the content
- **Flexible**: Easy to add new features and content types

For technical setup details, see [SETUP.md](./SETUP.md).

## Directory Structure

```
.
├── app/                    # Next.js App Router structure
│   ├── components/         # Reusable UI components
│   ├── blog/               # Blog section and post rendering
│   ├── projects/           # Projects showcase
│   ├── photos/             # Photo gallery
│   ├── about/              # About page
│   ├── lib/                # Utility functions
│   └── config.ts           # Site-wide configuration
├── content/                # MDX blog posts
├── public/                 # Static assets
└── .cursor/                # Cursor.dev rules for development
    └── rules/              # Custom coding standards and guidelines
```

## Key Components

The blog includes several reusable components that you can use in new pages or features:

| Component          | Description                                             | File Location                        |
| ------------------ | ------------------------------------------------------- | ------------------------------------ |
| `Navbar`           | Main navigation bar with links to all sections          | `app/components/nav.tsx`             |
| `ThemeSwitch`      | Dark/light mode toggle with system preference detection | `app/components/theme-switch.tsx`    |
| `Footer`           | Site footer with social links                           | `app/components/footer.tsx`          |
| `GithubCalendar`   | GitHub activity heatmap                                 | `app/components/github-calendar.tsx` |
| `CustomMDX`        | MDX renderer with custom components                     | `app/components/mdx.tsx`             |
| `ImageGrid`        | Grid layout for displaying multiple images              | `app/components/image-grid.tsx`      |
| `TweetComponent`   | Embed and style tweets                                  | `app/components/tweet.tsx`           |
| `YouTubeComponent` | Embed YouTube videos                                    | `app/components/youtube.tsx`         |
| `CaptionComponent` | Add captions to media elements                          | `app/components/caption.tsx`         |

## Content Management

Blog posts are written in MDX format and stored in the `content/` directory. Each post has frontmatter with metadata:

```mdx
---
title: 'Post Title'
publishedAt: '2024-01-01'
summary: 'Brief description of the post'
tags: 'Tag1, Tag2'
image: '/optional-custom-image.png'
hidden: false
---

Post content goes here...
```

The `app/lib/posts.ts` utility handles parsing frontmatter and loading content.

## Developer Guide

### Cursor Rules for Common Tasks

This project uses [Cursor.dev](https://cursor.dev) rules to maintain coding standards and provide guidance for development tasks. When working on specific types of changes, refer to these rules:

1. For general coding standards: `.cursor/rules/coding-conventions.mdc`
2. For creating new blog posts: `.cursor/rules/blog-creation.mdc`
3. For creating new pages: `.cursor/rules/page-creation-guide.mdc`

You can also use Cursor AI to guide you through implementing new features by referencing these rules.

### Common Development Tasks

Here's how to perform common tasks on this project:

#### Creating a New Page

1. Follow the structure in existing pages under the `app/` directory
2. Create a new directory with a `page.tsx` file
3. Update navigation in `app/components/nav.tsx` if needed
4. Refer to the `page-creation-guide` Cursor rule for detailed instructions

#### Adding a New Blog Post

1. Create a new `.mdx` file in the `content/` directory
2. Include proper frontmatter with title, date, summary, and tags
3. Write your content using MDX syntax
4. Refer to the `blog-creation` Cursor rule for detailed instructions

#### Modifying the Theme or Styling

1. Global styles are in `app/global.css`
2. Theme configuration is in `app/components/theme-switch.tsx`
3. Component-specific styling uses Tailwind classes directly in components

## Data Flow

Understanding how data flows through the application:

1. **Blog Posts**:

   - MDX files in `content/` →
   - Parsed by `app/lib/posts.ts` →
   - Rendered in `app/blog/[slug]/page.tsx`

2. **Projects**:

   - Defined in `app/projects/project-data.tsx` →
   - Rendered in `app/projects/page.tsx`

3. **Site Configuration**:
   - Defined in `app/config.ts` →
   - Used throughout the application for SEO, metadata, and social links

## Performance Considerations

The site is optimized for performance:

- Image optimization with Next.js Image component
- Server components for reduced client-side JavaScript
- Dark mode without layout shifts
- Tailwind for efficient CSS

## Getting Help

If you're stuck or need guidance:

1. Check the Cursor rules in `.cursor/rules/`
2. Look at existing implementations for similar features
3. Review the Next.js documentation for App Router: https://nextjs.org/docs

## License

This project is licensed under the MIT License - see the LICENSE file for details.
