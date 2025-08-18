"use client";

import Link from "next/link";
import styled from "styled-components";

const HeaderContainer = styled.header`
  padding: 1rem 2rem;
  background: rgba(31, 41, 55, 0.85);
  backdrop-filter: blur(10px);
  color: white;
  display: flex;
  align-items: center;
`;

const BackLink = styled.div`
  color: white;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const ReadingListHeader = () => {
	return (
		<HeaderContainer>
			<Link href="/" aria-label="Back to CV">
				<BackLink>&larr; Back to Home</BackLink>
			</Link>
		</HeaderContainer>
	);
};
