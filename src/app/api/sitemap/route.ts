import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
	// Await to get the ReadonlyHeaders object
	const h = await headers();
	const host = h.get("host") ?? "antoniosessa.com";
	const protocol = h.get("x-forwarded-proto") ?? "https";
	const baseUrl = `${protocol}://${host}`;

	// Build sitemap XML content dynamically
	const sitemapXml = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <url>
                <loc>${baseUrl}/</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>1</priority>
            </url>
            <url>
                <loc>${baseUrl}/reading-list</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>0.8</priority>
            </url>
        </urlset>`;

	return new NextResponse(sitemapXml, {
		status: 200,
		headers: {
			"Content-Type": "application/xml",
			"Cache-Control": "public, max-age=0, must-revalidate",
		},
	});
}
