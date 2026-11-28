This is a [Next.js](https://nextjs.org) project.

## Getting Started

Create an env file, using [.env.template](.env.template) as a guide.

To run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Design Inspiration

Draws heavily upon the design of [Brittany Chiang](https://brittanychiang.com/).

## Writing a post

A post is a folder under `content/writing/`, named after its URL slug, holding an `index.mdx` and anything it imports (figures, images).

```mdx
---
title: The title
subtitle: An optional second line
summary: One or two sentences for listings, the feed and link previews.
date: 2026-11-28
series: # optional
  name: The series name
  part: 1
draft: true # optional; drafts show in `pnpm dev` only
---
```

A missing or malformed field fails the build with the file's name. The site needs at least one post folder to build.
