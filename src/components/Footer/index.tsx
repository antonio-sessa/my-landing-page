"use client";

import styled from "styled-components";
import { Link } from "../Typography/Link";

const FooterWrapper = styled.div`
  background-color: #000000;
  color: #fff;
  text-align: center;
  padding: 2rem 1rem;
`;

const CTAText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #e5e7eb;
`;

const LinkedInButton = styled(Link)`
  display: inline-block;
  padding: 0.6rem 1.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 2rem;
  color: #e5e7eb;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 200ms, color 200ms;
  font-size: 0.95rem;

  &:hover {
    background-color: #e5e7eb;
    color: #000000;
    text-decoration: none;
  }

  &:focus {
    text-decoration: none;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin: 1.5rem auto;
  max-width: 24rem;
`;

const Meta = styled.p`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.4);
`;

export const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<FooterWrapper>
			<CTAText>Want to get in touch?</CTAText>
			<LinkedInButton
				href="https://www.linkedin.com/in/antoniosessa/"
				ariaLabel="Connect with Antonio Sessa on LinkedIn"
			>
				Connect on LinkedIn
			</LinkedInButton>
			<Divider />
			<Meta>Coded with ♥ by Antonio Sessa · © {currentYear} · Milan, IT</Meta>
		</FooterWrapper>
	);
};
