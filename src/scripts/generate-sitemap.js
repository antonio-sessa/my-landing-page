const fs = require("fs");

async function generateSitemap() {
  const { globby } = await import("globby"); // Dynamic import
  const pages = await globby([
    "src/pages/**/*{.tsx,.mdx}",
    "!src/pages/_*.tsx",
    "!src/pages/api",
  ]);

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
      <lastmod>${`${buildTime.toISOString()}`}</lastmod>
    </url>`;
  }

  const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages.map(addPage).join("\n")}
  </urlset>`;

  fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSitemap();
