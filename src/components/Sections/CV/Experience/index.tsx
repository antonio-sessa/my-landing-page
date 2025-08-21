"use client";

import styled from "styled-components";
import Badge from "../../../Typography/Badge";
import CardTitle from "../../../Typography/CardTitle";
import { Link } from "../../../Typography/Link";
import Mark from "../../../Typography/Mark";
import SectionTitle from "../../../Typography/SectionTitle";
import Card from "../../../UI/Card";
import CardList from "../../../UI/CardList";
import CompanyLogo from "../../../UI/CompanyLogo";
import Container from "../../../UI/Container";
import List from "../../../UI/List";
import ListItem from "../../../UI/ListItem";
import SectionBlock from "../../../UI/SectionBlock";

const ExperienceCard = styled(Card)`
  text-align: left;
`;

const ExperienceCardHeader = styled.div`
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

export const Experience = () => {
	return (
		<SectionBlock id="experience">
			<Container>
				<SectionTitle>Professional Experience</SectionTitle>

				<CardList>
					<ExperienceCard>
						<ExperienceCardHeader>
							<JobPositionInfo>
								<CardTitle>Senior QA Engineer</CardTitle>

								<CompanyLogo
									src="/media/logos/prontopro.png"
									alt="ProntoPro S.r.l."
									href="https://www.prontopro.it"
								/>
							</JobPositionInfo>
							<Badge>Jan 2024 - Present</Badge>
						</ExperienceCardHeader>
						<List>
							<ListItem>
								Currently <Mark>Senior Engineer S2</Mark>, accordingly to this{" "}
								<Link
									href="https://homeruntech.notion.site/Career-Path-a52844ab8ee34c87a24fd8759b701e12"
									target="_blank"
									rel="noopener noreferrer"
								>
									Career Path
								</Link>
							</ListItem>
							<ListItem>
								<Mark>Support Product and technical roadmaps definition</Mark>
							</ListItem>
							<ListItem>
								Implementation of a <Mark>Company Status Page</Mark> to manage
								and monitor alerts
							</ListItem>
							<ListItem>
								Experience with working with highly scalable, maintainable code
							</ListItem>
							<ListItem>
								Development of a <Mark>toolkit in Typescript</Mark> to generate
								test scenarios, <Mark>orchestrated in AWS Lambda</Mark> and
								<Mark>monitored via CloudWatch + Slack</Mark>
							</ListItem>
							<ListItem>
								Experience with <Mark>GitHub Actions</Mark> and containerised
								environment (Docker)
							</ListItem>
							<ListItem>
								Dialogue with Customer Care and Customer Experience teams, to
								provide mitigations and report bugs to the Engineering team
							</ListItem>
						</List>
					</ExperienceCard>

					<ExperienceCard>
						<ExperienceCardHeader>
							<JobPositionInfo>
								<CardTitle>QA Engineer</CardTitle>

								<CompanyLogo
									src="/media/logos/prontopro.png"
									alt="ProntoPro S.r.l."
									href="https://www.prontopro.it"
								/>
							</JobPositionInfo>
							<Badge>May 2022 - Dec 2023</Badge>
						</ExperienceCardHeader>
						<List>
							<ListItem>
								<Link
									href="https://basecamp.com/shapeup"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Mark>Shift-Left approach</Mark>
								</Link>{" "}
								to ensure consistency and solidity of applications during new
								features design processes
							</ListItem>
							<ListItem>
								Active participation to backlog refining process
							</ListItem>
							<ListItem>
								<Mark>
									Validation and verification of new features developed
								</Mark>
							</ListItem>
							<ListItem>
								Design and coding of an <Mark>automated e2e test suite</Mark>
								(Cypress/WebdriverIO)
							</ListItem>
						</List>
					</ExperienceCard>

					<ExperienceCard>
						<ExperienceCardHeader>
							<JobPositionInfo>
								<CardTitle>QA Test Lead and Business Analyst</CardTitle>

								<CompanyLogo
									src="/media/logos/sky.png"
									alt="Sky Italia S.r.l."
									href="https://www.sky.it"
								/>
							</JobPositionInfo>
							<Badge>Jan 2017 - May 2022</Badge>
						</ExperienceCardHeader>
						<List>
							<ListItem>
								<Mark>Monitoring a manual testers group</Mark>
							</ListItem>
							<ListItem>
								Functional tests design and use cases development
							</ListItem>
							<ListItem>
								<Mark>Activities cost estimation</Mark> - both man-days and
								equipment
							</ListItem>
							<ListItem>
								Process management, analysis and validation results export
							</ListItem>
							<ListItem>
								Exchanges with PO about final Customer Experience
							</ListItem>
							<ListItem>
								Verification and analysis management of Field Trial feedbacks
							</ListItem>
							<ListItem>
								<Mark>Supporting Incident Management activities</Mark> coming
								from Sky Go Real Customers
							</ListItem>
						</List>
					</ExperienceCard>

					<ExperienceCard>
						<ExperienceCardHeader>
							<JobPositionInfo>
								<CardTitle>QA Test Engineer</CardTitle>

								<CompanyLogo
									src="/media/logos/sky.png"
									alt="Sky Italia S.r.l."
									href="https://www.sky.it"
								/>
							</JobPositionInfo>
							<Badge>Sep 2015 - Jan 2017</Badge>
						</ExperienceCardHeader>
						<List>
							<ListItem>
								Software validation and verification of satellite transmission
								devices, using Agile methodology.
							</ListItem>
						</List>
					</ExperienceCard>
				</CardList>
			</Container>
		</SectionBlock>
	);
};
