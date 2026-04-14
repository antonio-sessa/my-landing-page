"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";

const BarWrapper = styled.nav<{ $visible: boolean }>`
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

type ScrollTopBarProps = {
	children: React.ReactNode;
	showAfter?: number;
};

export const ScrollTopBar = ({
	children,
	showAfter = 100,
}: ScrollTopBarProps) => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			setVisible(window.scrollY > showAfter);
		};

		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [showAfter]);

	return <BarWrapper $visible={visible}>{children}</BarWrapper>;
};
