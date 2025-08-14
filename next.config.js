/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	// Enable styled-components transform for proper SSR
	compiler: {
		styledComponents: true,
	},

	// Rewrite /sitemap.xml to the dynamic API route
	async rewrites() {
		return [
			{
				source: "/sitemap.xml",
				destination: "/api/sitemap",
			},
		];
	},
};

module.exports = nextConfig;
