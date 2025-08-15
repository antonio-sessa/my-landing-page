import type { Metadata } from "next";
import { Content } from "../components/Content";
import { Footer } from "../components/Footer";
import { Landing } from "../components/Landing";
import { AboutMe } from "../components/Sections/CV/AboutMe";
import { Certifications } from "../components/Sections/CV/Certifications";
import { Education } from "../components/Sections/CV/Education";
import { Experience } from "../components/Sections/CV/Experience";
import { Languages } from "../components/Sections/CV/Languages";
import { Skills } from "../components/Sections/CV/Skills";
import { Hero } from "../components/Sections/Landing/Hero";
import { LineBreaker } from "../components/Sections/Landing/LineBreaker";
import { Links } from "../components/Sections/Landing/Links";
import { ReadingListAccessEdge } from "../components/Sections/Landing/ReadingListAccessEdge";
import { getBaseUrl } from "../lib/getBaseUrl";

export async function generateMetadata(): Promise<Metadata> {
	const baseUrl = await getBaseUrl();

	const title =
		"Antonio Sessa - Passionate Senior QA Engineer and Photographer";
	const description =
		"Discover how my passion for Quality Assurance drives dynamic teams, fosters creativity, and delivers exceptional results. Currently based in Milan, IT.";

	return {
		title,
		description,
		alternates: {
			canonical: baseUrl,
		},
		openGraph: {
			title,
			description,
			url: baseUrl,
			images: `${baseUrl}/media/images/landing-scaled.jpg`,
			type: "website",
		},
	};
}

export default function Home() {
	return (
		<>
			<Landing>
				<Hero />
				<LineBreaker />
				<Links />
				<ReadingListAccessEdge />
			</Landing>
			<Content>
				<AboutMe />
				<Experience />
				<Education />
				<Skills />
				<Certifications />
				<Languages />
			</Content>
			<Footer />
		</>
	);
}
