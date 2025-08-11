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
	{
		name: "Unstoppable Domains",
		url: "https://ud.me/antoniosessa.nft",
		image: `${imageRootPath}/unstoppable-domains.png`,
	},
];

const LinksSection = styled.section`
  display: grid;
  grid-template-columns: repeat(
    ${links.length},
    minmax(${100 / links.length}%, auto)
  );
  width: var(--max-width);
  max-width: 30%;

  /* Tablet and Smaller Desktop */
  @media (min-width: 701px) and (max-width: 1120px) {
    grid-template-columns: repeat(
      ${links.length},
      minmax(${100 / links.length}%, auto)
    );
    min-width: 320px;
  }

  /* Mobile */
  @media (max-width: 700px) {
    grid-template-columns: repeat(
      ${links.length / 2},
      minmax(${100 / (links.length / 2)}%, auto)
    );
    min-width: 250px;
  }
`;

const Card = styled.a`
  --card-rgb: 180, 185, 188;
  --card-border-rgb: 131, 134, 135;

  vertical-align: middle;
  border-radius: var(--border-radius);
  background: rgba(var(--card-rgb), 0);
  border: 1px solid rgba(var(--card-border-rgb), 0);
  transition:
    background 200ms,
    border 200ms;

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

  img {
    border-radius: 23px;
    max-width: 70%;
    height: auto;

    @media (min-width: 701px) and (max-width: 1120px) {
      max-width: 75%;
    }

    @media (max-width: 700px) {
      max-width: 75%;
    }
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
							src={link.image} // Stored in /public/media/images/logos/
							alt={link.name}
							width={64}
							height={64}
							priority={link.name === "Linkedin"} // preload first link
						/>
					</LinkImageWrapper>
				</Card>
			))}
		</LinksSection>
	);
};
