"use client";

import styled from "styled-components";
import { Link } from "../../../Typography/Link";
import Paragraph from "../../../Typography/Paragraph";
import Container from "../../../UI/Container";
import SectionBlock from "../../../UI/SectionBlock";

const AboutMeSectionBlock = styled(SectionBlock)`
  box-sizing: border-box;
`;

const AboutMeContainer = styled(Container)`
  max-width: 48rem;
  text-align: left;
  backdrop-filter: blur(10px);
  border: none;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
  border-radius: 0.5rem;
  padding: 1.5rem;
  color: inherit;
  background-color: rgba(31, 41, 55, 0.85);
`;

const AboutMeParagraph = styled(Paragraph)`
  font-size: 1.125rem;
  line-height: 1.75;
  color: #e5e7eb;
  margin-bottom: 0.9rem;
`;

export const AboutMe = () => {
	return (
		<AboutMeSectionBlock id="about">
			<AboutMeContainer>
				<AboutMeParagraph>
					<em>
						“Give me a lever, a place to stand and well-done investigation, and
						I will move the earth.”
					</em>{" "}
					- Archimedes’ semi-cit.
				</AboutMeParagraph>
				<AboutMeParagraph>
					I was born as tireless curious. I’m a proactive guy, used to knowledge
					sharing and receiving feedbacks (whether positive or negative).
				</AboutMeParagraph>
				<AboutMeParagraph>
					In my spare time I enjoy{" "}
					<Link
						href="https://unsplash.com/it/@antony_sex"
						target="_blank"
						rel="noopener noreferrer"
					>
						capturing
					</Link>{" "}
					the beauty around me, and deep dive in the world of personal finance.
				</AboutMeParagraph>
			</AboutMeContainer>
		</AboutMeSectionBlock>
	);
};
