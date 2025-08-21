import type { ReactNode } from "react";
import styled from "styled-components";

type ListItemProps = {
	children: ReactNode;
	highlighted?: boolean;
	className?: string;
	style?: React.CSSProperties;
};

const StyledListItem = styled.li<{ $highlighted?: boolean }>`
  margin-bottom: 0.5rem;
  line-height: 1.6;
  position: relative;
  padding-left: 0.75rem;
  color: #f9fafb;

  ${({ $highlighted }) =>
		$highlighted &&
		`
      background: rgba(96, 165, 250, 0.07);
      border-radius: 0.25rem;
      padding-right: 0.5rem;
      font-weight: 500;
    `}
`;

export const ListItem = ({
	children,
	highlighted,
	className,
	style,
}: ListItemProps) => (
	<StyledListItem
		$highlighted={highlighted}
		className={className}
		style={style}
	>
		{children}
	</StyledListItem>
);

export default ListItem;
