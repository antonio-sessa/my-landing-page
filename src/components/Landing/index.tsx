"use client";

import Image from "next/image";
import type { PropsWithChildren } from "react";
import styled from "styled-components";

export const LandingWrapper = styled.section`
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

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.05) 0%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0.45) 100%
  );
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
			<Overlay />
			{children}
		</LandingWrapper>
	);
};
