import styled from "styled-components";
import BadgeGroup from "../../Typography/BadgeGroup";
import CardSubtitle from "../../Typography/CardSubtitle";
import CardTitle from "../../Typography/CardTitle";
import Description from "../../Typography/Description";
import Tag from "../../Typography/Tag";

type EducationProps = {
	cardBackground?: string;
};

const EducationSection = styled.section`
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

const EducationGrid = styled.div`
  display: grid;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const EducationCard = styled.div<{ cardBackground?: string }>`
  background-color: ${({ cardBackground }) =>
		cardBackground ?? "rgba(31, 41, 55, 0.85)"};
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

export const Education = ({ cardBackground }: EducationProps) => {
	return (
		<EducationSection id="education">
			<Container>
				<SectionTitle>Education</SectionTitle>

				<EducationGrid>
					<EducationCard cardBackground={cardBackground}>
						<Icon>🎓</Icon>
						<CardTitle>Master's Degree in Computer Engineering</CardTitle>
						<CardSubtitle>University of Salerno</CardSubtitle>
						<BadgeGroup>
							<Tag>2013 – 2015</Tag>
							<Tag label="Grade:">110 / 110</Tag>
						</BadgeGroup>
						<Description>
							Final exam: “Graph matching algorithms for Social Network
							Analysis”
						</Description>
					</EducationCard>

					<EducationCard cardBackground={cardBackground}>
						<Icon>🎓</Icon>
						<CardTitle>Bachelor's Degree in Computer Engineering</CardTitle>
						<CardSubtitle>University of Salerno</CardSubtitle>
						<BadgeGroup>
							<Tag>2008 – 2013</Tag>
							<Tag label="Grade:">99 / 110</Tag>
						</BadgeGroup>
						<Description>
							Final exam: "Searching for relationships between users in a
							learning community using SNA techniques"
						</Description>
					</EducationCard>
				</EducationGrid>
			</Container>
		</EducationSection>
	);
};
