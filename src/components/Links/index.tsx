import React from "react";
import { render } from "react-dom";
import Link from "next/link";
import styled from "styled-components";
import { Racing_Sans_One } from "next/font/google";
import Image from "next/image";

export const racingSansOne = Racing_Sans_One({
  weight: "400",
  subsets: ["latin"],
});

const imageRootPath = "/media/images/links";

const links = [
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/antoniosessa/",
    image: `${imageRootPath}/Linkedin.png`,
  },
  {
    name: "GitHub",
    url: "https://github.com/antonio-sessa",
    image: `${imageRootPath}/GitHub.png`,
  },
  {
    name: "Unsplash",
    url: "https://unsplash.com/@antony_sex",
    image: `${imageRootPath}/Unsplash.png`,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/antony_sex/",
    image: `${imageRootPath}/Instagram.png`,
  },
  {
    name: "CV",
    url: "./media/antoniosessa_CV.pdf",
    image: `${imageRootPath}/CV.png`,
  },
  {
    name: "Unstoppable Domains",
    url: "https://ud.me/antoniosessa.nft",
    image: `${imageRootPath}/Unstoppable Domains.png`,
  },
];

const LinksSection = styled.section`
display: grid;
grid-template-columns: repeat(${links.length}, minmax(${
  100 / links.length
}%, auto));
width: var(--max-width);
max-width: 30%;

/* Tablet and Smaller Desktop */
@media (min-width: 701px) and (max-width: 1120px) {
  grid-template-columns: repeat(${links.length}, minmax(${
  100 / links.length
}%, auto));
min-width: 320px;
}

/* Mobile */
@media (max-width: 700px) {
    grid-template-columns: repeat(${links.length / 2}, minmax(${
  100 / (links.length / 2)
}%, auto));
    min-width: 250px;
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

  h2 {
    font-weight: 600;
    margin-bottom: 0.7rem;
    text-align: center;
  }

  p {
    margin: 0;
    opacity: 0.6;
    font-size: 0.9rem;
    line-height: 1.5;
    max-width: 30ch;
  }

  /* Enable hover only on non-touch devices */
  @media (hover: hover) and (pointer: fine) {
    :hover {
      background: rgba(var(--card-rgb), 0.1);
      border: 1px solid rgba(var(--card-border-rgb), 0.15);
    }

    :hover span {
      transform: translateY(4px);
    }
  }

  /* Enable hover only on non-touch devices */
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

  /* Tablet and Smaller Desktop */
  @media (min-width: 701px) and (max-width: 1120px) {
  }

  /* Mobile */
  @media (max-width: 700px) {
  }

  h2 {
    margin-bottom: 0rem;
    ${racingSansOne.style}
  }
`;

const LinkImage = styled.img`
  vertical-align: middle;

  max-width: 70%;
  border-radius: 23px;

  /* Tablet and Smaller Desktop */
  @media (min-width: 701px) and (max-width: 1120px) {
    max-width: 70%;
  }

  /* Mobile */
  @media (max-width: 700px) {
    max-width: 55%;
  }
`;

export const Links = () => {
  return (
    <LinksSection>
      {links.map((link, index) => (
        <Card
          key={link.name}
          href={link.url}
          aria-label={link.name}
          title={link.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkImage src={link.image} alt={link.name} />
        </Card>
      ))}
    </LinksSection>
  );
};
