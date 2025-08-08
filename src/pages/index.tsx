import { CV } from "../components/CV";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { LineBreaker } from "../components/LineBreaker";
import { Links } from "../components/Links";
import { Main } from "../components/Main";
import { AboutMe } from "../components/Sections/AboutMe";
import { Certifications } from "../components/Sections/Certifications";
import { Education } from "../components/Sections/Education";
import { Experience } from "../components/Sections/Experience";
import { Languages } from "../components/Sections/Languages";
import { Skills } from "../components/Sections/Skills";

export default function Home() {
	return (
		<>
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
