# My Personal Website & Reading List

This is my personal website built with `Next.js`, `TypeScript` and `styled-components`, serving as a showcase for my career.
The homepage `/` features my CV, while the `/reading-list` page displays a curated reading list.

The reading list is powered by the `Notion API` and uses `Upstash Redis` as a caching layer to optimize performance.

## Features

- **Personal website** with career CV and links to my social pages
- **Server-side rendering (SSR)** with `Next.js` and `TypeScript`.
- **Styled-components** for modular, reusable CSS in JS.
- **Reading list data** sourced from Notion API.
- **Caching with Upstash Redis**: Checks Redis first; if data is not cached, fetches from Notion and stores it in Redis.
- **Sitemap updates** automatically upon changes.

## Getting Started

First, install dependencies and run the development server:

```bash
npm install
npm run dev
# or
yarn install
yarn dev
# or
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

> Note: Running the development server also regenerates `sitemap.xml` with the latest reading list entries.

## Environment Variables

Configure the following variables in your `.env.local` file:

```bash
NEXT_PUBLIC_APP_DOMAIN=your_domain
NOTION_API_KEY=your_notion_integration_secret
NOTION_DATABASE_ID=your_database_id
KV_URL=your_redis_url
UPSTASH_REDIS_REST_URL=<your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=<your_upstash_redis_token
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
