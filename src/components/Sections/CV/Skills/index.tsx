"use client";

import styled from "styled-components";
import Badge from "../../../Typography/Badge";
import CardTitle from "../../../Typography/CardTitle";
import SectionTitle from "../../../Typography/SectionTitle";
import BadgeGroup from "../../../UI/BadgeGroup";
import Card from "../../../UI/Card";
import Container from "../../../UI/Container";
import Grid from "../../../UI/Grid";
import Icon from "../../../UI/Icon";
import SectionBlock from "../../../UI/SectionBlock";

const SkillsCard = styled(Card)`
  text-align: left;
  overflow: hidden;
  padding: 0rem;
`;

const SkillsCardTitle = styled(CardTitle)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1.5rem 1.5rem 0;
`;

const SkillsIcon = styled(Icon)`
  font-size: 1.25rem;
  margin: 0; 
  flex-shrink: 0;  
`;

export const Skills = () => {
	return (
		<SectionBlock id="skills">
			<Container>
				<SectionTitle>Skills & Expertise</SectionTitle>

				<Grid>
					<SkillsCard>
						<SkillsCardTitle>
							<SkillsIcon>🧪</SkillsIcon> Hard skills
						</SkillsCardTitle>

						<BadgeGroup align="left">
							<Badge highlighted>Debugging</Badge>
							<Badge>Requirements analysis</Badge>
							<Badge>Testbook management</Badge>
							<Badge highlighted>Defect and bug management</Badge>
							<Badge>Reporting and KPIs</Badge>
							<Badge>User experience</Badge>
							<Badge highlighted>Manual and Automated tests</Badge>
							<Badge highlighted>No Regression tests</Badge>
							<Badge highlighted>Acceptance tests</Badge>
						</BadgeGroup>
					</SkillsCard>

					<SkillsCard>
						<SkillsCardTitle>
							<SkillsIcon>🧪</SkillsIcon> Soft skills
						</SkillsCardTitle>

						<BadgeGroup align="left">
							<Badge highlighted>Teamwork</Badge>
							<Badge>Problem Solving</Badge>
							<Badge highlighted>Adaptability</Badge>
							<Badge highlighted>Critical thinking</Badge>
							<Badge>Emotional Intelligence</Badge>
							<Badge>Time management</Badge>
						</BadgeGroup>
					</SkillsCard>

					<SkillsCard>
						<SkillsCardTitle>
							<SkillsIcon>💻</SkillsIcon> Used technologies
						</SkillsCardTitle>

						<BadgeGroup align="left">
							<Badge>Asana</Badge>
							<Badge>Figma</Badge>
							<Badge>Miro</Badge>
							<Badge>Datadog</Badge>
							<Badge highlighted>Typescript</Badge>
							<Badge>Postman</Badge>
							<Badge highlighted>Cypress</Badge>
							<Badge>WebdriverIO</Badge>
							<Badge highlighted>AWS Lambda</Badge>
							<Badge>CloudWatch</Badge>
							<Badge highlighted>Play Console</Badge>
							<Badge highlighted>App Store Connect</Badge>
							<Badge>Jira</Badge>
							<Badge>Confluence</Badge>
						</BadgeGroup>
					</SkillsCard>
				</Grid>
			</Container>
		</SectionBlock>
	);
};
