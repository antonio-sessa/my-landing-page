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
  	box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.5);
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
