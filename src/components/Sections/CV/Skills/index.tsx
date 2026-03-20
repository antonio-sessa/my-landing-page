"use client";

import styled from "styled-components";
import CardTitle from "../../../Typography/CardTitle";
import SectionTitle from "../../../Typography/SectionTitle";
import Card from "../../../UI/Card";
import Container from "../../../UI/Container";
import Icon from "../../../UI/Icon";
import SectionBlock from "../../../UI/SectionBlock";

const SkillsGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SkillsCard = styled(Card)`
  text-align: left;
  overflow: hidden;
  padding: 0;
`;

const SkillsCardTitle = styled(CardTitle)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1.25rem 1.5rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`;

const SkillsIcon = styled(Icon)`
  font-size: 1.25rem;
  margin: 0;
  flex-shrink: 0;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0.75rem 1.5rem 1.25rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SkillRow = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SkillName = styled.span`
  font-size: 0.9rem;
  color: inherit;
  opacity: 0.9;
  white-space: nowrap;
`;

const Dots = styled.span`
  flex: 1;
  border-bottom: 1px dotted rgba(255, 255, 255, 0.15);
  margin-bottom: 2px;
`;

const ProficiencyBadge = styled.span<{
	$level: "Expert" | "Proficient" | "Familiar";
}>`
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  flex-shrink: 0;

  ${({ $level }) => {
		switch ($level) {
			case "Expert":
				return `
          background: rgba(34, 197, 94, 0.15);
          color: #4ade80;
          border: 1px solid rgba(34, 197, 94, 0.25);
        `;
			case "Proficient":
				return `
          background: rgba(59, 130, 246, 0.15);
          color: #60a5fa;
          border: 1px solid rgba(59, 130, 246, 0.25);
        `;
			case "Familiar":
				return `
          background: rgba(148, 163, 184, 0.15);
          color: #94a3b8;
          border: 1px solid rgba(148, 163, 184, 0.25);
        `;
		}
	}}
`;

type Skill = { name: string; level: "Expert" | "Proficient" | "Familiar" };

const coreExpertise: Skill[] = [
	{ name: "Manual & Automated testing", level: "Expert" },
	{ name: "Regression testing", level: "Expert" },
	{ name: "Acceptance testing", level: "Expert" },
	{ name: "Defect & bug management", level: "Expert" },
	{ name: "Requirements analysis", level: "Expert" },
	{ name: "Debugging", level: "Expert" },
	{ name: "Reporting & KPIs", level: "Expert" },
	{ name: "Testbook management", level: "Expert" },
	{ name: "User experience", level: "Expert" },
];

const toolsAndTesting: Skill[] = [
	{ name: "Cypress", level: "Proficient" },
	{ name: "WebdriverIO", level: "Familiar" },
	{ name: "Postman", level: "Proficient" },
	{ name: "Play Console", level: "Expert" },
	{ name: "App Store Connect", level: "Expert" },
];

const cloudMonitoring: Skill[] = [
	{ name: "AWS Lambda", level: "Proficient" },
	{ name: "CloudWatch", level: "Proficient" },
	{ name: "Datadog", level: "Expert" },
];

const projectManagement: Skill[] = [
	{ name: "Jira", level: "Proficient" },
	{ name: "Confluence", level: "Proficient" },
	{ name: "Asana", level: "Expert" },
	{ name: "Figma", level: "Proficient" },
	{ name: "Miro", level: "Expert" },
];

const SkillCard = ({
	icon,
	title,
	skills,
}: {
	icon: string;
	title: string;
	skills: Skill[];
}) => (
	<SkillsCard>
		<SkillsCardTitle>
			<SkillsIcon>{icon}</SkillsIcon> {title}
		</SkillsCardTitle>
		<SkillList>
			{skills.map((skill) => (
				<SkillRow key={skill.name}>
					<SkillName>{skill.name}</SkillName>
					<Dots />
					<ProficiencyBadge $level={skill.level}>
						{skill.level}
					</ProficiencyBadge>
				</SkillRow>
			))}
		</SkillList>
	</SkillsCard>
);

export const Skills = () => {
	return (
		<SectionBlock id="skills">
			<Container>
				<SectionTitle>Skills & Expertise</SectionTitle>
				<SkillsGrid>
					<SkillCard icon="🎯" title="Core expertise" skills={coreExpertise} />
					<SkillCard
						icon="🧪"
						title="Tools & testing"
						skills={toolsAndTesting}
					/>
					<SkillCard
						icon="☁️"
						title="Cloud & monitoring"
						skills={cloudMonitoring}
					/>
					<SkillCard
						icon="📋"
						title="Project management"
						skills={projectManagement}
					/>
				</SkillsGrid>
			</Container>
		</SectionBlock>
	);
};
