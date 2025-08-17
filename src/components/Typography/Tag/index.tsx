import type { ReactNode } from "react";
import styled, { css } from "styled-components";

type TagProps = {
	highlighted?: boolean;
	label?: string;
	children: ReactNode;
};

const colors = {
	border: "#334155",
	backgroundDefault: "rgba(255, 255, 255, 0.05)",
	backgroundHighlight: "rgba(96, 165, 250, 0.2)",
	textDefault: "#e5e7eb",
	textHighlight: "#f9fafb",
	borderHighlight: "#60a5fa",
};

const StyledTag = styled.span<{ $highlighted?: boolean }>`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1;
  vertical-align: middle;
  border-radius: 0.375rem;
  border: 1px solid ${colors.border};
  background: ${colors.backgroundDefault};
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
  color: ${colors.textDefault};
  font-weight: 600;
`;

const Tag = ({ highlighted, label, children }: TagProps) => (
	<StyledTag $highlighted={highlighted}>
		{label && <Label>{label}</Label>} {label && " "}
		{children}
	</StyledTag>
);

export default Tag;
