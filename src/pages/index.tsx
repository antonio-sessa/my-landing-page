import type { GetServerSideProps } from "next";
import { CV } from "../components/CV";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";
import { Hero } from "../components/Main/Hero";
import { LineBreaker } from "../components/Main/LineBreaker";
import { Links } from "../components/Main/Links";
import { Meta } from "../components/Meta";
import { AboutMe } from "../components/Sections/AboutMe";
import { Certifications } from "../components/Sections/Certifications";
import { Education } from "../components/Sections/Education";
import { Experience } from "../components/Sections/Experience";
import { Languages } from "../components/Sections/Languages";
import { Skills } from "../components/Sections/Skills";
import { getBaseUrl } from "../lib/getBaseUrl";

export default function Home({ baseUrl }: { baseUrl: string }) {
	return (
		<>
			<Meta baseUrl={baseUrl} />
			<Main>
				<Hero />
				<LineBreaker />
				<Links />
			</Main>
			<CV>
				<AboutMe />
				<Experience />
				<Education />
				<Skills />
				<Certifications />
				<Languages />
			</CV>
			<Footer />
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	return {
		props: {
			baseUrl: getBaseUrl(req),
		},
	};
};
