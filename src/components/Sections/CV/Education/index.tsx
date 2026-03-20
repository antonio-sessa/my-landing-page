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

const EducationGrid = styled(Grid)`
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const EducationCard = styled(Card)`
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.5rem;
`;

const EducationCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const GradeBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(34, 197, 94, 0.12);
  border: 1px solid rgba(34, 197, 94, 0.25);
  color: #4ade80;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  width: fit-content;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  margin: 0;
`;

const ThesisLabel = styled.span`
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.4;
  display: block;
  margin-bottom: 0.25rem;
`;

const ThesisText = styled.p`
  font-size: 0.875rem;
  opacity: 0.75;
  line-height: 1.6;
  font-style: italic;
  margin: 0;
`;

export const Education = () => {
	return (
		<SectionBlock id="education">
			<Container>
				<SectionTitle>Education</SectionTitle>

				<EducationGrid>
					<EducationCard>
						<EducationCardHeader>
							<TitleGroup>
								<CardTitle>Master's Degree in Computer Engineering</CardTitle>
								<CardSubtitle>University of Salerno</CardSubtitle>
							</TitleGroup>
							<Badge>2013 – 2015</Badge>
						</EducationCardHeader>
						<GradeBadge>🎓 110 / 110</GradeBadge>
						<Divider />
						<div>
							<ThesisLabel>Thesis</ThesisLabel>
							<ThesisText>
								Graph matching algorithms for Social Network Analysis
							</ThesisText>
						</div>
					</EducationCard>

					<EducationCard>
						<EducationCardHeader>
							<TitleGroup>
								<CardTitle>Bachelor's Degree in Computer Engineering</CardTitle>
								<CardSubtitle>University of Salerno</CardSubtitle>
							</TitleGroup>
							<Badge>2008 – 2013</Badge>
						</EducationCardHeader>
						<GradeBadge>🎓 99 / 110</GradeBadge>
						<Divider />
						<div>
							<ThesisLabel>Thesis</ThesisLabel>
							<ThesisText>
								Searching for relationships between users in a learning
								community using SNA techniques
							</ThesisText>
						</div>
					</EducationCard>
				</EducationGrid>
			</Container>
		</SectionBlock>
	);
};
