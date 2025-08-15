"use client";

import Image from "next/image";
import type { PropsWithChildren } from "react";
import styled from "styled-components";

export const LandingWrapper = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  padding: 2rem;
  min-height: 100vh;
  max-height: 100vh;
  text-align: center;
  overflow: hidden;

  /* Preserve your responsive paddings */
  padding-top: 70vh;

  @media (max-width: 1120px) {
    padding-top: 62vh;
  }

  @media (max-width: 1120px) and (orientation: landscape) {
    padding-top: 60vh;
  }

  @media (max-width: 700px) and (orientation: portrait) {
    padding-top: 52vh;
  }

  @media (max-width: 700px) and (orientation: landscape) {
    padding-top: 34vh;
  }

  /* Stack children above background */
  > * {
    position: relative;
    z-index: 1;
  }
`;

const Background = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
`;

export const Landing = ({ children }: PropsWithChildren) => {
	return (
		<LandingWrapper>
			<Background>
				<Image
					src="/media/images/landing.jpg"
					alt=""
					fill
					priority
					sizes="100vw"
					style={{ objectFit: "cover" }}
				/>
			</Background>
			{children}
		</LandingWrapper>
	);
};
