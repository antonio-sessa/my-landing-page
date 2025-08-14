"use client";

import styled from "styled-components";
import type { SectionProps } from "../../../../types/section-pros";
import CardSubtitle from "../../../Typography/CardSubtitle";
import CardTitle from "../../../Typography/CardTitle";
import Description from "../../../Typography/Description";
import SectionTitle from "../../../Typography/SectionTitle";
import BadgeGroup from "../../../UI/BadgeGroup";
import Card from "../../../UI/Card";
import Container from "../../../UI/Container";
import Grid from "../../../UI/Grid";
import Icon from "../../../UI/Icon";
import SectionBlock from "../../../UI/SectionBlock";
import Tag from "../../../UI/Tag";

const EducationGrid = styled(Grid)`
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Education = ({ cardBackground }: SectionProps) => {
	return (
		<SectionBlock id="education">
			<Container>
				<SectionTitle>Education</SectionTitle>

				<EducationGrid>
					<Card $cardBackground={cardBackground}>
						<Icon>🎓</Icon>
						<CardTitle>Master's Degree in Computer Engineering</CardTitle>
						<CardSubtitle>University of Salerno</CardSubtitle>
						<BadgeGroup>
							<Tag>2013 – 2015</Tag>
							<Tag label="Grade:">110 / 110</Tag>
						</BadgeGroup>
						<Description>
							Final exam: “Graph matching algorithms for Social Network
							Analysis”
						</Description>
					</Card>

					<Card $cardBackground={cardBackground}>
						<Icon>🎓</Icon>
						<CardTitle>Bachelor's Degree in Computer Engineering</CardTitle>
						<CardSubtitle>University of Salerno</CardSubtitle>
						<BadgeGroup>
							<Tag>2008 – 2013</Tag>
							<Tag label="Grade:">99 / 110</Tag>
						</BadgeGroup>
						<Description>
							Final exam: "Searching for relationships between users in a
							learning community using SNA techniques"
						</Description>
					</Card>
				</EducationGrid>
			</Container>
		</SectionBlock>
	);
};
