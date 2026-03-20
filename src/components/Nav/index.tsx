"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";

const NavWrapper = styled.nav<{ $visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  padding: 0.75rem 1rem;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  transform: translateY(${({ $visible }) => ($visible ? "0" : "-100%")});
  transition: transform 300ms ease;
`;

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li``;

const NavLink = styled.a`
  color: #e5e7eb;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  opacity: 0.75;
  transition: opacity 200ms;

  &:hover {
    opacity: 1;
  }
`;

const links = [
	{ label: "Top", href: "#" },
	{ label: "About", href: "#about" },
	{ label: "Photography", href: "#photography" },
	{ label: "Experience", href: "#experience" },
];

export const Nav = () => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			setVisible(window.scrollY > 100);
		};

		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const handleClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string,
	) => {
		e.preventDefault();
		if (href === "#") {
			window.scrollTo({ top: 0, behavior: "smooth" });
		} else {
			const target = document.querySelector(href);
			if (target) target.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<NavWrapper $visible={visible}>
			<NavList>
				{links.map((link) => (
					<NavItem key={link.label}>
						<NavLink
							href={link.href}
							onClick={(e) => handleClick(e, link.href)}
						>
							{link.label}
						</NavLink>
					</NavItem>
				))}
			</NavList>
		</NavWrapper>
	);
};
