import styled from "styled-components";

const StyledLink = styled.a.attrs(() => ({
	target: "_blank",
	rel: "noopener noreferrer",
}))`
  font-weight: 600;
  cursor: pointer;
  text-decoration: underline;

  &:focus {
    text-decoration: underline;
    outline: none;
  }
`;

export interface LinkProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string;
	children: React.ReactNode;
	ariaLabel?: string;
}

export const Link = ({ href, children, ariaLabel, ...rest }: LinkProps) => {
	return (
		<StyledLink href={href} aria-label={ariaLabel} {...rest}>
			{children}
		</StyledLink>
	);
};
