import styled from "styled-components";
import CardTitle from "../../Typography/CardTitle";
import Tag from "../../Typography/Tag";

type SkillsProps = {
	cardBackground?: string;
};

const SkillsSection = styled.section`
  padding: 2rem 1rem;
  width: 100%;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h3`
  font-size: 1.875rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  color: inherit;
`;

const SkillsGrid = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SkillCard = styled.div<{ $cardBackground?: string }>`
  background: ${({ $cardBackground }) =>
		$cardBackground ?? "rgba(31, 41, 55, 0.85)"};
  color: inherit;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.7);
  }
`;

const CardHeader = styled.div`
  padding: 1.5rem 1.5rem 0;
`;

const Icon = styled.span`
  font-size: 1.25rem;
  color: #60a5fa; /* accent blue */
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Skills = ({ cardBackground }: SkillsProps) => {
	return (
		<SkillsSection id="skills">
			<Container>
				<SectionTitle>Skills & Expertise</SectionTitle>

				<SkillsGrid>
					<SkillCard $cardBackground={cardBackground}>
						<CardHeader>
							<CardTitle>
								<Icon>🧪</Icon> Hard skills
							</CardTitle>
						</CardHeader>
						<CardContent>
							<SkillTags>
								<Tag highlighted>Debugging</Tag>
								<Tag>Requirements analysis</Tag>
								<Tag>Testbook management</Tag>
								<Tag highlighted>Defect and bug management</Tag>
								<Tag>Reporting and KPIs</Tag>
								<Tag>User experience</Tag>
								<Tag highlighted>Manual and Automated tests</Tag>
								<Tag highlighted>No Regression and Acceptance tests</Tag>
							</SkillTags>
						</CardContent>
					</SkillCard>

					<SkillCard $cardBackground={cardBackground}>
						<CardHeader>
							<CardTitle>
								<Icon>🧪</Icon> Soft skills
							</CardTitle>
						</CardHeader>
						<CardContent>
							<SkillTags>
								<Tag highlighted>Teamwork</Tag>
								<Tag>Problem Solving</Tag>
								<Tag highlighted>Adaptability</Tag>
								<Tag highlighted>Critical thinking</Tag>
								<Tag>Emotional Intelligence</Tag>
								<Tag>Time management</Tag>
							</SkillTags>
						</CardContent>
					</SkillCard>

					<SkillCard $cardBackground={cardBackground}>
						<CardHeader>
							<CardTitle>
								<Icon>💻</Icon> Used technologies
							</CardTitle>
						</CardHeader>
						<CardContent>
							<SkillTags>
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
							</SkillTags>
						</CardContent>
					</SkillCard>
				</SkillsGrid>
			</Container>
		</SkillsSection>
	);
};
