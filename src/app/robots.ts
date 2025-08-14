import type { MetadataRoute } from "next";
import { headers } from "next/headers";

export default async function robots(): Promise<MetadataRoute.Robots> {
	// Get request headers to detect domain and protocol
	const h = await headers();
	const host = h.get("host") || "antoniosessa.com";
	const protocol = h.get("x-forwarded-proto") || "https";
	const baseUrl = `${protocol}://${host}`;

	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: "/media/",
		},
		sitemap: `${baseUrl}/sitemap.xml`,
	};
}
