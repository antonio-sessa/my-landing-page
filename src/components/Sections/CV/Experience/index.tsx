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

const NarrativeText = styled.p`
  margin: 0 0 0.75rem 0;
  line-height: 1.75;
  font-size: 0.95rem;
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
									src="/media/logos/prontopro.webp"
									alt="ProntoPro S.r.l."
									href="https://www.prontopro.it"
								/>
							</JobPositionInfo>
							<Badge>Jan 2024 - Present</Badge>
						</ExperienceCardHeader>
						<NarrativeText>
							Promoted to{" "}
							<Link
								href="https://homeruntech.notion.site/Career-Path-a52844ab8ee34c87a24fd8759b701e12"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Mark>Senior Engineer S2</Mark>
							</Link>
							, I now sit at the intersection of product, engineering, and
							reliability - contributing to both technical and product roadmaps
							and acting as a bridge between Customer Care and Engineering.
						</NarrativeText>
						<List>
							<ListItem>
								Built a <Mark>Company Status Page</Mark> for real-time system
								health monitoring, reducing incident response time
							</ListItem>
							<ListItem>
								Developed a <Mark>TypeScript toolkit</Mark> to generate test
								scenarios at scale, orchestrated in <Mark>AWS Lambda</Mark> and
								monitored via <Mark>CloudWatch + Slack</Mark>
							</ListItem>
							<ListItem>
								Hands-on with <Mark>GitHub Actions</Mark> and containerised
								environments (Docker)
							</ListItem>
						</List>
					</ExperienceCard>

					<ExperienceCard>
						<ExperienceCardHeader>
							<JobPositionInfo>
								<CardTitle>QA Engineer</CardTitle>
								<CompanyLogo
									src="/media/logos/prontopro.webp"
									alt="ProntoPro S.r.l."
									href="https://www.prontopro.it"
								/>
							</JobPositionInfo>
							<Badge>May 2022 - Dec 2023</Badge>
						</ExperienceCardHeader>
						<NarrativeText>
							I joined ProntoPro to bring quality upstream, adopting a{" "}
							<Link
								href="https://basecamp.com/shapeup"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Mark>Shift-Left approach</Mark>
							</Link>{" "}
							that involves QA from the design stage, not just at the end of a
							sprint.
						</NarrativeText>
						<List>
							<ListItem>
								Active participation in backlog refinement to catch ambiguities
								early
							</ListItem>
							<ListItem>
								<Mark>Validation and verification</Mark> of new features
								developed
							</ListItem>
							<ListItem>
								Designed and coded an <Mark>automated e2e test suite</Mark>{" "}
								using Cypress and WebdriverIO
							</ListItem>
						</List>
					</ExperienceCard>

					<ExperienceCard>
						<ExperienceCardHeader>
							<JobPositionInfo>
								<CardTitle>QA Test Lead and Business Analyst</CardTitle>
								<CompanyLogo
									src="/media/logos/sky.webp"
									alt="Sky Italia S.r.l."
									href="https://www.sky.it"
								/>
							</JobPositionInfo>
							<Badge>Jan 2017 - May 2022</Badge>
						</ExperienceCardHeader>
						<NarrativeText>
							Over five years at Sky, I grew from individual contributor to{" "}
							<Mark>team lead</Mark>, managing a group of manual testers while
							owning the broader quality strategy across product and
							engineering.
						</NarrativeText>
						<List>
							<ListItem>
								Functional tests design, use cases development and{" "}
								<Mark>activities cost estimation</Mark>
							</ListItem>
							<ListItem>
								Worked closely with POs to align quality goals with the final
								Customer Experience
							</ListItem>
							<ListItem>
								Managed <Mark>Field Trial feedback</Mark> from real users and
								fed insights back into the product cycle
							</ListItem>
							<ListItem>
								<Mark>Supported Incident Management</Mark> for Sky Go's live
								customer base
							</ListItem>
						</List>
					</ExperienceCard>

					<ExperienceCard>
						<ExperienceCardHeader>
							<JobPositionInfo>
								<CardTitle>QA Test Engineer</CardTitle>
								<CompanyLogo
									src="/media/logos/sky.webp"
									alt="Sky Italia S.r.l."
									href="https://www.sky.it"
								/>
							</JobPositionInfo>
							<Badge>Sep 2015 - Jan 2017</Badge>
						</ExperienceCardHeader>
						<NarrativeText>
							My professional starting point: validating and verifying satellite
							transmission devices in an <Mark>Agile</Mark> environment. This
							role gave me a rigorous foundation in structured software testing
							and taught me to work methodically under delivery pressure - a
							mindset I've carried through every role since.
						</NarrativeText>
					</ExperienceCard>
				</CardList>
			</Container>
		</SectionBlock>
	);
};
