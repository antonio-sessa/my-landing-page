"use client";

import styled from "styled-components";
import type { SectionProps } from "../../../../types/section-pros";
import Paragraph from "../../../Typography/Paragraph";
import Container from "../../../UI/Container";
import SectionBlock from "../../../UI/SectionBlock";

const AboutMeSectionBlock = styled(SectionBlock)`
  box-sizing: border-box;
`;

const AboutMeContainer = styled(Container)<{ $cardBackground?: string }>`
  max-width: 48rem;
  text-align: left;
  background: ${({ $cardBackground }) =>
		$cardBackground ?? "rgba(31, 41, 55, 0.85)"};
  backdrop-filter: blur(10px);
  border: none;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
  border-radius: 0.5rem;
  padding: 1.5rem;
  color: inherit;
`;

export const AboutMe = ({ cardBackground }: SectionProps) => {
	return (
		<AboutMeSectionBlock id="about">
			<AboutMeContainer $cardBackground={cardBackground}>
				<Paragraph>
					<em>
						“Give me a lever, a place to stand and well-done investigation, and
						I will move the earth.”
					</em>{" "}
					- Archimedes’ semi-cit.
				</Paragraph>
				<Paragraph>
					I was born as tireless curious. I’m a proactive guy, used to knowledge
					sharing and receiving feedbacks (whether positive or negative).
				</Paragraph>
				<Paragraph>
					In my spare time I enjoy{" "}
					<a
						href="https://unsplash.com/it/@antony_sex"
						target="_blank"
						rel="noopener noreferrer"
					>
						capturing
					</a>{" "}
					the beauty around me, and deep dive in the world of personal finance.
				</Paragraph>
			</AboutMeContainer>
		</AboutMeSectionBlock>
	);
};
