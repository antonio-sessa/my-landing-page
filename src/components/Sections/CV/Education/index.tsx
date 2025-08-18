"use client";

import styled from "styled-components";
import Badge from "../../../Typography/Badge";
import CardSubtitle from "../../../Typography/CardSubtitle";
import CardTitle from "../../../Typography/CardTitle";
import Paragraph from "../../../Typography/Paragraph";
import SectionTitle from "../../../Typography/SectionTitle";
import BadgeGroup from "../../../UI/BadgeGroup";
import Card from "../../../UI/Card";
import Container from "../../../UI/Container";
import Grid from "../../../UI/Grid";
import Icon from "../../../UI/Icon";
import SectionBlock from "../../../UI/SectionBlock";

const EducationGrid = styled(Grid)`
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Education = () => {
	return (
		<SectionBlock id="education">
			<Container>
				<SectionTitle>Education</SectionTitle>

				<EducationGrid>
					<Card>
						<Icon>🎓</Icon>
						<CardTitle>Master's Degree in Computer Engineering</CardTitle>
						<CardSubtitle>University of Salerno</CardSubtitle>
						<BadgeGroup>
							<Badge>2013 – 2015</Badge>
							<Badge>Grade: 110 / 110</Badge>
						</BadgeGroup>
						<Paragraph>
							Final exam: “Graph matching algorithms for Social Network
							Analysis”
						</Paragraph>
					</Card>

					<Card>
						<Icon>🎓</Icon>
						<CardTitle>Bachelor's Degree in Computer Engineering</CardTitle>
						<CardSubtitle>University of Salerno</CardSubtitle>
						<BadgeGroup>
							<Badge>2008 – 2013</Badge>
							<Badge>Grade: 99 / 110</Badge>
						</BadgeGroup>
						<Paragraph>
							Final exam: "Searching for relationships between users in a
							learning community using SNA techniques"
						</Paragraph>
					</Card>
				</EducationGrid>
			</Container>
		</SectionBlock>
	);
};
