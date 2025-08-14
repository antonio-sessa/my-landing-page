"use client";

import { Racing_Sans_One } from "next/font/google";
import styled from "styled-components";

export const racingSansOne = Racing_Sans_One({
	weight: "400",
	subsets: ["latin"],
});

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
`;

const Title = styled.h1`
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;

  -moz-animation-delay: 1s;
  -webkit-animation-delay: 1s;
  animation-delay: 1s;

  @-webkit-keyframes fadeInDown {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  @keyframes fadeInDown {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;

  font-size: 3.5em;
  ${racingSansOne.style}

  @media (max-width: 767px) {
    font-size: 2.5em;
  }
`;

const SubTitle = styled.h2`
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;

  -moz-animation-delay: 1s;
  -webkit-animation-delay: 1s;
  animation-delay: 1s;

  @-webkit-keyframes fadeInUp {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;

  font-size: 1.5em;

  @media (max-width: 767px) {
    font-size: 1.2em;
  }
`;

export const Hero = () => {
	return (
		<HeroSection>
			<Title>Antonio Sessa</Title>
			<SubTitle>
				Senior QA Engineer - Photographer - Curious about life
			</SubTitle>
		</HeroSection>
	);
};
