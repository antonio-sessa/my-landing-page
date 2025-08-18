import type { CSSProperties, ReactNode } from "react";
import styled, { css } from "styled-components";

type BadgeGroupProps = {
	children: ReactNode;
	align?: "left" | "center" | "right";
	gap?: string;
	padding?: string;
	style?: CSSProperties;
	className?: string;
};

const Wrapper = styled.div<{
	$align?: "left" | "center" | "right";
	$gap?: string;
	$padding?: string;
}>`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 1.3rem;
  min-height: 2.25rem;
  min-width: 100%;
  box-sizing: border-box;

  ${({ $align }) => {
		switch ($align) {
			case "left":
				return css`
          justify-content: flex-start;
          align-items: flex-start;
          align-content: flex-start;
        `;
			case "right":
				return css`
          justify-content: flex-end;
          align-items: flex-end;
          align-content: flex-end;
        `;
			default:
				return css`
          justify-content: center;
          align-items: center;
          align-content: center;
        `;
		}
	}}
`;

export const BadgeGroup = ({
	children,
	align = "center",
	gap = "0.5rem",
	padding = "0",
	style,
	className,
}: BadgeGroupProps) => (
	<Wrapper
		$align={align}
		$gap={gap}
		$padding={padding}
		style={style}
		className={className}
	>
		{children}
	</Wrapper>
);

export default BadgeGroup;
