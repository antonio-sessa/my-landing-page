import styled from "styled-components";
import type { SectionProps } from "../../../types/section-pros";
import Badge from "../../CV/Badge";
import Card from "../../CV/Card";
import Container from "../../CV/Container";
import Grid from "../../CV/Grid";
import SectionBlock from "../../CV/SectionBlock";
import CardSubtitle from "../../Typography/CardSubtitle";
import CardTitle from "../../Typography/CardTitle";
import SectionTitle from "../../Typography/SectionTitle";

const LanguagesGrid = styled(Grid)`
  max-width: 32rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Languages = ({ cardBackground }: SectionProps) => {
	return (
		<SectionBlock id="languages">
			<Container>
				<SectionTitle>Languages</SectionTitle>

				<LanguagesGrid>
					<Card $cardBackground={cardBackground}>
						<CardTitle>Italian</CardTitle>
						<CardSubtitle>Native Speaker</CardSubtitle>
						<Badge>C2</Badge>
					</Card>

					<Card $cardBackground={cardBackground}>
						<CardTitle>English</CardTitle>
						<CardSubtitle>Professional Working Proficiency</CardSubtitle>
						<Badge>B2</Badge>
					</Card>
				</LanguagesGrid>
			</Container>
		</SectionBlock>
	);
};
