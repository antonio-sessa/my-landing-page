"use client";

import React, { type ReactElement, type ReactNode } from "react";
import styled from "styled-components";

const ContentContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  /* Elegant, eye-friendly dark background */
  background-color: #0f172a; /* Deep slate (cool dark) */
  color: #d1d5db;            /* Light gray text */

  font-family: system-ui, sans-serif;

  h1, h2, h3, h4, h5, h6 {
    color: #f9fafb; /* Bright heading color */
    margin-top: 0;
  }

  a {
    color: #60a5fa;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  > * {
    width: 100%;
  }

    a {
    color: #f9fafb;            // bright white
    text-decoration: underline;
  }

  a:hover {
    text-decoration: underline;
  }
`;

type ContentProps = {
	children: ReactNode;
};

export const Content = ({ children }: ContentProps) => {
	const cardBackground = "#1e293b"; // Slate-800

	return (
		<ContentContainer>
			{React.Children.map(children, (child) => {
				if (React.isValidElement(child)) {
					return React.cloneElement(
						child as ReactElement<{ cardBackground?: string }>,
						{ cardBackground },
					);
				}
				return child;
			})}
		</ContentContainer>
	);
};
