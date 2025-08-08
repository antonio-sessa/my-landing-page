import styled from "styled-components";
import CardSubtitle from "../../Typography/CardSubtitle";
import CardTitle from "../../Typography/CardTitle";

type LanguagesProps = {
	cardBackground?: string;
};

const LanguagesSection = styled.section`
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

const LanguagesGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  max-width: 32rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const LanguageCard = styled.div<{ cardBackground?: string }>`
  background: ${({ cardBackground }) =>
		cardBackground ?? "rgba(31, 41, 55, 0.85)"};
  border-radius: 0.5rem;
  padding: 1.5rem;
  text-align: center;
  color: inherit;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.7);
  }
`;

const LevelBadge = styled.span`
  background: rgba(255, 255, 255, 0.05);
  color: #d1d5db;
  padding: 0.25rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  border: 1px solid #374151;
  margin-top: 0.5rem;
  display: inline-block;
`;

export const Languages = ({ cardBackground }: LanguagesProps) => {
	return (
		<LanguagesSection id="languages">
			<Container>
				<SectionTitle>Languages</SectionTitle>

				<LanguagesGrid>
					<LanguageCard cardBackground={cardBackground}>
						<CardTitle>Italian</CardTitle>
						<CardSubtitle>Native Speaker</CardSubtitle>
						<LevelBadge>C2</LevelBadge>
					</LanguageCard>

					<LanguageCard cardBackground={cardBackground}>
						<CardTitle>English</CardTitle>
						<CardSubtitle>Professional Working Proficiency</CardSubtitle>
						<LevelBadge>B2</LevelBadge>
					</LanguageCard>
				</LanguagesGrid>
			</Container>
		</LanguagesSection>
	);
};
