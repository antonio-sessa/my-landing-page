import styled from "styled-components";
import type { Reading } from "../../../types/reading";
import CardTitle from "../../Typography/CardTitle";
import { Link } from "../../Typography/Link";
import Paragraph from "../../Typography/Paragraph";
import SectionTitle from "../../Typography/SectionTitle";
import Tag from "../../Typography/Tag";
import BadgeGroup from "../../UI/BadgeGroup";
import Card from "../../UI/Card";
import Container from "../../UI/Container";
import Grid from "../../UI/Grid";
import SectionBlock from "../../UI/SectionBlock";

interface ReadingListProps {
	readings: Reading[];
}

const ReadingGrid = styled(Grid)`
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ReadingItemCard = styled(Card)`
  position: relative;
  text-align: left;
  padding: 0.75rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: flex-start;
  min-height: 120px; 
  box-sizing: border-box;
`;

const Summary = styled(Paragraph)`
  white-space: pre-wrap;
`;

export const ReadingList = ({ readings }: ReadingListProps) => {
	return (
		<SectionBlock id="reading-list">
			<Container>
				<SectionTitle>📚 Reading List</SectionTitle>

				<ReadingGrid>
					{readings.map((book) => {
						const formattedDate = book.createdAt
							? new Date(book.createdAt).toLocaleDateString("en-US", {
									year: "numeric",
									month: "short",
								})
							: null;

						return (
							<ReadingItemCard key={book.id}>
								{book.link ? (
									<Link
										href={book.link}
										ariaLabel={`Read more about ${book.title}`}
									>
										<CardTitle style={{ marginBottom: 0 }}>
											{book.title}
										</CardTitle>
									</Link>
								) : (
									<CardTitle style={{ marginBottom: 0 }}>
										{book.title}
									</CardTitle>
								)}

								{book.summary && (
									<Summary style={{ marginTop: "0.25rem" }}>
										{book.summary}
									</Summary>
								)}

								{(book.status || formattedDate) && (
									<BadgeGroup align="right">
										{book.status && <Tag>{book.status}</Tag>}
										{formattedDate && <Tag>{formattedDate}</Tag>}
									</BadgeGroup>
								)}
							</ReadingItemCard>
						);
					})}
				</ReadingGrid>
			</Container>
		</SectionBlock>
	);
};
