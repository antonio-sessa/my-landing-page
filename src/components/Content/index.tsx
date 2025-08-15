"use client";

import type { ReactNode } from "react";
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

  h1, h2, h3, h4, h5, h6 {
    color: #f9fafb; /* Bright heading color */
    margin-top: 0;
  }

  a {
    color: #f9fafb;            /* bright white */
    text-decoration: underline;

    &:hover {
      text-decoration: underline;
    }
  }

  > * {
    width: 100%;
  }
`;

type ContentProps = {
	children: ReactNode;
};

export const Content = ({ children }: ContentProps) => {
	return <ContentContainer>{children}</ContentContainer>;
};
