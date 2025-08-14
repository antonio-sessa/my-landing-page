"use client";

import styled from "styled-components";
import type { SectionProps } from "../../../../types/section-pros";
import CardTitle from "../../../Typography/CardTitle";
import SectionTitle from "../../../Typography/SectionTitle";
import Card from "../../../UI/Card";
import CardHeader from "../../../UI/CardHeader";
import Container from "../../../UI/Container";
import Grid from "../../../UI/Grid";
import Icon from "../../../UI/Icon";
import SectionBlock from "../../../UI/SectionBlock";
import Tag from "../../../UI/Tag";
import TagGroup from "../../../UI/TagGroup";

const SkillsCard = styled(Card)`
  text-align: left;
  overflow: hidden;
  padding: 0rem;
`;

const SkillsCardTitle = styled(CardTitle)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SkillsIcon = styled(Icon)`
  font-size: 1.25rem;
  margin: 0; 
  flex-shrink: 0;  
`;

export const Skills = ({ cardBackground }: SectionProps) => {
	return (
		<SectionBlock id="skills">
			<Container>
				<SectionTitle>Skills & Expertise</SectionTitle>

				<Grid>
					<SkillsCard $cardBackground={cardBackground}>
						<CardHeader>
							<SkillsCardTitle>
								<SkillsIcon>🧪</SkillsIcon> Hard skills
							</SkillsCardTitle>
						</CardHeader>

						<TagGroup>
							<Tag highlighted>Debugging</Tag>
							<Tag>Requirements analysis</Tag>
							<Tag>Testbook management</Tag>
							<Tag highlighted>Defect and bug management</Tag>
							<Tag>Reporting and KPIs</Tag>
							<Tag>User experience</Tag>
							<Tag highlighted>Manual and Automated tests</Tag>
							<Tag highlighted>No Regression and Acceptance tests</Tag>
						</TagGroup>
					</SkillsCard>

					<SkillsCard $cardBackground={cardBackground}>
						<CardHeader>
							<SkillsCardTitle>
								<SkillsIcon>🧪</SkillsIcon> Soft skills
							</SkillsCardTitle>
						</CardHeader>

						<TagGroup>
							<Tag highlighted>Teamwork</Tag>
							<Tag>Problem Solving</Tag>
							<Tag highlighted>Adaptability</Tag>
							<Tag highlighted>Critical thinking</Tag>
							<Tag>Emotional Intelligence</Tag>
							<Tag>Time management</Tag>
						</TagGroup>
					</SkillsCard>

					<SkillsCard $cardBackground={cardBackground}>
						<CardHeader>
							<SkillsCardTitle>
								<SkillsIcon>💻</SkillsIcon> Used technologies
							</SkillsCardTitle>
						</CardHeader>

						<TagGroup>
							<Tag>Asana</Tag>
							<Tag>Figma</Tag>
							<Tag>Miro</Tag>
							<Tag>Datadog</Tag>
							<Tag highlighted>Typescript</Tag>
							<Tag>Postman</Tag>
							<Tag highlighted>Cypress</Tag>
							<Tag>WebdriverIO</Tag>
							<Tag highlighted>AWS Lambda</Tag>
							<Tag>CloudWatch</Tag>
							<Tag highlighted>Play Console</Tag>
							<Tag highlighted>App Store Connect</Tag>
							<Tag>Jira</Tag>
							<Tag>Confluence</Tag>
						</TagGroup>
					</SkillsCard>
				</Grid>
			</Container>
		</SectionBlock>
	);
};
