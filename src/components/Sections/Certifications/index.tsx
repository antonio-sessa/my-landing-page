import styled from "styled-components";
import CardSubtitle from "../../Typography/CardSubtitle";
import CardTitle from "../../Typography/CardTitle";

type CertificationsProps = {
	cardBackground?: string;
};

const CertificationsSection = styled.section`
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

const CertificationsGrid = styled.div`
  display: grid;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CertificationCard = styled.div<{ $cardBackground?: string }>`
  background: ${({ $cardBackground }) =>
		$cardBackground ?? "rgba(31, 41, 55, 0.85)"};
  border-radius: 0.5rem;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
  color: inherit;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.7);
  }
`;

const Icon = styled.div`
  font-size: 3rem;
  margin: 0 auto 1rem;
  color: #60a5fa;
`;

const DateBadge = styled.span`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #374151;
  color: #d1d5db;
  padding: 0.25rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  display: inline-block;
  margin-top: 0.5rem;
`;

export const Certifications = ({ cardBackground }: CertificationsProps) => {
	return (
		<CertificationsSection id="certifications">
			<Container>
				<SectionTitle>Certifications & Achievements</SectionTitle>

				<CertificationsGrid>
					<CertificationCard $cardBackground={cardBackground}>
						<Icon>🔖</Icon>
						<CardTitle>
							ISTQB® Automation Engineer
							<br />
							(CT-TAE)
						</CardTitle>
						<CardSubtitle>
							International Software Testing Qualifications Board
						</CardSubtitle>
						<DateBadge>Dec 2023</DateBadge>
					</CertificationCard>

					<CertificationCard $cardBackground={cardBackground}>
						<Icon>🔖</Icon>
						<CardTitle>
							ISTQB® Foundation Level
							<br />
							(CTFL)
						</CardTitle>
						<CardSubtitle>
							International Software Testing Qualifications Board
						</CardSubtitle>
						<DateBadge>Jul 2023</DateBadge>
					</CertificationCard>

					<CertificationCard $cardBackground={cardBackground}>
						<Icon>🔖</Icon>
						<CardTitle>
							Professional Scrum Master I<br />
							(PSM™ I)
						</CardTitle>
						<CardSubtitle>Scrum.org</CardSubtitle>
						<DateBadge>Mar 2020</DateBadge>
					</CertificationCard>

					<CertificationCard $cardBackground={cardBackground}>
						<Icon>📜</Icon>
						<CardTitle>
							First Certificate in English (FCE)
							<br />
							B2 level
						</CardTitle>
						<CardSubtitle>Cambridge Assessment English</CardSubtitle>
						<DateBadge>Jul 2015</DateBadge>
					</CertificationCard>

					<CertificationCard $cardBackground={cardBackground}>
						<Icon>🎓</Icon>
						<CardTitle>
							Engineering practice License
							<br />A section
						</CardTitle>
						<CardSubtitle>University of Salerno</CardSubtitle>
						<DateBadge>Sep 2015</DateBadge>
					</CertificationCard>
				</CertificationsGrid>
			</Container>
		</CertificationsSection>
	);
};
