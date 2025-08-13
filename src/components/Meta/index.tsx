import Head from "next/head";

interface MetaProps {
	baseUrl: string;
	title?: string; // optional so old calls without title still work
}

export const Meta = ({ baseUrl, title }: MetaProps) => {
	const pageTitle =
		title ?? "Antonio Sessa - Passionate Senior QA Engineer and Photographer";

	return (
		<Head>
			<title>{pageTitle}</title>
			<meta
				name="description"
				content="Discover how my passion for Quality Assurance drives dynamic teams, fosters creativity, and delivers exceptional results. Currently based in Milan, IT."
			/>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/media/images/favicon.png" />
			<link rel="canonical" href={baseUrl} />
			{/* Open Graph Tags */}
			<meta property="og:title" content={pageTitle} />
			<meta
				property="og:description"
				content="Discover how my passion for Quality Assurance drives dynamic teams, fosters creativity, and delivers exceptional results. Currently based in Milan, IT."
			/>
			<meta
				property="og:image"
				content={`${baseUrl}/media/images/landing-scaled.jpg`}
			/>
			<meta property="og:url" content={baseUrl} />
			<meta property="og:type" content="website" />
		</Head>
	);
};
