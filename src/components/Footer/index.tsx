"use client";

import styled from "styled-components";

const FooterWrapper = styled.div`
  background-color: #000000;
  color: #fff;
  text-align: center;
  height: 6em;
  padding-top: 8px;
  justify-content: center;
`;

const P = styled.p`
  padding-top: 1em;
  text-align: center;
`;

const Location = styled.span`
  padding-left: 1em;
`;

export const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<FooterWrapper>
			<P>
				{`Coded with ♥ by Antonio Sessa`}
				<br />
				{`© ${currentYear} `}
				<Location>
					<i className="fa fa-map-marker" aria-hidden="true"></i> {`Milan, IT`}
				</Location>
			</P>
		</FooterWrapper>
	);
};
