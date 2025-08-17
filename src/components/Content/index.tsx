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
