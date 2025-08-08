/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
module.exports = {
	webpack: (config, { isServer }) => {
		if (isServer) {
			require("./src/scripts/generate-sitemap");
		}

		return config;
	},
};
