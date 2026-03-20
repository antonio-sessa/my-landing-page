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

const SkillsGrid = styled(Grid)`
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 48rem;
    margin: 0 auto;
  }
`;

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

				<SkillsGrid>
					<SkillsCard>
						<SkillsCardTitle>
							<SkillsIcon>🎯</SkillsIcon> Core expertise
						</SkillsCardTitle>

						<BadgeGroup align="left">
							<Badge highlighted>Manual & Automated testing</Badge>
							<Badge highlighted>Regression testing</Badge>
							<Badge highlighted>Acceptance testing</Badge>
							<Badge highlighted>Defect & bug management</Badge>
							<Badge>Requirements analysis</Badge>
							<Badge>Debugging</Badge>
							<Badge>Reporting & KPIs</Badge>
							<Badge>Testbook management</Badge>
							<Badge>User experience</Badge>
						</BadgeGroup>
					</SkillsCard>

					<SkillsCard>
						<SkillsCardTitle>
							<SkillsIcon>💻</SkillsIcon> Tools & technologies
						</SkillsCardTitle>

						<BadgeGroup align="left">
							<Badge highlighted>Cypress</Badge>
							<Badge highlighted>WebdriverIO</Badge>
							<Badge highlighted>TypeScript</Badge>
							<Badge highlighted>AWS Lambda</Badge>
							<Badge highlighted>CloudWatch</Badge>
							<Badge highlighted>Datadog</Badge>
							<Badge>Postman</Badge>
							<Badge>Play Console</Badge>
							<Badge>App Store Connect</Badge>
							<Badge>Jira</Badge>
							<Badge>Confluence</Badge>
							<Badge>Asana</Badge>
							<Badge>Figma</Badge>
							<Badge>Miro</Badge>
						</BadgeGroup>
					</SkillsCard>
				</SkillsGrid>
			</Container>
		</SectionBlock>
	);
};
