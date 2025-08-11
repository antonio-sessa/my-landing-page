import type { ReactNode } from "react";
import styled, { css } from "styled-components";

type TagProps = {
	highlighted?: boolean;
	label?: string; // optional prefix inside tag
	children: ReactNode;
};

const StyledTag = styled.span<{ $highlighted?: boolean }>`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1;
  vertical-align: middle;
  border-radius: 0.375rem;
  border: 1px solid #334155;
  color: #e5e7eb;
  background: rgba(255, 255, 255, 0.05);
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
  white-space: nowrap;

  ${({ $highlighted }) =>
		$highlighted &&
		css`
      background: rgba(96, 165, 250, 0.2);
      color: #f9fafb;
      border-color: #60a5fa;
      font-weight: 500;
    `}
`;

const Tag = ({ highlighted, label, children }: TagProps) => {
	return (
		<StyledTag $highlighted={highlighted}>
			{label && (
				<span style={{ color: "#e5e7eb", fontWeight: 600 }}>{label}</span>
			)}
			{label ? " " : null}
			{children}
		</StyledTag>
	);
};

export default Tag;
