import type React from "react";
import styled from "styled-components";

type BadgeGroupProps = {
	children: React.ReactNode;
	align?: "left" | "center" | "right";
};

const Wrapper = styled.div<{ align?: "left" | "center" | "right" }>`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.5rem;
  justify-content: ${({ align }) =>
		align === "left"
			? "flex-start"
			: align === "right"
				? "flex-end"
				: "center"};
  align-items: center;
`;

const BadgeGroup = ({ children, align = "center" }: BadgeGroupProps) => {
	return <Wrapper align={align}>{children}</Wrapper>;
};

export default BadgeGroup;
