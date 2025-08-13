import styled from "styled-components";
import type { SectionProps } from "../../../types/section-pros";
import CardTitle from "../../Typography/CardTitle";
import List from "../../Typography/List";
import Mark from "../../Typography/Mark";
import SectionTitle from "../../Typography/SectionTitle";
import Badge from "../../UI/Badge";
import Card from "../../UI/Card";
import CardHeader from "../../UI/CardHeader";
import CardList from "../../UI/CardList";
import CompanyLogo from "../../UI/CompanyLogo";
import Container from "../../UI/Container";
import SectionBlock from "../../UI/SectionBlock";

const ExperienceCard = styled(Card)<{ $cardBackground?: string }>`
  text-align: left;
`;

const ExperienceCardHeader = styled(CardHeader)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0;
`;

const JobPositionInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Experience = ({ cardBackground }: SectionProps) => {
	return (
		<SectionBlock id="experience">
			<Container>
				<SectionTitle>Professional Experience</SectionTitle>

				<CardList>
					<ExperienceCard $cardBackground={cardBackground}>
						<ExperienceCardHeader>
							<JobPositionInfo>
								<CardTitle>Senior QA Engineer</CardTitle>

								<CompanyLogo
									src="/media/images/logos/prontopro.png"
									alt="ProntoPro S.r.l."
									href="https://www.prontopro.it"
								/>
							</JobPositionInfo>
							<Badge>Jan 2024 - Present</Badge>
						</ExperienceCardHeader>
						<List>
							<li>
								Currently <Mark>Senior Engineer S2</Mark>, accordingly to this{" "}
								<a
									href="https://homeruntech.notion.site/Career-Path-a52844ab8ee34c87a24fd8759b701e12"
									target="_blank"
									rel="noopener noreferrer"
								>
									Career Path
								</a>
							</li>
							<li>
								<Mark>Support Product and technical roadmaps definition</Mark>
							</li>
							<li>
								Implementation of a <Mark>Company Status Page</Mark> to manage
								and monitor alerts
							</li>
							<li>
								Experience with working with highly scalable, maintainable code
							</li>
							<li>
								Development of a <Mark>toolkit in Typescript</Mark> to generate
								test scenarios, <Mark>orchestrated in AWS Lambda</Mark> and
								<Mark>monitored via CloudWatch + Slack</Mark>
							</li>
							<li>
								Experience with <Mark>GitHub Actions</Mark> and containerised
								environment (Docker)
							</li>
							<li>
								Dialogue with Customer Care and Customer Experience teams, to
								provide mitigations and report bugs to the Engineering team
							</li>
						</List>
					</ExperienceCard>

					<ExperienceCard $cardBackground={cardBackground}>
						<ExperienceCardHeader>
							<JobPositionInfo>
								<CardTitle>QA Engineer</CardTitle>

								<CompanyLogo
									src="/media/images/logos/prontopro.png"
									alt="ProntoPro S.r.l."
									href="https://www.prontopro.it"
								/>
							</JobPositionInfo>
							<Badge>May 2022 - Dec 2023</Badge>
						</ExperienceCardHeader>
						<List>
							<li>
								<a
									href="https://basecamp.com/shapeup"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Mark>Shift-Left approach</Mark>
								</a>{" "}
								to ensure consistency and solidity of applications during new
								features design processes
							</li>
							<li>Active participation to backlog refining process</li>
							<li>
								<Mark>
									Validation and verification of new features developed
								</Mark>
							</li>
							<li>
								Design and coding of an <Mark>automated e2e test suite</Mark>
								(Cypress/WebdriverIO)
							</li>
						</List>
					</ExperienceCard>

					<ExperienceCard $cardBackground={cardBackground}>
						<ExperienceCardHeader>
							<JobPositionInfo>
								<CardTitle>QA Test Lead and Business Analyst</CardTitle>

								<CompanyLogo
									src="/media/images/logos/sky.png"
									alt="Sky Italia S.r.l."
									href="https://www.sky.it"
								/>
							</JobPositionInfo>
							<Badge>Jan 2017 - May 2022</Badge>
						</ExperienceCardHeader>
						<List>
							<li>
								<Mark>Monitoring a manual testers group</Mark>
							</li>
							<li>Functional tests design and use cases development</li>
							<li>
								<Mark>Activities cost estimation</Mark> - both man-days and
								equipment
							</li>
							<li>
								Process management, analysis and validation results export
							</li>
							<li>Exchanges with PO about final Customer Experience</li>
							<li>
								Verification and analysis management of Field Trial feedbacks
							</li>
							<li>
								<Mark>Supporting Incident Management activities</Mark> coming
								from Sky Go Real Customers
							</li>
						</List>
					</ExperienceCard>

					<ExperienceCard $cardBackground={cardBackground}>
						<ExperienceCardHeader>
							<JobPositionInfo>
								<CardTitle>QA Test Engineer</CardTitle>

								<CompanyLogo
									src="/media/images/logos/sky.png"
									alt="Sky Italia S.r.l."
									href="https://www.sky.it"
								/>
							</JobPositionInfo>
							<Badge>Sep 2015 - Jan 2017</Badge>
						</ExperienceCardHeader>
						<List>
							<li>
								Software validation and verification of satellite transmission
								devices, using Agile methodology.
							</li>
						</List>
					</ExperienceCard>
				</CardList>
			</Container>
		</SectionBlock>
	);
};
