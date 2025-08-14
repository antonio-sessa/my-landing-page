"use client";

import styled from "styled-components";
import type { Reading } from "../../../types/reading";
import type { SectionProps } from "../../../types/section-pros";

import CardTitle from "../../Typography/CardTitle";
import Description from "../../Typography/Description";
import { Link } from "../../Typography/Link";
import SectionTitle from "../../Typography/SectionTitle";
import BadgeGroup from "../../UI/BadgeGroup";
import Card from "../../UI/Card";
import Container from "../../UI/Container";
import Grid from "../../UI/Grid";
import SectionBlock from "../../UI/SectionBlock";
import Tag from "../../UI/Tag";

interface ReadingListProps extends SectionProps {
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

const TopRightBadgeGroup = styled(BadgeGroup)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;

  min-width: unset;
  margin-top: 0;
  justify-content: flex-end;
`;

export const ReadingList = ({ cardBackground, readings }: ReadingListProps) => {
	return (
		<SectionBlock id="reading-list">
			<Container>
				<SectionTitle>📚 Reading List</SectionTitle>

				<ReadingGrid>
					{readings.map((book) => {
						const formattedDate = book.createdAt
							? new Date(book.createdAt).toLocaleDateString(undefined, {
									year: "numeric",
									month: "short",
								})
							: null;

						return (
							<ReadingItemCard $cardBackground={cardBackground} key={book.id}>
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
									<Description style={{ marginTop: "0.25rem" }}>
										{book.summary}
									</Description>
								)}

								{(book.status || formattedDate) && (
									<TopRightBadgeGroup align="right">
										{book.status && <Tag>{book.status}</Tag>}
										{formattedDate && <Tag>{formattedDate}</Tag>}
									</TopRightBadgeGroup>
								)}
							</ReadingItemCard>
						);
					})}
				</ReadingGrid>
			</Container>
		</SectionBlock>
	);
};
