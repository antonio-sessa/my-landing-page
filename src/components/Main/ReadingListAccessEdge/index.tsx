import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface EdgeCardProps {
	$collapsed: boolean;
	$mounted: boolean;
}

const EdgeCard = styled.a<EdgeCardProps>`
  position: absolute;   
  top: 80%;              
  right: 0;              
  transform: translateY(-50%)
    ${({ $mounted }) => ($mounted ? "translateX(0)" : "translateX(110%)")};
  transition:
    transform 0.5s ease,
    max-width 0.5s ease;

  display: flex;
  align-items: center;
  background: rgba(31, 41, 55, 0.85);
  backdrop-filter: blur(10px);
  color: #f9fafb;
  border-top-left-radius: 1.25rem;
  border-bottom-left-radius: 1.25rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 8px 20px -6px rgba(0, 0, 0, 0.5);
  text-decoration: none;
  z-index: 2;
  overflow: hidden;

  /* Smooth width change for sliding effect */
  max-width: ${({ $collapsed }) => ($collapsed ? "3rem" : "200px")};
`;

const Icon = styled.span`
  font-size: 1.5rem;
  padding: 0.75rem;
  flex-shrink: 0;
`;

const Text = styled.span<{ $collapsed: boolean }>`
  white-space: nowrap;
  overflow: hidden;
  transition: opacity 0.35s ease;
  opacity: ${({ $collapsed }) => ($collapsed ? 0 : 1)};
`;

export const ReadingListAccessEdge = () => {
	const [collapsed, setCollapsed] = useState(false);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		// Start slide-in after 2 seconds
		const mountTimer = setTimeout(() => {
			setMounted(true);

			// Collapse 3 seconds after showing
			const collapseTimer = setTimeout(() => setCollapsed(true), 3000);
			return () => clearTimeout(collapseTimer);
		}, 2000);

		return () => clearTimeout(mountTimer);
	}, []);

	return (
		<Link href="/reading-list" passHref legacyBehavior>
			<EdgeCard
				aria-label="Go to Reading List"
				$collapsed={collapsed}
				$mounted={mounted}
			>
				<Icon>📚</Icon>
				<Text $collapsed={collapsed}>My Reading List</Text>
			</EdgeCard>
		</Link>
	);
};
