import styled from "styled-components";
import CompanyLogo from "../../CompanyLogo";
import CardTitle from "../../Typography/CardTitle";
import List from "../../Typography/List";
import Mark from "../../Typography/Mark";

type ExperienceProps = {
	cardBackground?: string;
};

const ExperienceSection = styled.section`
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

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ExperienceCard = styled.div<{ $cardBackground?: string }>`
  background: ${({ $cardBackground }) =>
		$cardBackground ?? "rgba(31, 41, 55, 0.85)"};
  border-radius: 0.5rem;
  padding: 1.5rem;
  color: inherit;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.7);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const JobInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const DateBadge = styled.span`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #374151;
  color: #d1d5db;
  padding: 0.25rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  white-space: nowrap;
`;

export const Experience = ({ cardBackground }: ExperienceProps) => {
	return (
		<ExperienceSection id="experience">
			<Container>
				<SectionTitle>Professional Experience</SectionTitle>

				<ExperienceList>
					<ExperienceCard $cardBackground={cardBackground}>
						<CardHeader>
							<JobInfo>
								<CardTitle>Senior QA Engineer</CardTitle>

								<CompanyLogo
									src="/media/images/prontopro_logo.png"
									alt="ProntoPro S.r.l."
									href="https://www.prontopro.it"
								/>
							</JobInfo>
							<DateBadge>Jan 2024 - Present</DateBadge>
						</CardHeader>
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
						<CardHeader>
							<JobInfo>
								<CardTitle>QA Engineer</CardTitle>

								<CompanyLogo
									src="/media/images/prontopro_logo.png"
									alt="ProntoPro S.r.l."
									href="https://www.prontopro.it"
								/>
							</JobInfo>
							<DateBadge>May 2022 - Dec 2023</DateBadge>
						</CardHeader>
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
						<CardHeader>
							<JobInfo>
								<CardTitle>QA Test Lead and Business Analyst</CardTitle>

								<CompanyLogo
									src="/media/images/sky_logo.png"
									alt="Sky Italia S.r.l."
									href="https://www.sky.it"
								/>
							</JobInfo>
							<DateBadge>Jan 2017 - May 2022</DateBadge>
						</CardHeader>
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
						<CardHeader>
							<JobInfo>
								<CardTitle>QA Test Engineer</CardTitle>

								<CompanyLogo
									src="/media/images/sky_logo.png"
									alt="Sky Italia S.r.l."
									href="https://www.sky.it"
								/>
							</JobInfo>
							<DateBadge>Sep 2015 - Jan 2017</DateBadge>
						</CardHeader>
						<List>
							<li>
								Software validation and verification of satellite transmission
								devices, using Agile methodology.
							</li>
						</List>
					</ExperienceCard>
				</ExperienceList>
			</Container>
		</ExperienceSection>
	);
};
