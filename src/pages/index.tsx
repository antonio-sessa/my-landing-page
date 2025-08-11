import { CV } from "../components/CV";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";
import { Hero } from "../components/Main/Hero";
import { LineBreaker } from "../components/Main/LineBreaker";
import { Links } from "../components/Main/Links";
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
