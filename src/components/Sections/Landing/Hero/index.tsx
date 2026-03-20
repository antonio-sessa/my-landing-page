"use client";

import { Racing_Sans_One, Roboto } from "next/font/google";
import styled from "styled-components";

export const racingSansOne = Racing_Sans_One({
	weight: "400",
	subsets: ["latin"],
});

export const roboto = Roboto({
	weight: "400",
	subsets: ["latin"],
});

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  gap: 1rem;
`;

const Title = styled.h1`
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-delay: 1s;
  animation-name: fadeInDown;

  @keyframes fadeInDown {
    0% {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }

  font-size: 3.75em;
  ${racingSansOne.style}
  color: #f9fafb;
  text-shadow:
    0 2px 4px rgba(0, 0, 0, 0.4),
    0 4px 24px rgba(0, 0, 0, 0.3);
  letter-spacing: 0.02em;

  @media (max-width: 767px) {
    font-size: 2.5em;
  }

  @media (max-width: 400px) {
    font-size: 2em;
  }
`;

const Tagline = styled.p`
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-delay: 1.2s;
  animation-name: fadeInUp;

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }

  font-size: 1.35em;
  ${roboto.style}
  color: #f9fafb;
  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
  font-style: italic;
  letter-spacing: 0.05em;
  margin: 0;

  @media (max-width: 767px) {
    font-size: 1.1em;
  }
`;

export const Hero = () => {
	return (
		<HeroSection>
			<Title>Antonio Sessa</Title>
			<Tagline>Curious by nature. Rigorous by profession.</Tagline>
		</HeroSection>
	);
};
