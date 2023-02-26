const fs = require("fs");
const globby = require("globby");

const buildTime = new Date();

function addPage(page) {
  const path = page
    .replace("src/pages", "")
    .replace(".tsx", "")
    .replace("index", "");
  const route = path === "/" ? "" : path;

  return `
  <url>
    <loc>${`${process.env.WEBSITE_URL}${route}`}</loc>
    <lastmod>${`${buildTime.getFullYear()}-${
      buildTime.getMonth() + 1
    }-${buildTime.getDate()}`}</lastmod>
  </url>`;
}

async function generateSitemap() {
  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const pages = await globby([
    "src/pages/**/*{.tsx,.mdx}",
    "!src/pages/_*.tsx",
    "!src/pages/api",
  ]);
  const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages.map(addPage).join("\n")}
  </urlset>`;

  fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSitemap();
