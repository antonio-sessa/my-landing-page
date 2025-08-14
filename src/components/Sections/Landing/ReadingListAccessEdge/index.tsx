"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface EdgeCardProps {
	$collapsed: boolean;
	$mounted: boolean;
}

const SLIDE_IN_DELAY = 2000; // ms before sliding in
const COLLAPSE_DELAY = 3000; // ms before collapsing to circle

export const ReadingListAccessEdge = () => {
	const [collapsed, setCollapsed] = useState(false);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		const mountTimer = setTimeout(() => {
			setMounted(true);

			const collapseTimer = setTimeout(() => {
				setCollapsed(true);
			}, COLLAPSE_DELAY);

			return () => clearTimeout(collapseTimer);
		}, SLIDE_IN_DELAY);

		return () => clearTimeout(mountTimer);
	}, []);

	return (
		<Link href="/reading-list" aria-label="Go to Reading List">
			<EdgeCard $collapsed={collapsed} $mounted={mounted}>
				<Icon>📚</Icon>
				<Text $collapsed={collapsed}>My Reading List</Text>
			</EdgeCard>
		</Link>
	);
};

const EdgeCard = styled.div<EdgeCardProps>`
  position: fixed;
  bottom: calc(1.5rem + env(safe-area-inset-bottom, 0px));
  right: calc(1.5rem + env(safe-area-inset-right, 0px));
  transform: ${({ $mounted }) =>
		$mounted ? "translateX(0)" : "translateX(110%)"};
  transition:
    transform 0.5s ease,
    max-width 0.5s ease,
    width 0.5s ease,
    border-radius 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: ${({ $collapsed }) =>
		$collapsed ? "center" : "flex-start"};
  background: rgba(31, 41, 55, 0.85);
  backdrop-filter: blur(10px);
  color: #f9fafb;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 8px 20px -6px rgba(0, 0, 0, 0.5);
  z-index: 9999;
  overflow: hidden;

  border-radius: ${({ $collapsed }) => ($collapsed ? "50%" : "9999px")};
  width: ${({ $collapsed }) => ($collapsed ? "3rem" : "200px")};
  max-width: ${({ $collapsed }) => ($collapsed ? "3rem" : "200px")};
  height: 3rem;

  @media (max-width: 768px) {
    bottom: calc(2rem + env(safe-area-inset-bottom, 0px));
    right: calc(0.75rem + env(safe-area-inset-right, 0px));
    width: ${({ $collapsed }) => ($collapsed ? "2.5rem" : "160px")};
    max-width: ${({ $collapsed }) => ($collapsed ? "2.5rem" : "160px")};
    height: 2.5rem;
    font-size: 0.9rem;
  }
`;

const Icon = styled.span`
  font-size: 1.5rem;
  padding: 0 0.75rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.span<{ $collapsed: boolean }>`
  white-space: nowrap;
  overflow: hidden;
  transition: opacity 0.35s ease, margin-right 0.35s ease;
  opacity: ${({ $collapsed }) => ($collapsed ? 0 : 1)};
  margin-right: ${({ $collapsed }) => ($collapsed ? "0" : "0.5rem")};
  flex-grow: 1;
`;
