"use client";

import Link from "next/link";
import styled from "styled-components";
import { ScrollTopBar } from "../ScrollTopBar";

const NavList = styled.ul`
	display: flex;
	gap: 2rem;
	list-style: none;
	margin: 0;
	padding: 0;
`;

const NavItemWrapper = styled.li``;

const BaseNavItemStyles = `
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

const ActionLink = styled.a`
	${BaseNavItemStyles}
	cursor: pointer;
`;

const RouteLink = styled(Link)`
	${BaseNavItemStyles}
`;

type NavItem =
	| {
			label: string;
			type: "scroll-top";
	  }
	| {
			label: string;
			type: "scroll-to";
			target: string;
	  }
	| {
			label: string;
			type: "route";
			href: string;
			ariaLabel?: string;
	  };

type TopNavProps = {
	items: NavItem[];
	showAfter?: number;
};

export const TopNav = ({ items, showAfter = 100 }: TopNavProps) => {
	const handleActionClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		item: Extract<NavItem, { type: "scroll-top" | "scroll-to" }>,
	) => {
		e.preventDefault();

		if (item.type === "scroll-top") {
			window.scrollTo({ top: 0, behavior: "smooth" });
			return;
		}

		const target = document.querySelector(item.target);
		if (target) {
			target.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<ScrollTopBar showAfter={showAfter}>
			<NavList>
				{items.map((item) => (
					<NavItemWrapper key={item.label}>
						{item.type === "route" ? (
							<RouteLink href={item.href} aria-label={item.ariaLabel}>
								{item.label}
							</RouteLink>
						) : (
							<ActionLink href="#" onClick={(e) => handleActionClick(e, item)}>
								{item.label}
							</ActionLink>
						)}
					</NavItemWrapper>
				))}
			</NavList>
		</ScrollTopBar>
	);
};
