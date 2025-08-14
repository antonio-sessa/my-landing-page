"use client";

import styled from "styled-components";

const Card = styled.div<{ $cardBackground?: string }>`
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

export default Card;
