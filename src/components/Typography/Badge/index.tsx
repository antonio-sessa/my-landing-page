"use client";

import type { ReactNode } from "react";
import styled, { css } from "styled-components";

type BadgeProps = {
	highlighted?: boolean;
	label?: string;
	children: ReactNode;
	className?: string;
	style?: React.CSSProperties;
};

const colors = {
	border: "#334155",
	borderDefault: "#374151",
	backgroundDefault: "rgba(255, 255, 255, 0.05)",
	backgroundHighlight: "rgba(96, 165, 250, 0.2)",
	textDefault: "#d1d5db", // fallback for badge
	textTag: "#e5e7eb", // default for tag-like badge
	textHighlight: "#f9fafb",
	borderHighlight: "#60a5fa",
};

const StyledBadge = styled.span<{ $highlighted?: boolean }>`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  line-height: 1;
  vertical-align: middle;
  border-radius: 0.375rem;
  border: 1px solid ${colors.borderDefault};
  background: ${colors.backgroundDefault};
  color: ${colors.textDefault};
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
  white-space: nowrap;

  ${({ $highlighted }) =>
		$highlighted &&
		css`
      background: ${colors.backgroundHighlight};
      color: ${colors.textHighlight};
      border-color: ${colors.borderHighlight};
      font-weight: 500;
    `}
`;

const Label = styled.span`
  color: ${colors.textTag};
  font-weight: 600;
`;

export const Badge = ({
	highlighted,
	label,
	children,
	className,
	style,
}: BadgeProps) => (
	<StyledBadge $highlighted={highlighted} className={className} style={style}>
		{label && <Label>{label}</Label>}
		{label ? " " : null}
		{children}
	</StyledBadge>
);

export default Badge;
