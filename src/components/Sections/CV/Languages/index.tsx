"use client";

import styled from "styled-components";
import Badge from "../../../Typography/Badge";
import CardSubtitle from "../../../Typography/CardSubtitle";
import CardTitle from "../../../Typography/CardTitle";
import SectionTitle from "../../../Typography/SectionTitle";
import Card from "../../../UI/Card";
import Container from "../../../UI/Container";
import Grid from "../../../UI/Grid";
import SectionBlock from "../../../UI/SectionBlock";

const LanguagesGrid = styled(Grid)`
  max-width: 32rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Languages = () => {
	return (
		<SectionBlock id="languages">
			<Container>
				<SectionTitle>Languages</SectionTitle>

				<LanguagesGrid>
					<Card>
						<CardTitle>Italian</CardTitle>
						<CardSubtitle>Native Speaker</CardSubtitle>
						<Badge>C2</Badge>
					</Card>

					<Card>
						<CardTitle>English</CardTitle>
						<CardSubtitle>Professional Working Proficiency</CardSubtitle>
						<Badge>B2</Badge>
					</Card>
				</LanguagesGrid>
			</Container>
		</SectionBlock>
	);
};
