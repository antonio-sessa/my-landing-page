"use client";

import { Racing_Sans_One } from "next/font/google";
import Image from "next/image";
import styled from "styled-components";

export const racingSansOne = Racing_Sans_One({
	weight: "400",
	subsets: ["latin"],
});

const imageRootPath = "/media/images/logos";

const links = [
	{
		name: "Linkedin",
		url: "https://www.linkedin.com/in/antoniosessa/",
		image: `${imageRootPath}/linkedin.png`,
	},
	{
		name: "GitHub",
		url: "https://github.com/antonio-sessa",
		image: `${imageRootPath}/github.png`,
	},
	{
		name: "Unsplash",
		url: "https://unsplash.com/@antony_sex",
		image: `${imageRootPath}/unsplash.png`,
	},
	{
		name: "Instagram",
		url: "https://www.instagram.com/antony_sex/",
		image: `${imageRootPath}/instagram.png`,
	},
];

const LinksSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;  /* Center horizontally */
  gap: 1rem;                 /* Even gap between icons */
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const Card = styled.a`
  --card-rgb: 180, 185, 188;
  --card-border-rgb: 131, 134, 135;
  vertical-align: middle;
  border-radius: var(--border-radius);
  background: rgba(var(--card-rgb), 0);
  border: 1px solid rgba(var(--card-border-rgb), 0);
  transition: background 200ms, border 200ms;

  span {
    display: inline-block;
    transition: transform 200ms;
  }

  /* Hover effects for non-touch devices */
  @media (hover: hover) and (pointer: fine) {
    :hover {
      background: rgba(var(--card-rgb), 0.1);
      border: 1px solid rgba(var(--card-border-rgb), 0.15);
    }
    :hover span {
      transform: translateY(4px);
    }
  }

  @media (prefers-reduced-motion) {
    :hover span {
      transform: none;
    }
  }

  h2 {
    margin-bottom: 0rem;
    ${racingSansOne.style}
    font-weight: 600;
    text-align: center;
  }
`;

const LinkImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  border-radius: 23px;
  overflow: hidden;

  @media (max-width: 700px) {
    width: 45px;   /* Smaller icons on mobile */
    height: 45px;
    border-radius: 12px;
  }

  img {
    width: auto;
    height: 100%;
    object-fit: contain;
    display: block;
  }
`;

export const Links = () => {
	return (
		<LinksSection>
			{links.map((link) => (
				<Card
					key={link.name}
					href={link.url}
					aria-label={link.name}
					title={link.name}
					target="_blank"
					rel="noopener noreferrer"
				>
					<LinkImageWrapper>
						<Image
							src={link.image}
							alt={link.name}
							width={64}
							height={64}
							priority={link.name === "Linkedin"} // preload first icon
							style={{ width: "auto", height: "100%", objectFit: "contain" }}
						/>
					</LinkImageWrapper>
				</Card>
			))}
		</LinksSection>
	);
};
